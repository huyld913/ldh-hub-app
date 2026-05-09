"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { facilities, fields, bookings, PEAK_HOURS } from "@/lib/mock-data";
import { Trophy, MapPin, Clock, Phone, ChevronRight, Calendar, Users, Star, Zap } from "lucide-react";

const DISPLAY_HOURS = ["06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21"];

function isSlotBooked(fieldId: number, date: string, hour: string): boolean {
  const slotH = parseInt(hour);
  return bookings.some(b => {
    if (b.fieldId !== fieldId || b.date !== date || b.status === "Đã hủy") return false;
    const startH = parseInt(b.startTime.split(":")[0]);
    const endH = parseInt(b.endTime.split(":")[0]);
    return slotH >= startH && slotH < endH;
  });
}

function isPeak(hour: string): boolean {
  return PEAK_HOURS.includes(`${hour}:00`);
}

function shortPrice(n: number): string {
  return (n / 1000).toFixed(0) + "k";
}

export default function HomePage() {
  const { currentUser, isLoading } = useAuth();
  const router = useRouter();

  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedFacility, setSelectedFacility] = useState<number | null>(null);

  useEffect(() => {
    if (!currentUser) return;
    if (currentUser.role === "customer") router.replace("/customer");
    else if (currentUser.role === "staff") router.replace("/staff");
    else router.replace("/manager");
  }, [currentUser, router]);

  if (isLoading || currentUser) return null;

  const displayFacilities = selectedFacility
    ? facilities.filter(f => f.id === selectedFacility)
    : facilities;

  return (
    <div className="min-h-screen bg-white">

      {/* ── Header ── */}
      <header className="bg-green-800 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg shrink-0">
              <Trophy className="w-5 h-5" />
              <span>LDH Football Hub</span>
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              <a href="#schedule" className="px-3 py-1.5 rounded text-sm font-medium text-green-100 hover:bg-green-700 transition-colors">Lịch sân</a>
              <a href="#about" className="px-3 py-1.5 rounded text-sm font-medium text-green-100 hover:bg-green-700 transition-colors">Giới thiệu</a>
              <a href="#locations" className="px-3 py-1.5 rounded text-sm font-medium text-green-100 hover:bg-green-700 transition-colors">Cơ sở</a>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/login" className="px-4 py-1.5 rounded text-sm font-medium text-green-100 hover:bg-green-700 transition-colors">
              Đăng nhập
            </Link>
            <Link href="/register" className="px-4 py-1.5 rounded bg-white text-green-800 text-sm font-semibold hover:bg-green-50 transition-colors">
              Đăng ký
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="bg-linear-to-br from-green-900 via-green-800 to-green-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <Trophy className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Đặt sân bóng<br />
            <span className="text-green-300">nhanh chóng & dễ dàng</span>
          </h1>
          <p className="text-lg text-green-100 mb-8 max-w-xl mx-auto">
            Hệ thống quản lý và đặt sân bóng LDH Football Hub — 3 cơ sở tại TP.HCM,
            lịch sân minh bạch, đặt chỗ trong vài giây.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#schedule"
              className="px-8 py-3 bg-white text-green-800 rounded-lg font-semibold text-base hover:bg-green-50 transition-colors"
            >
              Xem lịch sân ngay
            </a>
            <Link
              href="/register"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold text-base hover:bg-white/10 transition-colors"
            >
              Tạo tài khoản miễn phí
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div className="bg-green-700 text-white py-4 px-4">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">9</div>
            <div className="text-green-200 text-xs">Sân bóng</div>
          </div>
          <div>
            <div className="text-2xl font-bold">3</div>
            <div className="text-green-200 text-xs">Cơ sở TP.HCM</div>
          </div>
          <div>
            <div className="text-2xl font-bold">06–23h</div>
            <div className="text-green-200 text-xs">Mở cửa hàng ngày</div>
          </div>
        </div>
      </div>

      {/* ── Schedule Lookup ── */}
      <section id="schedule" className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Kiểm tra lịch sân</h2>
          <p className="text-gray-500 text-sm mb-6">Chọn ngày và cơ sở để xem các khung giờ còn trống</p>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-6">
            <label className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 cursor-pointer hover:border-green-400 transition-colors">
              <Calendar className="w-4 h-4 text-gray-400" />
              <input
                type="date"
                value={selectedDate}
                onChange={e => setSelectedDate(e.target.value)}
                className="text-sm text-gray-700 outline-none bg-transparent"
              />
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedFacility(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedFacility === null
                    ? "bg-green-700 text-white shadow-sm"
                    : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                Tất cả cơ sở
              </button>
              {facilities.map(f => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFacility(f.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedFacility === f.id
                      ? "bg-green-700 text-white shadow-sm"
                      : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {f.name.replace("LDH Football Hub – ", "")}
                </button>
              ))}
            </div>
          </div>

          {/* Grids per facility */}
          <div className="space-y-6">
            {displayFacilities.map(facility => {
              const facilityFields = fields.filter(f => f.facilityId === facility.id);
              return (
                <div key={facility.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                  {/* Facility header */}
                  <div className="bg-green-50 border-b border-gray-200 px-4 py-3 flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <h3 className="font-semibold text-green-900 text-sm">{facility.name}</h3>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 shrink-0" /> {facility.address}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" /> {facility.openTime} – {facility.closeTime}
                    </div>
                  </div>

                  {/* Schedule grid */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-gray-100 bg-gray-50/80">
                          <th className="text-left px-3 py-2 text-gray-500 font-medium min-w-27.5 sticky left-0 bg-gray-50 z-10 border-r border-gray-100">
                            Sân
                          </th>
                          {DISPLAY_HOURS.map(h => (
                            <th
                              key={h}
                              className={`py-2 text-center font-medium w-8 ${
                                isPeak(h) ? "text-orange-500" : "text-gray-400"
                              }`}
                            >
                              {h}
                            </th>
                          ))}
                          <th className="px-3 py-2 text-gray-500 font-medium border-l border-gray-100 whitespace-nowrap">Giá/giờ</th>
                          <th className="px-3 py-2 border-l border-gray-100" />
                        </tr>
                      </thead>
                      <tbody>
                        {facilityFields.map((field, i) => {
                          const isMaintenance = field.status === "Bảo trì";
                          return (
                            <tr key={field.id} className={`border-b border-gray-50 last:border-0 ${i % 2 === 1 ? "bg-gray-50/40" : ""}`}>
                              <td className="px-3 py-2.5 sticky left-0 bg-inherit z-10 border-r border-gray-100">
                                <div className="font-semibold text-gray-800">{field.name}</div>
                                <div className="text-gray-400 mt-0.5">{field.type} người</div>
                              </td>
                              {DISPLAY_HOURS.map(h => {
                                if (isMaintenance) {
                                  return (
                                    <td key={h} className="py-2 text-center">
                                      <div className="w-6 h-5 rounded mx-auto bg-gray-200" title="Bảo trì" />
                                    </td>
                                  );
                                }
                                const booked = isSlotBooked(field.id, selectedDate, h);
                                return (
                                  <td key={h} className="py-2 text-center">
                                    <div
                                      title={booked ? "Đã đặt" : "Còn trống"}
                                      className={`w-6 h-5 rounded mx-auto transition-colors ${
                                        booked
                                          ? "bg-red-400"
                                          : isPeak(h)
                                          ? "bg-green-500"
                                          : "bg-green-200"
                                      }`}
                                    />
                                  </td>
                                );
                              })}
                              <td className="px-3 py-2.5 border-l border-gray-100 whitespace-nowrap">
                                <div className="text-gray-700">{shortPrice(field.basePrice)}đ</div>
                                <div className="text-orange-500">{shortPrice(field.peakPrice)}đ <span className="text-gray-400">(vàng)</span></div>
                              </td>
                              <td className="px-3 py-2.5 border-l border-gray-100">
                                {isMaintenance ? (
                                  <span className="text-gray-400">Bảo trì</span>
                                ) : (
                                  <Link
                                    href="/login"
                                    className="px-3 py-1.5 bg-green-700 text-white rounded font-medium hover:bg-green-600 transition-colors whitespace-nowrap"
                                  >
                                    Đặt sân
                                  </Link>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Legend */}
                  <div className="px-4 py-2.5 border-t border-gray-100 flex flex-wrap items-center gap-4 text-xs text-gray-500 bg-gray-50/40">
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-green-200 inline-block" /> Còn trống</span>
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-green-500 inline-block" /> Còn trống (giờ vàng)</span>
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-red-400 inline-block" /> Đã đặt</span>
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-gray-200 inline-block" /> Bảo trì</span>
                    <span className="ml-auto text-orange-500 font-medium">Giờ vàng: 17h – 22h</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Features / About ── */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Tại sao chọn LDH Football Hub?
          </h2>
          <p className="text-center text-gray-500 text-sm mb-10 max-w-md mx-auto">
            Hệ thống đặt sân chuyên nghiệp, minh bạch và tiện lợi nhất TP.HCM
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-5 h-5 text-green-700" />,
                title: "Đặt sân trong 30 giây",
                desc: "Chọn ngày, chọn giờ, xác nhận. Không cần gọi điện, không cần chờ đợi.",
              },
              {
                icon: <Calendar className="w-5 h-5 text-green-700" />,
                title: "Lịch sân thời gian thực",
                desc: "Xem lịch trống-bận theo từng khung giờ ngay trên web, không sợ đặt trùng.",
              },
              {
                icon: <Star className="w-5 h-5 text-green-700" />,
                title: "Tích điểm đổi ưu đãi",
                desc: "Mỗi lần đặt sân tích điểm thành viên, đổi giảm giá cho lần tiếp theo.",
              },
            ].map((feat, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 flex flex-col gap-3 hover:shadow-sm transition-shadow">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  {feat.icon}
                </div>
                <h3 className="font-semibold text-gray-800">{feat.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Locations ── */}
      <section id="locations" className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">3 cơ sở tại TP.HCM</h2>
          <p className="text-center text-gray-500 text-sm mb-10">
            Phủ khắp các quận trung tâm, dễ dàng di chuyển
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {facilities.map(facility => {
              const fFields = fields.filter(f => f.facilityId === facility.id);
              const availableCount = fFields.filter(f => f.status === "Trống").length;
              const type5Count = fFields.filter(f => f.type === 5).length;
              const type7Count = fFields.filter(f => f.type === 7).length;
              return (
                <div
                  key={facility.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-linear-to-br from-green-700 to-green-900 h-24 flex items-center justify-center">
                    <Trophy className="w-10 h-10 text-white/30" />
                  </div>
                  <div className="p-4 space-y-3">
                    <h3 className="font-semibold text-gray-800 text-sm leading-snug">{facility.name}</h3>
                    <div className="space-y-1.5 text-xs text-gray-500">
                      <div className="flex items-start gap-1.5">
                        <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-gray-400" />
                        <span>{facility.address}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-gray-400" />
                        <span>{facility.phone}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        <span>{facility.openTime} – {facility.closeTime}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-gray-400" />
                        <span>
                          {fFields.length} sân
                          {type5Count > 0 && ` · ${type5Count} sân 5`}
                          {type7Count > 0 && ` · ${type7Count} sân 7`}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          availableCount > 0
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {availableCount > 0 ? `${availableCount} sân đang trống` : "Hết sân"}
                      </span>
                      <button
                        onClick={() => {
                          setSelectedFacility(facility.id);
                          document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="text-xs text-green-700 font-medium flex items-center gap-0.5 hover:underline"
                      >
                        Xem lịch <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-green-800 text-white py-14 px-4 text-center">
        <h2 className="text-2xl font-bold mb-3">Sẵn sàng chơi bóng?</h2>
        <p className="text-green-100 text-sm mb-7 max-w-sm mx-auto">
          Tạo tài khoản để đặt sân, theo dõi lịch và tích điểm thành viên ngay hôm nay.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/register"
            className="px-8 py-3 bg-white text-green-800 rounded-lg font-semibold text-sm hover:bg-green-50 transition-colors"
          >
            Tạo tài khoản miễn phí
          </Link>
          <Link
            href="/login"
            className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors"
          >
            Đăng nhập
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2 text-white font-semibold">
            <Trophy className="w-4 h-4" />
            LDH Football Hub
          </div>
          <p className="text-xs text-center">
            © 2026 LDH Football Hub · Hệ thống Quản lý & Đặt sân bóng TP.HCM
          </p>
          <div className="flex gap-4 text-xs">
            <Link href="/login" className="hover:text-white transition-colors">Đăng nhập</Link>
            <Link href="/register" className="hover:text-white transition-colors">Đăng ký</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
