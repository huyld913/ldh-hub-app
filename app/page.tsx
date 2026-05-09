"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { facilities, fields, bookings, PEAK_HOURS } from "@/lib/mock-data";
import { Trophy, MapPin, Clock, Phone, ChevronRight, Calendar, Users, Star, Zap, Shield, ArrowRight } from "lucide-react";

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

function FootballPitchSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Grass stripes */}
      <rect width="220" height="140" fill="#1a5c38" rx="4" />
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={i * 44} y="0" width="22" height="140" fill="#1e6840" opacity="0.5" />
      ))}
      {/* Outer boundary */}
      <rect x="10" y="10" width="200" height="120" fill="none" stroke="white" strokeWidth="1.5" />
      {/* Center line */}
      <line x1="110" y1="10" x2="110" y2="130" stroke="white" strokeWidth="1.5" />
      {/* Center circle */}
      <circle cx="110" cy="70" r="22" fill="none" stroke="white" strokeWidth="1.5" />
      <circle cx="110" cy="70" r="2.5" fill="white" />
      {/* Left penalty area */}
      <rect x="10" y="38" width="40" height="64" fill="none" stroke="white" strokeWidth="1.5" />
      {/* Right penalty area */}
      <rect x="170" y="38" width="40" height="64" fill="none" stroke="white" strokeWidth="1.5" />
      {/* Left goal area */}
      <rect x="10" y="52" width="18" height="36" fill="none" stroke="white" strokeWidth="1.5" />
      {/* Right goal area */}
      <rect x="192" y="52" width="18" height="36" fill="none" stroke="white" strokeWidth="1.5" />
      {/* Left goal */}
      <rect x="4" y="58" width="7" height="24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
      {/* Right goal */}
      <rect x="209" y="58" width="7" height="24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
      {/* Left penalty arc */}
      <path d="M 50 55 Q 65 70 50 85" fill="none" stroke="white" strokeWidth="1.5" />
      {/* Right penalty arc */}
      <path d="M 170 55 Q 155 70 170 85" fill="none" stroke="white" strokeWidth="1.5" />
      {/* Corner arcs */}
      <path d="M 10 14 Q 14 10 18 14" fill="none" stroke="white" strokeWidth="1" />
      <path d="M 206 14 Q 210 10 210 14" fill="none" stroke="white" strokeWidth="1" />
      <path d="M 10 126 Q 14 130 18 126" fill="none" stroke="white" strokeWidth="1" />
      <path d="M 206 126 Q 210 130 210 126" fill="none" stroke="white" strokeWidth="1" />
      {/* Left penalty spot */}
      <circle cx="36" cy="70" r="1.5" fill="white" />
      {/* Right penalty spot */}
      <circle cx="184" cy="70" r="1.5" fill="white" />
    </svg>
  );
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
      <header className="bg-green-950/95 backdrop-blur-sm text-white sticky top-0 z-50 shadow-lg border-b border-green-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2.5 font-bold text-lg shrink-0">
              <div className="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center">
                <Trophy className="w-4 h-4" />
              </div>
              <span className="tracking-tight">LDH Football Hub</span>
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              <a href="#schedule" className="px-3 py-1.5 rounded-md text-sm font-medium text-green-200 hover:bg-white/10 transition-colors">Lịch sân</a>
              <a href="#about" className="px-3 py-1.5 rounded-md text-sm font-medium text-green-200 hover:bg-white/10 transition-colors">Giới thiệu</a>
              <a href="#locations" className="px-3 py-1.5 rounded-md text-sm font-medium text-green-200 hover:bg-white/10 transition-colors">Cơ sở</a>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/login" className="px-4 py-2 rounded-md text-sm font-medium text-green-200 hover:bg-white/10 transition-colors">
              Đăng nhập
            </Link>
            <Link href="/register" className="px-4 py-2 rounded-lg bg-white text-green-950 text-sm font-semibold hover:bg-green-50 transition-colors shadow-sm">
              Đăng ký
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative bg-green-950 text-white overflow-hidden">
        {/* Football pitch lines */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none select-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full border border-white" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-35 h-35 rounded-full border border-white" />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white" />
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-44 h-72 border border-white border-l-0" />
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-44 h-72 border border-white border-r-0" />
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-20 h-36 border border-white border-l-0" />
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-20 h-36 border border-white border-r-0" />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-green-950/90 via-green-900/70 to-emerald-900/50 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 py-32 sm:py-40 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-800/60 border border-green-700/50 text-green-300 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
            Hệ thống đặt sân trực tuyến TP.HCM
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            Đặt sân bóng<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-300 to-emerald-400">
              nhanh &amp; dễ dàng
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-green-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            3 cơ sở tại TP.HCM, lịch sân minh bạch, đặt chỗ trong vài giây — không cần gọi điện, không cần chờ đợi.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#schedule"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-950 rounded-xl font-semibold text-base hover:bg-green-50 transition-all shadow-xl shadow-black/30"
            >
              Xem lịch sân ngay <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white rounded-xl font-semibold text-base hover:bg-white/10 transition-colors"
            >
              Tạo tài khoản miễn phí
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div className="bg-green-900 text-white border-t border-green-800">
        <div className="max-w-3xl mx-auto grid grid-cols-4 divide-x divide-green-800">
          {[
            { val: "9", label: "Sân bóng" },
            { val: "3", label: "Cơ sở TP.HCM" },
            { val: "06–23h", label: "Mở cửa hàng ngày" },
            { val: "1,200+", label: "Lượt đặt / tháng" },
          ].map((s, i) => (
            <div key={i} className="py-6 text-center px-4">
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight">{s.val}</div>
              <div className="text-green-400 text-xs mt-1.5 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Schedule Lookup ── */}
      <section id="schedule" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold text-green-700 uppercase tracking-widest">Lịch sân</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Kiểm tra khung giờ trống</h2>
            <p className="text-gray-500 text-sm mt-2">Chọn ngày và cơ sở để xem các khung giờ còn trống</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            <label className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 cursor-pointer hover:border-green-400 transition-colors shadow-sm">
              <Calendar className="w-4 h-4 text-green-600" />
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
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  selectedFacility === null
                    ? "bg-green-800 text-white shadow-sm"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-green-300"
                }`}
              >
                Tất cả cơ sở
              </button>
              {facilities.map(f => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFacility(f.id)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    selectedFacility === f.id
                      ? "bg-green-800 text-white shadow-sm"
                      : "bg-white border border-gray-200 text-gray-600 hover:border-green-300"
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
                <div key={facility.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                  {/* Facility header */}
                  <div className="bg-linear-to-r from-green-950 to-green-800 flex items-stretch overflow-hidden">
                    {/* Info */}
                    <div className="flex-1 px-5 py-5 flex flex-col justify-center gap-2">
                      <h3 className="font-bold text-white text-base leading-snug">{facility.name}</h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-green-300">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 shrink-0" /> {facility.address}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {facility.openTime} – {facility.closeTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {facilityFields.length} sân ·{" "}
                          <span className="text-green-400 font-medium">
                            {facilityFields.filter(f => f.status === "Trống").length} trống
                          </span>
                        </span>
                      </div>
                    </div>
                    {/* Pitch thumbnail */}
                    <div className="hidden sm:flex items-center pr-5 pl-2 opacity-80">
                      <FootballPitchSvg className="w-40 h-24 drop-shadow-sm" />
                    </div>
                  </div>

                  {/* Schedule grid */}
                  <div className="overflow-x-auto">
                    <table className="text-xs border-collapse w-max min-w-full">
                      <thead>
                        <tr className="border-b border-gray-100 bg-gray-50/80">
                          <th className="text-left px-4 py-3 text-gray-500 font-medium min-w-52 sticky left-0 bg-gray-50 z-10 border-r border-gray-100">
                            Sân
                          </th>
                          {DISPLAY_HOURS.map(h => (
                            <th key={h} className={`py-3 text-center font-semibold w-8 ${isPeak(h) ? "text-amber-500" : "text-gray-400"}`}>
                              <div className="flex flex-col items-center gap-px">
                                <span>{h}</span>
                                {isPeak(h) && <span className="text-amber-400 leading-none">⚡</span>}
                              </div>
                            </th>
                          ))}
                          <th className="px-4 py-3 text-gray-500 font-medium border-l border-gray-100 whitespace-nowrap">Giá/giờ</th>
                          <th className="px-4 py-3 border-l border-gray-100" />
                        </tr>
                      </thead>
                      <tbody>
                        {facilityFields.map((field, i) => {
                          const isMaintenance = field.status === "Bảo trì";
                          return (
                            <tr key={field.id} className={`border-b border-gray-50 last:border-0 hover:bg-green-50/30 transition-colors ${i % 2 === 1 ? "bg-gray-50/30" : ""}`}>
                              <td className="px-2 py-2 sticky left-0 z-10 border-r border-gray-100 bg-white/80">
                                <div className="flex items-center gap-2.5">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img
                                    src={field.image}
                                    alt={field.name}
                                    className="w-24 md:w-32 lg:w-64 h-auto object-cover rounded-md shrink-0"
                                  />
                                  <div>
                                    <div className="font-semibold text-gray-800 text-xs md:text-lg leading-tight">{field.name}</div>
                                    <div className="text-gray-400 text-xs mt-0.5">{field.type} người</div>
                                    {isMaintenance && <div className="text-orange-500 text-xs mt-0.5">Bảo trì</div>}
                                  </div>
                                </div>
                              </td>
                              {DISPLAY_HOURS.map(h => {
                                if (isMaintenance) {
                                  return (
                                    <td key={h} className="px-1 py-3 text-center">
                                      <div className="w-6 h-5 rounded mx-auto bg-gray-200" title="Bảo trì" />
                                    </td>
                                  );
                                }
                                const booked = isSlotBooked(field.id, selectedDate, h);
                                return (
                                  <td key={h} className="py-3 text-center">
                                    <div
                                      title={booked ? "Đã đặt" : isPeak(h) ? "Còn trống (giờ vàng)" : "Còn trống"}
                                      className={`w-6 h-5 rounded mx-auto transition-colors ${
                                        booked ? "bg-red-400" : isPeak(h) ? "bg-amber-400" : "bg-green-300"
                                      }`}
                                    />
                                  </td>
                                );
                              })}
                              <td className="px-4 py-3 border-l border-gray-100 whitespace-nowrap">
                                <div className="text-gray-700 font-medium">{shortPrice(field.basePrice)}đ</div>
                                <div className="text-amber-500 font-medium">{shortPrice(field.peakPrice)}đ <span className="text-gray-400 font-normal">vàng</span></div>
                              </td>
                              <td className="px-4 py-3 border-l border-gray-100">
                                {isMaintenance ? (
                                  <span className="text-gray-400">Bảo trì</span>
                                ) : (
                                  <Link
                                    href="/login"
                                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-700 text-white rounded-lg font-medium hover:bg-green-600 transition-colors whitespace-nowrap"
                                  >
                                    Đặt sân <ChevronRight className="w-3 h-3" />
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
                  <div className="px-5 py-3 border-t border-gray-100 flex flex-wrap items-center gap-4 text-xs text-gray-500 bg-gray-50/60">
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-green-300 inline-block" /> Còn trống</span>
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-amber-400 inline-block" /> Giờ vàng</span>
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-red-400 inline-block" /> Đã đặt</span>
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-gray-200 inline-block" /> Bảo trì</span>
                    <span className="ml-auto text-amber-500 font-semibold">⚡ Giờ vàng: 17h – 22h</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Features / About ── */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-green-700 uppercase tracking-widest">Tại sao chọn chúng tôi</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Hệ thống đặt sân thông minh</h2>
            <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">
              Chuyên nghiệp, minh bạch và tiện lợi nhất TP.HCM
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: <Zap className="w-5 h-5 text-amber-500" />,
                bg: "bg-amber-50 border-amber-100",
                title: "Đặt sân trong 30 giây",
                desc: "Chọn ngày, chọn giờ, xác nhận. Không cần gọi điện, không cần chờ đợi.",
              },
              {
                icon: <Calendar className="w-5 h-5 text-blue-500" />,
                bg: "bg-blue-50 border-blue-100",
                title: "Lịch sân thời gian thực",
                desc: "Xem lịch trống-bận theo từng khung giờ ngay trên web, không sợ đặt trùng.",
              },
              {
                icon: <Star className="w-5 h-5 text-purple-500" />,
                bg: "bg-purple-50 border-purple-100",
                title: "Tích điểm đổi ưu đãi",
                desc: "Mỗi lần đặt sân tích điểm thành viên, đổi giảm giá cho lần tiếp theo.",
              },
              {
                icon: <Shield className="w-5 h-5 text-green-600" />,
                bg: "bg-green-50 border-green-100",
                title: "QR check-in nhanh",
                desc: "Nhận mã QR sau khi đặt sân, check-in tại cổng chỉ trong vài giây.",
              },
            ].map((feat, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 p-6 flex flex-col gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all bg-white">
                <div className={`w-11 h-11 ${feat.bg} border rounded-xl flex items-center justify-center`}>
                  {feat.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 leading-snug">{feat.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mt-2">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Locations ── */}
      <section id="locations" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-green-700 uppercase tracking-widest">Hệ thống cơ sở</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">3 cơ sở tại TP.HCM</h2>
            <p className="text-gray-500 text-sm mt-2">Phủ khắp các quận trung tâm, dễ dàng di chuyển</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {facilities.map((facility, idx) => {
              const fFields = fields.filter(f => f.facilityId === facility.id);
              const availableCount = fFields.filter(f => f.status === "Trống").length;
              const type5Count = fFields.filter(f => f.type === 5).length;
              const type7Count = fFields.filter(f => f.type === 7).length;
              const headers = [
                "from-green-800 to-emerald-950",
                "from-teal-800 to-green-950",
                "from-emerald-800 to-teal-950",
              ];
              return (
                <div
                  key={facility.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5 border border-gray-100"
                >
                  {/* Card header with field pattern */}
                  <div className={`bg-linear-to-br ${headers[idx]} h-32 relative overflow-hidden flex items-end p-4`}>
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-white" />
                      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white" />
                      <div className="absolute top-1/2 left-0 right-0 h-px bg-white" />
                    </div>
                    <div className="relative flex items-end justify-between w-full">
                      <span className="text-white font-bold text-lg leading-tight">
                        {facility.name.replace("LDH Football Hub – ", "")}
                      </span>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${availableCount > 0 ? "bg-green-400/90 text-green-950" : "bg-gray-600/80 text-white"}`}>
                        {availableCount > 0 ? `${availableCount} sân trống` : "Hết sân"}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <div className="space-y-1.5 text-xs text-gray-500">
                      <div className="flex items-start gap-1.5">
                        <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-gray-400" />
                        <span className="leading-snug">{facility.address}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-gray-400" />
                        <span>{facility.phone}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 py-2.5 border-t border-b border-gray-100 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        {facility.openTime} – {facility.closeTime}
                      </span>
                      <span className="text-gray-300">·</span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-gray-400" />
                        {fFields.length} sân
                        {type5Count > 0 && ` · ${type5Count}v5`}
                        {type7Count > 0 && ` · ${type7Count}v7`}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedFacility(facility.id);
                        document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="w-full py-2.5 rounded-xl border border-green-200 text-green-700 text-xs font-semibold hover:bg-green-50 hover:border-green-400 transition-colors flex items-center justify-center gap-1"
                    >
                      Xem lịch sân <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative bg-green-950 text-white py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none select-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full border border-white" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-62.5 h-62.5 rounded-full border border-white" />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white" />
        </div>
        <div className="relative max-w-xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
            Sẵn sàng ra sân?
          </h2>
          <p className="text-green-100/80 text-base mb-10 max-w-md mx-auto leading-relaxed">
            Tạo tài khoản miễn phí, đặt sân và nhận QR check-in ngay trên điện thoại.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-950 rounded-xl font-semibold hover:bg-green-50 transition-colors shadow-xl shadow-black/30"
            >
              Tạo tài khoản miễn phí <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              Đăng nhập
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-950 text-gray-500 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-8 pb-10 border-b border-gray-800">
            <div>
              <div className="flex items-center gap-2.5 text-white font-bold text-lg mb-3">
                <div className="w-8 h-8 bg-green-800 rounded-lg flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-white" />
                </div>
                LDH Football Hub
              </div>
              <p className="text-xs text-gray-600 max-w-xs leading-relaxed">
                Hệ thống quản lý và đặt sân bóng chuyên nghiệp tại TP.HCM.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-2 text-sm">
              <a href="#schedule" className="hover:text-white transition-colors">Lịch sân</a>
              <a href="#about" className="hover:text-white transition-colors">Giới thiệu</a>
              <a href="#locations" className="hover:text-white transition-colors">Cơ sở</a>
              <Link href="/login" className="hover:text-white transition-colors">Đăng nhập</Link>
              <Link href="/register" className="hover:text-white transition-colors">Đăng ký</Link>
            </div>
          </div>
          <p className="text-xs text-center mt-8 text-gray-700">
            © 2026 LDH Football Hub · Hệ thống Quản lý &amp; Đặt sân bóng TP.HCM
          </p>
        </div>
      </footer>
    </div>
  );
}
