"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { bookings, fields, services, formatCurrency, STATUS_COLORS } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CalendarDays, CheckCircle2, Clock, MapPin, Phone, QrCode, Search, ShoppingCart, XCircle } from "lucide-react";

const QrScanner = dynamic(
  () => import("@/components/qr-scanner").then(m => m.QrScanner),
  { ssr: false }
);

type Booking = (typeof bookings)[0];

function getValidation(
  b: Booking,
  today: string,
  checkedInIds: number[]
): { valid: boolean; reason?: string } {
  if (checkedInIds.includes(b.id) || b.status === "Đã check-in")
    return { valid: false, reason: "Đơn này đã được check-in trước đó" };
  if (b.status === "Đã hủy")
    return { valid: false, reason: "Đơn đã bị hủy, không thể check-in" };
  if (b.status === "Hoàn thành")
    return { valid: false, reason: "Đơn đã hoàn thành" };
  if (b.status === "Chờ xác nhận")
    return { valid: false, reason: "Đơn chưa được quản lý xác nhận" };
  if (b.date < today)
    return { valid: false, reason: `Đơn đã quá hạn (${b.date.split("-").reverse().join("/")})` };
  if (b.date > today)
    return { valid: false, reason: `Chưa đến ngày check-in (${b.date.split("-").reverse().join("/")})` };
  return { valid: true };
}

export default function CheckInPage() {
  const today = new Date().toISOString().split("T")[0];

  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [selected, setSelected] = useState<Booking | null>(null);
  const [checkedInIds, setCheckedInIds] = useState<number[]>([]);
  const [cart, setCart] = useState<{ id: number; qty: number }[]>([]);
  const [payMethod, setPayMethod] = useState<"Tiền mặt" | "Chuyển khoản" | "Ví điện tử">("Tiền mặt");
  const [showInvoice, setShowInvoice] = useState(false);
  const [showScanner, setShowScanner] = useState(false);

  // ── Search ──────────────────────────────────────────────────────────────────
  const searchResults = hasSearched && query.trim()
    ? bookings.filter(b => {
        const q = query.trim().toLowerCase();
        return (
          b.customerPhone.includes(q) ||
          b.customerName.toLowerCase().includes(q) ||
          b.id.toString() === q.replace("#", "")
        );
      })
    : [];

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setHasSearched(true);
    setSelected(null);
    setCart([]);
    setShowInvoice(false);
  }

  function handleQrScan(data: string) {
    setShowScanner(false);
    // Parse LDH-BOOKING-{id}
    const match = data.match(/^LDH-BOOKING-(\d+)$/);
    if (!match) return;
    const bookingId = match[1];
    setQuery(bookingId);
    setHasSearched(true);
    setCart([]);
    setShowInvoice(false);
    // Auto-select the booking
    const found = bookings.find(b => b.id === Number(bookingId));
    setSelected(found ?? null);
  }

  function handleSelect(b: Booking) {
    setSelected(b);
    setCart([]);
    setShowInvoice(false);
  }

  // ── Check-in ────────────────────────────────────────────────────────────────
  function handleConfirmCheckin() {
    if (!selected) return;
    setCheckedInIds(prev => [...prev, selected.id]);
  }

  // ── Cart / services ──────────────────────────────────────────────────────────
  const facilityId = selected
    ? (fields.find(f => f.id === selected.fieldId)?.facilityId ?? 1)
    : 1;
  const availableServices = services.filter(s => s.facilityId === facilityId);

  function addToCart(id: number) {
    setCart(prev => {
      const item = prev.find(c => c.id === id);
      return item ? prev.map(c => c.id === id ? { ...c, qty: c.qty + 1 } : c) : [...prev, { id, qty: 1 }];
    });
  }
  function removeFromCart(id: number) {
    setCart(prev => {
      const item = prev.find(c => c.id === id);
      if (!item) return prev;
      return item.qty <= 1 ? prev.filter(c => c.id !== id) : prev.map(c => c.id === id ? { ...c, qty: c.qty - 1 } : c);
    });
  }

  const cartTotal = cart.reduce((sum, c) => {
    const svc = services.find(s => s.id === c.id);
    return sum + (svc?.price ?? 0) * c.qty;
  }, 0);
  const fieldAmount = selected ? selected.totalPrice - selected.discount : 0;
  const grandTotal = fieldAmount + cartTotal;

  // ── Derived state ────────────────────────────────────────────────────────────
  const isCheckedIn = selected
    ? checkedInIds.includes(selected.id) || selected.status === "Đã check-in"
    : false;
  const validation = selected ? getValidation(selected, today, checkedInIds) : null;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Check-in Nhận sân</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Nhập SĐT, tên khách hoặc mã đặt sân · Hôm nay:{" "}
          {today.split("-").reverse().join("/")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* ── Left: Search panel ── */}
        <div className="lg:col-span-2 space-y-3">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="SĐT, tên khách hoặc mã #..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button type="submit" className="bg-green-700 hover:bg-green-800 shrink-0">
              <Search className="w-4 h-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              className="shrink-0"
              onClick={() => setShowScanner(true)}
              title="Quét mã QR"
            >
              <QrCode className="w-4 h-4" />
            </Button>
          </form>

          {/* QR Scanner dialog */}
          <Dialog open={showScanner} onOpenChange={setShowScanner}>
            <DialogContent className="max-w-sm">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <QrCode className="w-5 h-5 text-green-700" /> Quét mã QR
                </DialogTitle>
              </DialogHeader>
              {showScanner && (
                <QrScanner
                  onScan={handleQrScan}
                  onError={(msg) => console.warn("QR scan error:", msg)}
                />
              )}
            </DialogContent>
          </Dialog>

          {hasSearched && searchResults.length === 0 && (
            <div className="text-center py-10 text-muted-foreground text-sm bg-gray-50 rounded-xl border border-dashed">
              <Search className="w-10 h-10 mx-auto mb-2 text-gray-200" />
              Không tìm thấy đơn đặt sân nào
            </div>
          )}

          {searchResults.map(b => {
            const v = getValidation(b, today, checkedInIds);
            const effectiveStatus = checkedInIds.includes(b.id) ? "Đã check-in" : b.status;
            return (
              <Card
                key={b.id}
                onClick={() => handleSelect(b)}
                className={`cursor-pointer transition-all ${
                  selected?.id === b.id ? "ring-2 ring-green-500" : "hover:shadow-sm"
                }`}
              >
                <CardContent className="py-3 px-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="font-semibold text-sm">{b.customerName}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Phone className="w-3 h-3" /> {b.customerPhone}
                      </p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" /> {b.fieldName}
                        <Clock className="w-3 h-3 ml-1" /> {b.startTime}–{b.endTime}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        <CalendarDays className="w-3 h-3 inline mr-1" />
                        {b.date.split("-").reverse().join("/")} · #{b.id}
                      </p>
                    </div>
                    <div className="text-right space-y-1 shrink-0">
                      <Badge className={`text-xs ${STATUS_COLORS[effectiveStatus]}`}>
                        {effectiveStatus}
                      </Badge>
                      {!v.valid && !checkedInIds.includes(b.id) && (
                        <p className="text-xs text-red-500 max-w-24">{v.reason}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {!hasSearched && (
            <div className="text-center py-14 text-muted-foreground text-sm">
              <QrCode className="w-14 h-14 mx-auto mb-3 text-gray-200" />
              <p className="font-medium text-gray-400">Quét mã QR hoặc nhập thông tin</p>
              <p className="mt-1 text-xs">khách hàng để tra cứu đơn đặt sân</p>
            </div>
          )}
        </div>

        {/* ── Right: Detail / Check-in panel ── */}
        <div className="lg:col-span-3">
          {!selected ? (
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <CheckCircle2 className="w-14 h-14 mx-auto mb-3 text-gray-200" />
                <p>Chọn một đơn đặt sân để thực hiện check-in</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Validation result — only show when NOT yet checked in */}
              {validation && !validation.valid && !isCheckedIn && (
                <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-700 text-sm">Từ chối check-in</p>
                    <p className="text-sm text-red-600 mt-0.5">{validation.reason}</p>
                  </div>
                </div>
              )}

              {/* Booking info card */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center justify-between">
                    <span>Đơn đặt sân #{selected.id}</span>
                    <Badge className={`text-xs ${STATUS_COLORS[isCheckedIn ? "Đã check-in" : selected.status]}`}>
                      {isCheckedIn ? "Đã check-in" : selected.status}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                  <div>
                    <p className="text-xs text-muted-foreground">Khách hàng</p>
                    <p className="font-medium">{selected.customerName}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">SĐT</p>
                    <p className="font-medium">{selected.customerPhone}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Sân</p>
                    <p className="font-medium">{selected.fieldName}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Khung giờ</p>
                    <p className="font-medium">{selected.startTime} – {selected.endTime}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Ngày</p>
                    <p className="font-medium">{selected.date.split("-").reverse().join("/")}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Tiền sân</p>
                    <p className="font-semibold text-green-700">{formatCurrency(fieldAmount)}</p>
                  </div>
                  {selected.note && (
                    <div className="col-span-2">
                      <p className="text-xs text-muted-foreground">Ghi chú</p>
                      <p className="text-sm italic text-muted-foreground">"{selected.note}"</p>
                    </div>
                  )}
                </CardContent>

                {/* Check-in button: only if valid and not yet checked in */}
                {validation?.valid && !isCheckedIn && (
                  <CardContent className="pt-0">
                    <Button className="w-full bg-green-700 hover:bg-green-800" onClick={handleConfirmCheckin}>
                      <CheckCircle2 className="w-4 h-4 mr-2" /> Xác nhận Check-in
                    </Button>
                  </CardContent>
                )}
              </Card>

              {/* Service sales: show after check-in, before invoice */}
              {isCheckedIn && !showInvoice && (
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4" /> Thêm dịch vụ
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {availableServices.map(svc => {
                      const item = cart.find(c => c.id === svc.id);
                      return (
                        <div key={svc.id} className="flex items-center justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{svc.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {formatCurrency(svc.price)}/{svc.unit} · Tồn: {svc.stock}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              onClick={() => removeFromCart(svc.id)}
                              disabled={!item}
                              className="w-7 h-7 rounded border text-sm font-bold hover:bg-gray-100 disabled:opacity-30"
                            >
                              −
                            </button>
                            <span className="w-5 text-center text-sm">{item?.qty ?? 0}</span>
                            <button
                              onClick={() => addToCart(svc.id)}
                              disabled={svc.stock === 0}
                              className="w-7 h-7 rounded border text-sm font-bold hover:bg-gray-100 disabled:opacity-30"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      );
                    })}

                    <div className="border-t pt-3 space-y-1 text-sm">
                      <div className="flex justify-between text-muted-foreground">
                        <span>Tiền sân:</span><span>{formatCurrency(fieldAmount)}</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>Dịch vụ:</span><span>{formatCurrency(cartTotal)}</span>
                      </div>
                      <div className="flex justify-between font-bold text-base">
                        <span>Tổng cộng:</span>
                        <span className="text-green-700">{formatCurrency(grandTotal)}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {(["Tiền mặt", "Chuyển khoản", "Ví điện tử"] as const).map(m => (
                        <button
                          key={m}
                          onClick={() => setPayMethod(m)}
                          className={`flex-1 py-1.5 rounded text-xs border font-medium transition-colors ${
                            payMethod === m ? "bg-green-700 text-white border-green-700" : "hover:bg-gray-50"
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>

                    <Button className="w-full bg-green-700 hover:bg-green-800" onClick={() => setShowInvoice(true)}>
                      Hoàn thành & Xuất hóa đơn
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Invoice success */}
              {showInvoice && (
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="pt-6 pb-5 text-center space-y-2">
                    <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
                    <p className="font-bold text-green-800 text-lg">Check-in thành công!</p>
                    <p className="text-sm text-green-700">
                      {selected.customerName} · {selected.fieldName}
                    </p>
                    <p className="text-sm text-green-700 font-medium">
                      Tổng: {formatCurrency(grandTotal)} · {payMethod}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Hóa đơn đã được ghi nhận vào hệ thống
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2"
                      onClick={() => { setSelected(null); setShowInvoice(false); setQuery(""); setHasSearched(false); }}
                    >
                      Xử lý đơn tiếp theo
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
