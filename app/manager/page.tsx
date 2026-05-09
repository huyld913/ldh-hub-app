"use client";

import { bookings, revenueByDay, formatCurrency, fields, facilities } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer,
} from "recharts";
import { Building2, CalendarCheck, DollarSign, TrendingUp, Users } from "lucide-react";

const totalRevenue = revenueByDay.reduce((s, d) => s + d.q7 + d.binhThanh + d.thuDuc, 0);
const todayRevenue = revenueByDay[revenueByDay.length - 1];
const todayTotal = todayRevenue.q7 + todayRevenue.binhThanh + todayRevenue.thuDuc;

const activeBookings = bookings.filter((b) => ["Chờ xác nhận", "Đã xác nhận", "Đã check-in"].includes(b.status)).length;
const fieldCount = fields.length;
const availFields = fields.filter((f) => f.status === "Trống").length;

function formatM(val: number) {
  return `${(val / 1000000).toFixed(1)}M`;
}

export default function ManagerDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard Quản lý</h1>
        <p className="text-muted-foreground text-sm mt-1">Tổng quan hoạt động toàn hệ thống LDH Football Hub</p>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Doanh thu 7 ngày", value: formatCurrency(totalRevenue), icon: DollarSign, color: "text-green-600", bg: "bg-green-50", sub: `Hôm nay: ${formatCurrency(todayTotal)}` },
          { label: "Đặt sân đang xử lý", value: String(activeBookings), icon: CalendarCheck, color: "text-blue-600", bg: "bg-blue-50", sub: `${bookings.length} tổng đơn` },
          { label: "Sân đang trống", value: `${availFields}/${fieldCount}`, icon: Building2, color: "text-purple-600", bg: "bg-purple-50", sub: `${facilities.length} cơ sở` },
          { label: "Tăng trưởng", value: "+12.4%", icon: TrendingUp, color: "text-amber-600", bg: "bg-amber-50", sub: "So với tuần trước" },
        ].map((kpi) => (
          <Card key={kpi.label}>
            <CardContent className="pt-5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-muted-foreground font-medium">{kpi.label}</p>
                <div className={`w-8 h-8 rounded-full ${kpi.bg} flex items-center justify-center`}>
                  <kpi.icon className={`w-4 h-4 ${kpi.color}`} />
                </div>
              </div>
              <p className={`text-2xl font-bold ${kpi.color}`}>{kpi.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{kpi.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Revenue charts */}
      <Tabs defaultValue="area">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold">Doanh thu theo cơ sở (7 ngày gần nhất)</h2>
          <TabsList>
            <TabsTrigger value="area">Đường</TabsTrigger>
            <TabsTrigger value="bar">Cột</TabsTrigger>
          </TabsList>
        </div>
        <Card>
          <CardContent className="pt-5">
            <TabsContent value="area">
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={revenueByDay} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                  <YAxis tickFormatter={formatM} tick={{ fontSize: 11 }} />
                  <Tooltip formatter={(v) => formatCurrency(Number(v))} />
                  <Legend />
                  <Area type="monotone" dataKey="q7" name="Quận 7" stroke="#16a34a" fill="#bbf7d0" strokeWidth={2} />
                  <Area type="monotone" dataKey="binhThanh" name="Bình Thạnh" stroke="#2563eb" fill="#bfdbfe" strokeWidth={2} />
                  <Area type="monotone" dataKey="thuDuc" name="Thủ Đức" stroke="#d97706" fill="#fde68a" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="bar">
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={revenueByDay} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                  <YAxis tickFormatter={formatM} tick={{ fontSize: 11 }} />
                  <Tooltip formatter={(v) => formatCurrency(Number(v))} />
                  <Legend />
                  <Bar dataKey="q7" name="Quận 7" fill="#16a34a" radius={[3, 3, 0, 0]} />
                  <Bar dataKey="binhThanh" name="Bình Thạnh" fill="#2563eb" radius={[3, 3, 0, 0]} />
                  <Bar dataKey="thuDuc" name="Thủ Đức" fill="#d97706" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>

      {/* Bottom row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Facility summary */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Hiệu suất từng cơ sở</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { name: "Quận 7", revenue: revenueByDay.reduce((s, d) => s + d.q7, 0), fieldCount: fields.filter((f) => f.facilityId === 1).length },
              { name: "Bình Thạnh", revenue: revenueByDay.reduce((s, d) => s + d.binhThanh, 0), fieldCount: fields.filter((f) => f.facilityId === 2).length },
              { name: "Thủ Đức", revenue: revenueByDay.reduce((s, d) => s + d.thuDuc, 0), fieldCount: fields.filter((f) => f.facilityId === 3).length },
            ].map((f) => {
              const pct = Math.round((f.revenue / totalRevenue) * 100);
              return (
                <div key={f.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{f.name} <span className="text-muted-foreground text-xs">({f.fieldCount} sân)</span></span>
                    <span className="text-green-700 font-semibold">{formatCurrency(f.revenue)} <span className="text-muted-foreground text-xs font-normal">({pct}%)</span></span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Recent bookings */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Đơn đặt gần đây</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {bookings.slice(0, 5).map((b) => (
              <div key={b.id} className="flex items-center justify-between gap-2 text-sm">
                <div>
                  <p className="font-medium">{b.customerName}</p>
                  <p className="text-xs text-muted-foreground">{b.fieldName} · {b.date.split("-").reverse().join("/")}</p>
                </div>
                <Badge className={`text-xs shrink-0 ${
                  b.status === "Hoàn thành" ? "bg-green-100 text-green-800" :
                  b.status === "Đã hủy" ? "bg-red-100 text-red-800" :
                  "bg-blue-100 text-blue-800"
                }`}>{b.status}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
