"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { bookings, facilities, fields, formatCurrency, STATUS_COLORS } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Search, Star, Trophy } from "lucide-react";

export default function CustomerHomePage() {
  const { currentUser } = useAuth();

  const myBookings = bookings
    .filter((b) => b.customerId === currentUser?.id)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  const activeCount = bookings.filter(
    (b) => b.customerId === currentUser?.id && ["Chờ xác nhận", "Đã xác nhận"].includes(b.status)
  ).length;

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="relative rounded-2xl bg-gradient-to-r from-green-800 to-green-600 text-white px-8 py-10 overflow-hidden">
        <div className="relative z-10">
          <p className="text-green-200 text-sm mb-1">Xin chào,</p>
          <h1 className="text-3xl font-bold mb-2">{currentUser?.name} 👋</h1>
          <p className="text-green-100 mb-6">
            Bạn có <strong>{activeCount}</strong> đặt sân đang chờ/đã xác nhận.
            {currentUser?.points && currentUser.points > 0 && (
              <> Điểm tích lũy: <strong>{currentUser.points} điểm</strong>.</>
            )}
          </p>
          <Link href="/customer/search">
            <Button className="bg-white text-green-800 hover:bg-green-50 font-semibold">
              <Search className="w-4 h-4 mr-2" /> Tìm sân ngay
            </Button>
          </Link>
        </div>
        <Trophy className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 text-green-700/30" />
      </div>

      {/* Cơ sở */}
      <section>
        <h2 className="text-xl font-bold mb-4">Chuỗi cơ sở của chúng tôi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {facilities.map((f) => {
            const fieldCount = fields.filter((fd) => fd.facilityId === f.id).length;
            const availCount = fields.filter((fd) => fd.facilityId === f.id && fd.status === "Trống").length;
            return (
              <Card key={f.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-green-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm leading-tight">{f.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{f.address}</p>
                      <p className="text-xs mt-2">
                        <span className="text-green-600 font-medium">{availCount} sân trống</span>
                        <span className="text-muted-foreground"> / {fieldCount} sân</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Đặt sân gần đây */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Đặt sân gần đây</h2>
          <Link href="/customer/bookings">
            <Button variant="ghost" size="sm" className="text-green-700">Xem tất cả →</Button>
          </Link>
        </div>

        {myBookings.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">
              <CalendarDays className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>Bạn chưa có lịch sử đặt sân nào.</p>
              <Link href="/customer/search">
                <Button className="mt-4 bg-green-700 hover:bg-green-800">Đặt sân ngay</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {myBookings.map((b) => (
              <Card key={b.id} className="hover:shadow-sm transition-shadow">
                <CardContent className="py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold">{b.fieldName}</p>
                      <Badge className={`text-xs ${STATUS_COLORS[b.status]}`}>{b.status}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{b.facilityName}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5">
                      <CalendarDays className="w-3.5 h-3.5" />
                      {b.date.split("-").reverse().join("/")} · {b.startTime} – {b.endTime}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-semibold text-green-700">{formatCurrency(b.totalPrice - b.discount)}</p>
                    {b.discount > 0 && <p className="text-xs text-muted-foreground line-through">{formatCurrency(b.totalPrice)}</p>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Khuyến mãi banner */}
      <section className="rounded-xl bg-amber-50 border border-amber-200 p-5 flex items-center gap-4">
        <Star className="w-8 h-8 text-amber-500 shrink-0" />
        <div>
          <p className="font-semibold text-amber-800">Ưu đãi tháng 5!</p>
          <p className="text-sm text-amber-700">
            Dùng mã <strong className="font-mono">SUMMER20</strong> để giảm 20% (tối đa 200,000đ) cho mọi đặt sân trong tháng 5/2026.
          </p>
        </div>
      </section>
    </div>
  );
}
