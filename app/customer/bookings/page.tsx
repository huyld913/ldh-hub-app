"use client";

import { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { bookings, formatCurrency, STATUS_COLORS, formatDate } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { CalendarDays, Clock, MapPin, QrCode, XCircle } from "lucide-react";
import QRCode from "react-qr-code";

export default function BookingsPage() {
  const { currentUser } = useAuth();
  const [cancelId, setCancelId] = useState<number | null>(null);
  const [cancelledIds, setCancelledIds] = useState<number[]>([]);
  const [qrBookingId, setQrBookingId] = useState<number | null>(null);

  const qrBooking = bookings.find(b => b.id === qrBookingId) ?? null;

  const myBookings = bookings
    .filter((b) => b.customerId === currentUser?.id)
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((b) => cancelledIds.includes(b.id) ? { ...b, status: "Đã hủy" as const } : b);

  const active = myBookings.filter((b) => ["Chờ xác nhận", "Đã xác nhận", "Đã check-in"].includes(b.status));
  const history = myBookings.filter((b) => ["Hoàn thành", "Đã hủy"].includes(b.status));

  function confirmCancel() {
    if (cancelId) { setCancelledIds([...cancelledIds, cancelId]); setCancelId(null); }
  }

  function canCancel(b: (typeof myBookings)[0]) {
    return !cancelledIds.includes(b.id) && ["Chờ xác nhận", "Đã xác nhận"].includes(b.status);
  }

  function BookingCard({ b }: { b: (typeof myBookings)[0] }) {
    return (
      <Card className="hover:shadow-sm transition-shadow">
        <CardContent className="py-4">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <p className="font-semibold">{b.fieldName}</p>
                <Badge className={`text-xs ${STATUS_COLORS[b.status]}`}>{b.status}</Badge>
              </div>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {b.facilityName}
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5">
                <CalendarDays className="w-3 h-3" /> {formatDate(b.date)}
                <Clock className="w-3 h-3 ml-2" /> {b.startTime} – {b.endTime}
              </p>
              {b.note && <p className="text-xs text-muted-foreground mt-1 italic">"{b.note}"</p>}
              {b.promotionCode && <p className="text-xs text-green-600 mt-0.5">Mã KM: {b.promotionCode}</p>}
            </div>
            <div className="flex flex-row sm:flex-col items-center sm:items-end gap-3">
              <div className="text-right">
                <p className="font-bold text-green-700">{formatCurrency(b.totalPrice - b.discount)}</p>
                {b.discount > 0 && <p className="text-xs text-muted-foreground line-through">{formatCurrency(b.totalPrice)}</p>}
              </div>
              <div className="flex gap-2">
                {b.status === "Đã xác nhận" && (
                  <Button variant="outline" size="sm" className="text-green-700 border-green-300 hover:bg-green-50" onClick={() => setQrBookingId(b.id)}>
                    <QrCode className="w-3.5 h-3.5 mr-1" /> Mã check-in
                  </Button>
                )}
                {canCancel(b) && (
                  <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50" onClick={() => setCancelId(b.id)}>
                    <XCircle className="w-3.5 h-3.5 mr-1" /> Hủy
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Lịch sử đặt sân</h1>
        <p className="text-muted-foreground text-sm mt-1">Quản lý các đặt sân của bạn</p>
      </div>

      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Đang hoạt động ({active.length})</TabsTrigger>
          <TabsTrigger value="history">Lịch sử ({history.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="mt-4 space-y-3">
          {active.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <CalendarDays className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>Không có đặt sân đang hoạt động.</p>
            </div>
          ) : active.map((b) => <BookingCard key={b.id} b={b} />)}
        </TabsContent>
        <TabsContent value="history" className="mt-4 space-y-3">
          {history.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">Chưa có lịch sử.</div>
          ) : history.map((b) => <BookingCard key={b.id} b={b} />)}
        </TabsContent>
      </Tabs>

      {/* QR Check-in dialog */}
      <Dialog open={qrBookingId !== null} onOpenChange={() => setQrBookingId(null)}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <QrCode className="w-5 h-5 text-green-700" /> Mã check-in
            </DialogTitle>
          </DialogHeader>
          {qrBooking && (
            <div className="py-2 space-y-4">
              {/* Real QR Code */}
              <div className="flex flex-col items-center gap-3 bg-white rounded-xl p-5 border border-gray-200">
                <QRCode
                  value={`LDH-BOOKING-${qrBooking.id}`}
                  size={180}
                  level="M"
                />
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-1">Mã đặt sân</p>
                  <p className="text-3xl font-bold font-mono tracking-widest text-gray-800">#{qrBooking.id}</p>
                </div>
              </div>

              {/* Booking info */}
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sân</span>
                  <span className="font-medium">{qrBooking.fieldName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cơ sở</span>
                  <span className="font-medium text-right">{qrBooking.facilityName.replace("LDH Football Hub – ", "")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ngày</span>
                  <span className="font-medium">{formatDate(qrBooking.date)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Khung giờ</span>
                  <span className="font-medium">{qrBooking.startTime} – {qrBooking.endTime}</span>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-xs text-amber-800 text-center">
                Báo mã <strong>#{qrBooking.id}</strong> hoặc số điện thoại <strong>{qrBooking.customerPhone}</strong> cho nhân viên để check-in
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Cancel dialog */}
      <Dialog open={cancelId !== null} onOpenChange={() => setCancelId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Xác nhận hủy đặt sân</DialogTitle>
          </DialogHeader>
          <p className="text-muted-foreground text-sm">
            Bạn có chắc muốn hủy đặt sân này không? Hành động này không thể hoàn tác.
          </p>
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setCancelId(null)}>Giữ nguyên</Button>
            <Button variant="destructive" onClick={confirmCancel}>Xác nhận hủy</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
