"use client";

import { useState } from "react";
import { bookings, Booking, formatCurrency, formatDate, STATUS_COLORS } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarDays, Clock, MapPin, Phone, Search } from "lucide-react";

type BookingStatus = Booking["status"];

export default function StaffBookingsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [bookingList, setBookingList] = useState<Booking[]>(bookings);
  const [selected, setSelected] = useState<Booking | null>(null);
  const [newStatus, setNewStatus] = useState<BookingStatus | "">("");

  const filtered = bookingList.filter((b) => {
    const matchSearch =
      b.customerName.toLowerCase().includes(search.toLowerCase()) ||
      b.customerPhone.includes(search) ||
      String(b.id).includes(search) ||
      b.fieldName.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || b.status === statusFilter;
    return matchSearch && matchStatus;
  }).sort((a, b) => b.date.localeCompare(a.date));

  function handleUpdateStatus() {
    if (!selected || !newStatus) return;
    setBookingList((prev) => prev.map((b) => b.id === selected.id ? { ...b, status: newStatus as BookingStatus } : b));
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

  const counts = {
    pending: bookingList.filter((b) => b.status === "Chờ xác nhận").length,
    confirmed: bookingList.filter((b) => b.status === "Đã xác nhận").length,
    checkin: bookingList.filter((b) => b.status === "Đã check-in").length,
    done: bookingList.filter((b) => b.status === "Hoàn thành").length,
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Quản lý Đơn đặt sân</h1>
        <p className="text-muted-foreground text-sm mt-1">Xem, xác nhận và cập nhật trạng thái các đơn đặt sân</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Chờ xác nhận", count: counts.pending, color: "text-yellow-600", bg: "bg-yellow-50 border-yellow-200" },
          { label: "Đã xác nhận", count: counts.confirmed, color: "text-blue-600", bg: "bg-blue-50 border-blue-200" },
          { label: "Đã check-in", count: counts.checkin, color: "text-purple-600", bg: "bg-purple-50 border-purple-200" },
          { label: "Hoàn thành", count: counts.done, color: "text-green-600", bg: "bg-green-50 border-green-200" },
        ].map((s) => (
          <Card key={s.label} className={`border ${s.bg}`}>
            <CardContent className="pt-4 pb-3 text-center">
              <p className={`text-3xl font-bold ${s.color}`}>{s.count}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex gap-3 flex-wrap">
        <div className="relative flex-1 min-w-48">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Tìm theo tên, SĐT, mã đơn, sân..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
        </div>
        <Select value={statusFilter} onValueChange={(v) => { if (v !== null) setStatusFilter(v); }}>
          <SelectTrigger className="w-44">
            <SelectValue placeholder="Trạng thái" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tất cả trạng thái</SelectItem>
            <SelectItem value="Chờ xác nhận">Chờ xác nhận</SelectItem>
            <SelectItem value="Đã xác nhận">Đã xác nhận</SelectItem>
            <SelectItem value="Đã check-in">Đã check-in</SelectItem>
            <SelectItem value="Hoàn thành">Hoàn thành</SelectItem>
            <SelectItem value="Đã hủy">Đã hủy</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        {filtered.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">Không tìm thấy đơn nào.</div>
        )}
        {filtered.map((b) => (
          <Card key={b.id} className="hover:shadow-sm transition-shadow cursor-pointer" onClick={() => { setSelected(b); setNewStatus(""); }}>
            <CardContent className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-xs font-bold text-gray-500">
                  #{b.id}
                </div>
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
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={() => { setSelected(null); setNewStatus(""); }}>
        {selected && (
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Chi tiết đơn #{selected.id}</DialogTitle>
            </DialogHeader>
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-2 bg-gray-50 rounded-lg p-3">
                <div><p className="text-muted-foreground text-xs">Khách hàng</p><p className="font-medium">{selected.customerName}</p></div>
                <div><p className="text-muted-foreground text-xs">SĐT</p><p className="font-medium">{selected.customerPhone}</p></div>
                <div><p className="text-muted-foreground text-xs">Sân</p><p className="font-medium">{selected.fieldName}</p></div>
                <div><p className="text-muted-foreground text-xs">Cơ sở</p><p className="font-medium">{selected.facilityName.replace("LDH Football Hub – ", "")}</p></div>
                <div><p className="text-muted-foreground text-xs">Ngày</p><p className="font-medium">{formatDate(selected.date)}</p></div>
                <div><p className="text-muted-foreground text-xs">Giờ</p><p className="font-medium">{selected.startTime} – {selected.endTime}</p></div>
                <div><p className="text-muted-foreground text-xs">Tổng tiền</p><p className="font-semibold text-green-700">{formatCurrency(selected.totalPrice - selected.discount)}</p></div>
                <div><p className="text-muted-foreground text-xs">Trạng thái</p><Badge className={`text-xs ${STATUS_COLORS[selected.status]}`}>{selected.status}</Badge></div>
              </div>
              {selected.note && <p className="italic text-muted-foreground">Ghi chú: "{selected.note}"</p>}

              {statusFlow[selected.status].length > 0 && (
                <div className="space-y-2">
                  <p className="font-medium">Cập nhật trạng thái:</p>
                  <Select value={newStatus} onValueChange={(v) => { if (v !== null) setNewStatus(v as BookingStatus); }}>
                    <SelectTrigger><SelectValue placeholder="Chọn trạng thái mới..." /></SelectTrigger>
                    <SelectContent>
                      {statusFlow[selected.status].map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
            <DialogFooter className="gap-2">
              <Button variant="outline" onClick={() => { setSelected(null); setNewStatus(""); }}>Đóng</Button>
              {statusFlow[selected.status].length > 0 && (
                <Button className="bg-green-700 hover:bg-green-800" onClick={handleUpdateStatus} disabled={!newStatus}>
                  Cập nhật
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
