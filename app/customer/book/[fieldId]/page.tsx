"use client";

import { useState } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { fields, facilities, promotions, formatCurrency, isPeakHour, PEAK_HOURS } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, MapPin, Tag, Zap } from "lucide-react";

export default function BookPage() {
  const { currentUser } = useAuth();
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const fieldId = Number(params.fieldId);
  const date = searchParams.get("date") ?? new Date().toISOString().split("T")[0];
  const startTime = searchParams.get("time") ?? "08:00";

  const field = fields.find((f) => f.id === fieldId);
  const facility = field ? facilities.find((f) => f.id === field.facilityId) : null;

  const [duration, setDuration] = useState(1);
  const [note, setNote] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [promoError, setPromoError] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<(typeof promotions)[0] | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!field || !facility) return <div className="p-6 text-center text-muted-foreground">Không tìm thấy sân.</div>;

  const isPeak = isPeakHour(startTime);
  const pricePerHour = isPeak ? field.peakPrice : field.basePrice;
  const subtotal = pricePerHour * duration;
  const discount = appliedPromo ? Math.min(appliedPromo.maxDiscount, (subtotal * appliedPromo.discountPercent) / 100) : 0;
  const total = subtotal - discount;

  const endHour = parseInt(startTime.split(":")[0]) + duration;
  const endTime = `${String(endHour).padStart(2, "0")}:00`;

  function applyPromo() {
    setPromoError("");
    const promo = promotions.find((p) => p.code === promoCode.toUpperCase() && p.status === "Đang hoạt động");
    if (!promo) { setPromoError("Mã khuyến mãi không tồn tại hoặc đã hết hạn."); return; }
    if (subtotal < promo.minOrder) { setPromoError(`Đơn hàng tối thiểu ${formatCurrency(promo.minOrder)} để áp dụng mã này.`); return; }
    setAppliedPromo(promo);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto">
        <Card className="text-center p-10">
          <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Đặt sân thành công!</h2>
          <p className="text-muted-foreground mb-1">
            <strong>{field.name}</strong> – {date.split("-").reverse().join("/")}
          </p>
          <p className="text-muted-foreground mb-4">{startTime} – {endTime} · {formatCurrency(total)}</p>
          <p className="text-sm text-muted-foreground mb-6">
            Yêu cầu của bạn đang chờ nhân viên xác nhận. Thanh toán sẽ thực hiện tại quầy sau khi hoàn thành ca chơi.
          </p>
          <div className="flex gap-3 justify-center">
            <Button variant="outline" onClick={() => router.push("/customer/bookings")}>Xem lịch sử</Button>
            <Button className="bg-green-700 hover:bg-green-800" onClick={() => router.push("/customer/search")}>Tiếp tục đặt</Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Xác nhận đặt sân</h1>
        <p className="text-muted-foreground text-sm mt-1">Kiểm tra thông tin và xác nhận đặt sân</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Field info */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Thông tin sân</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={field.image} alt={field.name} className="w-full h-36 object-cover rounded-lg" />
            <div>
              <div className="flex items-center gap-2">
                <p className="font-semibold">{field.name}</p>
                <Badge variant="outline">{field.type} người</Badge>
                {isPeak && <Badge className="bg-amber-100 text-amber-800 text-xs"><Zap className="w-3 h-3 mr-0.5" />Giờ vàng</Badge>}
              </div>
              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3" /> {facility.name}
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 space-y-1.5 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Ngày:</span>
                <span className="font-medium">{date.split("-").reverse().join("/")}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />Giờ bắt đầu:</span>
                <span className="font-medium">{startTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Thời lượng:</span>
                <div className="flex items-center gap-2">
                  <button onClick={() => setDuration(Math.max(1, duration - 1))} className="w-6 h-6 rounded border text-sm font-bold hover:bg-gray-100">−</button>
                  <span className="font-medium w-8 text-center">{duration}h</span>
                  <button onClick={() => setDuration(Math.min(4, duration + 1))} className="w-6 h-6 rounded border text-sm font-bold hover:bg-gray-100">+</button>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Giờ kết thúc:</span>
                <span className="font-medium">{endTime}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Booking form */}
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Thông tin người đặt</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="space-y-1">
                  <Label>Họ tên</Label>
                  <Input value={currentUser?.name ?? ""} disabled />
                </div>
                <div className="space-y-1">
                  <Label>Số điện thoại</Label>
                  <Input value={currentUser?.phone ?? ""} disabled />
                </div>
                <div className="space-y-1">
                  <Label>Ghi chú (tùy chọn)</Label>
                  <Textarea placeholder="Yêu cầu đặc biệt..." value={note} onChange={(e) => setNote(e.target.value)} rows={2} />
                </div>

                {/* Promo */}
                <div className="space-y-1">
                  <Label className="flex items-center gap-1"><Tag className="w-3 h-3" /> Mã khuyến mãi</Label>
                  <div className="flex gap-2">
                    <Input placeholder="VD: SUMMER20" value={promoCode} onChange={(e) => { setPromoCode(e.target.value); setAppliedPromo(null); setPromoError(""); }} className="font-mono uppercase" />
                    <Button type="button" variant="outline" onClick={applyPromo} disabled={!promoCode}>Áp dụng</Button>
                  </div>
                  {promoError && <p className="text-xs text-red-600">{promoError}</p>}
                  {appliedPromo && <p className="text-xs text-green-600">✓ Áp dụng mã <strong>{appliedPromo.code}</strong> – giảm {appliedPromo.discountPercent}%</p>}
                </div>

                {/* Price summary */}
                <div className="bg-gray-50 rounded-lg p-3 space-y-1.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tiền sân ({duration}h × {formatCurrency(pricePerHour)}):</span>
                    <span>{formatCurrency(subtotal)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Giảm giá:</span>
                      <span>−{formatCurrency(discount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold border-t pt-1.5 mt-1.5">
                    <span>Tổng cộng:</span>
                    <span className="text-green-700">{formatCurrency(total)}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Thanh toán tại quầy sau khi hoàn thành ca chơi</p>
                </div>

                <Button type="submit" className="w-full bg-green-700 hover:bg-green-800" disabled={loading}>
                  {loading ? "Đang xử lý..." : "Xác nhận đặt sân"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
