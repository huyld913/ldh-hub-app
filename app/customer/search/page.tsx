"use client";

import { useState } from "react";
import Link from "next/link";
import { fields, facilities, TIME_SLOTS, PEAK_HOURS, formatCurrency, STATUS_COLORS, getBookedSlots } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { CalendarDays, Clock, MapPin, Search, Zap } from "lucide-react";

export default function SearchPage() {
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);
  const [facilityId, setFacilityId] = useState("all");
  const [fieldType, setFieldType] = useState("all");

  const results = fields.filter((f) => {
    if (facilityId !== "all" && f.facilityId !== Number(facilityId)) return false;
    if (fieldType !== "all" && f.type !== Number(fieldType)) return false;
    if (f.status === "Bảo trì") return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Tìm sân bóng</h1>
        <p className="text-muted-foreground text-sm mt-1">Chọn ngày, cơ sở và loại sân để xem lịch trống</p>
      </div>

      {/* Filter form */}
      <Card>
        <CardContent className="pt-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="date" className="flex items-center gap-1">
                <CalendarDays className="w-3.5 h-3.5" /> Ngày
              </Label>
              <Input id="date" type="date" min={today} value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> Cơ sở
              </Label>
              <Select value={facilityId} onValueChange={(v) => { if (v) setFacilityId(v); }}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả cơ sở</SelectItem>
                  {facilities.map((f) => <SelectItem key={f.id} value={String(f.id)}>{f.name.replace("LDH Football Hub – ", "")}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>Loại sân</Label>
              <Select value={fieldType} onValueChange={(v) => { if (v) setFieldType(v); }}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả loại sân</SelectItem>
                  <SelectItem value="5">Sân 5 người</SelectItem>
                  <SelectItem value="7">Sân 7 người</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Legend */}
      <div className="flex items-center gap-4 text-xs text-muted-foreground flex-wrap">
        <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-green-200 border border-green-400 inline-block" /> Trống</div>
        <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-gray-200 border border-gray-300 inline-block" /> Đã đặt</div>
        <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-amber-100 border border-amber-300 inline-block" /><Zap className="w-3 h-3 text-amber-500" /> Giờ vàng</div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">{results.length} sân phù hợp</p>
        {results.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <Search className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            <p>Không tìm thấy sân phù hợp. Vui lòng thay đổi bộ lọc.</p>
          </div>
        )}
        {results.map((field) => {
            const facility = facilities.find((f) => f.id === field.facilityId)!;
            const bookedSlots = getBookedSlots(field.id, date);
            return (
              <Card key={field.id} className="overflow-hidden hover:shadow-md transition-shadow p-0">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <div className="w-full sm:w-48">
                      <img src={field.image} alt={field.name} className="size-full object-cover" />
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-lg">{field.name}</h3>
                            <Badge variant="outline">{field.type} người</Badge>
                            <Badge className={`text-xs ${STATUS_COLORS[field.status]}`}>{field.status}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{facility.name}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{field.description}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-xs text-muted-foreground">Giờ thường</p>
                          <p className="font-bold text-green-700">{formatCurrency(field.basePrice)}<span className="text-xs font-normal text-muted-foreground">/h</span></p>
                          <p className="text-xs text-muted-foreground">Giờ vàng</p>
                          <p className="font-semibold text-amber-600 text-sm">{formatCurrency(field.peakPrice)}<span className="text-xs font-normal text-muted-foreground">/h</span></p>
                        </div>
                      </div>

                      {/* Time slots */}
                      <div className="mt-3">
                        <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> Chọn khung giờ ({date.split("-").reverse().join("/")}):
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {TIME_SLOTS.slice(0, -1).map((slot) => {
                            const isBooked = bookedSlots.includes(slot);
                            const isPeak = PEAK_HOURS.includes(slot);
                            return (
                              <Link
                                key={slot}
                                href={isBooked || field.status !== "Trống" ? "#" : `/customer/book/${field.id}?date=${date}&time=${slot}`}
                              >
                                <button
                                  disabled={isBooked || field.status !== "Trống"}
                                  className={`px-2 py-1 rounded text-xs font-medium border transition-colors ${
                                    isBooked || field.status !== "Trống"
                                      ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                                      : isPeak
                                      ? "bg-amber-50 text-amber-700 border-amber-300 hover:bg-amber-100"
                                      : "bg-green-50 text-green-700 border-green-300 hover:bg-green-100"
                                  }`}
                                >
                                  {slot}
                                  {isPeak && <Zap className="w-2.5 h-2.5 inline ml-0.5" />}
                                </button>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
        })}
      </div>
    </div>
  );
}
