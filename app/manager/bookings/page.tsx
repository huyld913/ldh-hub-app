"use client";

import { useState } from "react";
import { bookings, Booking, formatCurrency, formatDate, STATUS_COLORS, facilities } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { CalendarDays, Clock, MapPin, Phone, Search } from "lucide-react";
import { NotificationToast, NotificationState } from "@/components/ui/notification-toast";

type BookingStatus = Booking["status"];

export default function ManagerBookingsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [facilityFilter, setFacilityFilter] = useState("all");
  const [bookingList, setBookingList] = useState<Booking[]>(bookings);
  const [selected, setSelected] = useState<Booking | null>(null);
  const [newStatus, setNewStatus] = useState<BookingStatus | "">("");
  const [notification, setNotification] = useState<NotificationState | null>(null);

  const filtered = bookingList.filter((b) => {
    const matchSearch =
      b.customerName.toLowerCase().includes(search.toLowerCase()) ||
      b.customerPhone.includes(search) ||
      String(b.id).includes(search) ||
      b.fieldName.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || b.status === statusFilter;
    const matchFacility = facilityFilter === "all" || b.facilityName.includes(facilityFilter);
    return matchSearch && matchStatus && matchFacility;
  }).sort((a, b) => b.date.localeCompare(a.date));

  const totalRevenue = bookingList
    .filter((b) => b.status === "Hoàn thành")
    .reduce((s, b) => s + b.totalPrice - b.discount, 0);

  function handleUpdateStatus() {
    if (!selected || !newStatus) return;
    setBookingList((prev) => prev.map((b) => b.id === selected.id ? { ...b, status: newStatus as BookingStatus } : b));
    setNotification({ type: "success", message: `Đã cập nhật trạng thái đơn #${selected.id} thành "${newStatus}".` });
    setSelected(null);
    setNewStatus("");
  }

  const statusFlow: Record<BookingStatus, BookingStatus[]> = {
    "Chờ xác nhận": ["Đã xác nhận", "Đã hủy"],
    "Đã xác nhận": ["Đã check-in", "Đã hủy"],
    "Đã check-in": ["Hoàn thành"],
    "Hoàn thành": [],
    "Đã hủy": [],
  };

  return (
    <div className="space-y-6">
      {notification && <NotificationToast {...notification} onClose={() => setNotification(null)} />}
      <div>
        <h1 className="text-2xl font-bold">Quản lý Đơn đặt sân</h1>
        <p className="text-muted-foreground text-sm mt-1">Giám sát toàn bộ đơn đặt sân trên hệ thống</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {(["Chờ xác nhận", "Đã xác nhận", "Hoàn thành", "Đã hủy"] as BookingStatus[]).map((s) => (
          <Card key={s} className="cursor-pointer hover:shadow-sm" onClick={() => setStatusFilter(s)}>
            <CardContent className="pt-4 pb-3 text-center">
              <p className="text-2xl font-bold">{bookingList.filter((b) => b.status === s).length}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{s}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 flex items-center justify-between">
        <span className="text-sm text-green-800">Tổng doanh thu đã hoàn thành:</span>
        <span className="font-bold text-green-700 text-lg">{formatCurrency(totalRevenue)}</span>
      </div>

      <div className="flex gap-3 flex-wrap">
        <div className="relative flex-1 min-w-48">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Tên, SĐT, mã đơn, sân..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
        </div>
        <Select value={facilityFilter} onValueChange={(v) => { if (v !== null) setFacilityFilter(v); }}>
          <SelectTrigger className="w-44">
            <SelectValue placeholder="Cơ sở" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tất cả cơ sở</SelectItem>
            {facilities.map((f) => <SelectItem key={f.id} value={f.name.replace("LDH Football Hub – ", "")}>{f.name.replace("LDH Football Hub – ", "")}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={(v) => { if (v !== null) setStatusFilter(v); }}>
          <SelectTrigger className="w-44">
            <SelectValue placeholder="Trạng thái" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tất cả</SelectItem>
            {(["Chờ xác nhận", "Đã xác nhận", "Đã check-in", "Hoàn thành", "Đã hủy"] as BookingStatus[]).map((s) => (
              <SelectItem key={s} value={s}>{s}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        {filtered.length === 0 && <div className="text-center py-12 text-muted-foreground">Không tìm thấy đơn nào.</div>}
        {filtered.map((b) => (
          <Card key={b.id} className="hover:shadow-sm transition-shadow cursor-pointer" onClick={() => { setSelected(b); setNewStatus(""); }}>
            <CardContent className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-xs font-bold text-gray-500">#{b.id}</div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-semibold text-sm">{b.customerName}</p>
                    <Badge className={`text-xs ${STATUS_COLORS[b.status]}`}>{b.status}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                    <Phone className="w-3 h-3" />{b.customerPhone}
                    <span className="mx-1">·</span>
                    <MapPin className="w-3 h-3" />{b.fieldName} – {b.facilityName.replace("LDH Football Hub – ", "")}
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                    <CalendarDays className="w-3 h-3" />{formatDate(b.date)}
                    <Clock className="w-3 h-3 ml-1" />{b.startTime}–{b.endTime}
                  </p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="font-semibold text-green-700 text-sm">{formatCurrency(b.totalPrice - b.discount)}</p>
                {b.discount > 0 && <p className="text-xs text-muted-foreground">Giảm: {formatCurrency(b.discount)}</p>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={() => { setSelected(null); setNewStatus(""); }}>
        {selected && (
          <DialogContent>
            <DialogHeader><DialogTitle>Chi tiết đơn #{selected.id}</DialogTitle></DialogHeader>
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-2 bg-gray-50 rounded-lg p-3">
                <div><p className="text-xs text-muted-foreground">Khách hàng</p><p className="font-medium">{selected.customerName}</p></div>
                <div><p className="text-xs text-muted-foreground">SĐT</p><p className="font-medium">{selected.customerPhone}</p></div>
                <div><p className="text-xs text-muted-foreground">Sân</p><p className="font-medium">{selected.fieldName}</p></div>
                <div><p className="text-xs text-muted-foreground">Cơ sở</p><p className="font-medium">{selected.facilityName.replace("LDH Football Hub – ", "")}</p></div>
                <div><p className="text-xs text-muted-foreground">Ngày</p><p className="font-medium">{formatDate(selected.date)}</p></div>
                <div><p className="text-xs text-muted-foreground">Giờ</p><p className="font-medium">{selected.startTime} – {selected.endTime}</p></div>
                <div><p className="text-xs text-muted-foreground">Tiền sân</p><p className="font-medium">{formatCurrency(selected.totalPrice)}</p></div>
                <div><p className="text-xs text-muted-foreground">Giảm giá</p><p className="font-medium text-green-600">{formatCurrency(selected.discount)}</p></div>
              </div>
              {statusFlow[selected.status].length > 0 && (
                <div className="space-y-2">
                  <p className="font-medium">Cập nhật trạng thái:</p>
                  <Select value={newStatus} onValueChange={(v) => { if (v !== null) setNewStatus(v as BookingStatus); }}>
                    <SelectTrigger><SelectValue placeholder="Chọn trạng thái..." /></SelectTrigger>
                    <SelectContent>
                      {statusFlow[selected.status].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => { setSelected(null); setNewStatus(""); }}>Đóng</Button>
              {statusFlow[selected.status].length > 0 && (
                <Button className="bg-green-700 hover:bg-green-800" onClick={handleUpdateStatus} disabled={!newStatus}>Cập nhật</Button>
              )}
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
