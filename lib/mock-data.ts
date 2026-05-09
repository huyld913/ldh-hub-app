export type UserRole = "customer" | "staff" | "manager";

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  password: string;
  facility?: string;
  points?: number;
  createdAt: string;
}

export interface Facility {
  id: number;
  name: string;
  address: string;
  phone: string;
  openTime: string;
  closeTime: string;
}

export interface Field {
  id: number;
  facilityId: number;
  name: string;
  type: 5 | 7 | 11;
  basePrice: number;
  peakPrice: number;
  status: "Trống" | "Đã đặt" | "Đang sử dụng" | "Bảo trì";
  image: string;
  description: string;
}

export interface Booking {
  id: number;
  customerId: number;
  customerName: string;
  customerPhone: string;
  fieldId: number;
  fieldName: string;
  facilityName: string;
  date: string;
  startTime: string;
  endTime: string;
  status:
    | "Chờ xác nhận"
    | "Đã xác nhận"
    | "Đã check-in"
    | "Hoàn thành"
    | "Đã hủy";
  note: string;
  totalPrice: number;
  promotionCode?: string;
  discount: number;
  createdAt: string;
}

export interface Invoice {
  id: number;
  bookingId: number;
  staffId: number;
  staffName: string;
  createdAt: string;
  fieldAmount: number;
  serviceAmount: number;
  discount: number;
  totalAmount: number;
  paymentMethod: "Tiền mặt" | "Chuyển khoản" | "Ví điện tử";
  status: "Chờ thanh toán" | "Đã thanh toán";
  services: { name: string; qty: number; price: number }[];
}

export interface Service {
  id: number;
  facilityId: number;
  name: string;
  category: "Nước uống" | "Thức ăn" | "Thiết bị";
  price: number;
  stock: number;
  unit: string;
}

export interface Promotion {
  id: number;
  code: string;
  discountPercent: number;
  maxDiscount: number;
  minOrder: number;
  usesLeft: number;
  startDate: string;
  endDate: string;
  status: "Đang hoạt động" | "Hết hạn" | "Hết lượt";
}

const TODAY = new Date().toISOString().split("T")[0];

// ─── Facilities ───────────────────────────────────────────────────────────────
export const facilities: Facility[] = [
  {
    id: 1,
    name: "LDH Football Hub – Quận 7",
    address: "123 Nguyễn Thị Thập, Q.7, TP.HCM",
    phone: "028 3810 1234",
    openTime: "06:00",
    closeTime: "23:00",
  },
  {
    id: 2,
    name: "LDH Football Hub – Bình Thạnh",
    address: "45 Đinh Bộ Lĩnh, Q. Bình Thạnh, TP.HCM",
    phone: "028 3551 5678",
    openTime: "06:00",
    closeTime: "23:00",
  },
  {
    id: 3,
    name: "LDH Football Hub – Thủ Đức",
    address: "88 Võ Văn Ngân, TP. Thủ Đức, TP.HCM",
    phone: "028 3720 9012",
    openTime: "06:00",
    closeTime: "23:00",
  },
];

// ─── Fields ───────────────────────────────────────────────────────────────────
export const fields: Field[] = [
  {
    id: 1,
    facilityId: 1,
    name: "Sân Old Trafford",
    type: 5,
    basePrice: 150000,
    peakPrice: 220000,
    status: "Trống",
    image:
      "https://images.unsplash.com/photo-1642763907630-17bad0853f15??w=400&h=250&fit=crop",
    description: "Sân cỏ nhân tạo thế hệ mới, đèn LED cao áp",
  },
  {
    id: 2,
    facilityId: 1,
    name: "Sân Bernabeu",
    type: 5,
    basePrice: 150000,
    peakPrice: 220000,
    status: "Đã đặt",
    image:
      "https://images.unsplash.com/photo-1522778590545-a5a925dcf6f5?w=400&h=250&fit=crop",
    description: "Sân cỏ nhân tạo thế hệ mới, đèn LED cao áp",
  },
  {
    id: 3,
    facilityId: 1,
    name: "Sân Camp Nou",
    type: 7,
    basePrice: 250000,
    peakPrice: 350000,
    status: "Trống",
    image:
      "https://images.unsplash.com/photo-1598121876853-82437626c783?w=400&h=250&fit=crop",
    description: "Sân 7 người tiêu chuẩn, mái che chống nắng",
  },
  {
    id: 4,
    facilityId: 1,
    name: "Sân Etihad",
    type: 7,
    basePrice: 250000,
    peakPrice: 350000,
    status: "Đang sử dụng",
    image:
      "https://images.unsplash.com/photo-1661632359993-9667c4982b1c?w=400&h=250&fit=crop",
    description: "Sân 7 người tiêu chuẩn, mái che chống nắng",
  },
  {
    id: 5,
    facilityId: 2,
    name: "Sân Alianz Arena",
    type: 5,
    basePrice: 140000,
    peakPrice: 200000,
    status: "Trống",
    image:
      "https://images.unsplash.com/photo-1584189972301-754bde8fb9e0?w=400&h=250&fit=crop",
    description: "Sân cỏ nhân tạo mini, phù hợp nhóm nhỏ",
  },
  {
    id: 6,
    facilityId: 2,
    name: "Sân Parc des Princes",
    type: 5,
    basePrice: 140000,
    peakPrice: 200000,
    status: "Bảo trì",
    image:
      "https://images.unsplash.com/photo-1610065132656-bbb6b4bf0da1?w=400&h=250&fit=crop",
    description: "Sân cỏ nhân tạo mini, phù hợp nhóm nhỏ",
  },
  {
    id: 7,
    facilityId: 2,
    name: "Sân San Siro",
    type: 7,
    basePrice: 240000,
    peakPrice: 330000,
    status: "Trống",
    image:
      "https://images.unsplash.com/photo-1592829509461-46065945a32c?w=400&h=250&fit=crop",
    description: "Sân 7 người view đẹp, hệ thống tưới tự động",
  },
  {
    id: 8,
    facilityId: 3,
    name: "Sân Emirates",
    type: 5,
    basePrice: 130000,
    peakPrice: 190000,
    status: "Trống",
    image:
      "https://images.unsplash.com/photo-1577224682913-cfeb1da521ee?w=400&h=250&fit=crop",
    description: "Sân mới khai trương, cỏ xanh mướt, phẳng",
  },
  {
    id: 9,
    facilityId: 3,
    name: "Sân Signal Iduna Park",
    type: 7,
    basePrice: 230000,
    peakPrice: 320000,
    status: "Trống",
    image:
      "https://images.unsplash.com/photo-1646491510967-2efed3638579?w=400&h=250&fit=crop",
    description: "Sân 7 người rộng, hệ thống đèn hiện đại",
  },
];

// ─── Users ────────────────────────────────────────────────────────────────────
export const users: User[] = [
  {
    id: 1,
    name: "Lê Đức Huy",
    email: "huyld@email.com",
    phone: "0901234567",
    role: "customer",
    password: "123456",
    points: 320,
    createdAt: "2025-01-15",
  },
  {
    id: 2,
    name: "Nguyễn Văn An",
    email: "an@email.com",
    phone: "0912345678",
    role: "customer",
    password: "123456",
    points: 150,
    createdAt: "2025-02-20",
  },
  {
    id: 3,
    name: "Lê Thị Bảo",
    email: "bao@email.com",
    phone: "0923456789",
    role: "customer",
    password: "123456",
    points: 480,
    createdAt: "2024-11-10",
  },
  {
    id: 4,
    name: "Võ Thuỳ Dương",
    email: "duongvt@ldhfootball.vn",
    phone: "0934567890",
    role: "staff",
    password: "staff123",
    facility: "LDH Football Hub – Quận 7",
    createdAt: "2024-06-01",
  },
  {
    id: 5,
    name: "Hoàng Văn Khánh",
    email: "khanh@ldhfootball.vn",
    phone: "0945678901",
    role: "staff",
    password: "staff123",
    facility: "LDH Football Hub – Bình Thạnh",
    createdAt: "2024-07-15",
  },
  {
    id: 6,
    name: "Lâm Đình Hoàng",
    email: "hoang@ldhfootball.vn",
    phone: "0956789012",
    role: "manager",
    password: "manager123",
    createdAt: "2024-01-01",
  },
];

// ─── Bookings ─────────────────────────────────────────────────────────────────
export const bookings: Booking[] = [
  {
    id: 1001,
    customerId: 1,
    customerName: "Phạm Thành Danh",
    customerPhone: "0901234567",
    fieldId: 1,
    fieldName: "Sân A1",
    facilityName: "LDH Football Hub – Quận 7",
    date: "2026-05-10",
    startTime: "18:00",
    endTime: "20:00",
    status: "Đã xác nhận",
    note: "",
    totalPrice: 440000,
    discount: 0,
    createdAt: "2026-05-08 09:15",
  },
  {
    id: 1002,
    customerId: 1,
    customerName: "Phạm Thành Danh",
    customerPhone: "0901234567",
    fieldId: 3,
    fieldName: "Sân B1",
    facilityName: "LDH Football Hub – Quận 7",
    date: "2026-05-07",
    startTime: "19:00",
    endTime: "21:00",
    status: "Hoàn thành",
    note: "Đặt cho đội bóng công ty",
    totalPrice: 700000,
    promotionCode: "SUMMER20",
    discount: 140000,
    createdAt: "2026-05-05 14:30",
  },
  {
    id: 1003,
    customerId: 2,
    customerName: "Nguyễn Văn An",
    customerPhone: "0912345678",
    fieldId: 2,
    fieldName: "Sân A2",
    facilityName: "LDH Football Hub – Quận 7",
    date: "2026-05-09",
    startTime: "07:00",
    endTime: "09:00",
    status: "Đã check-in",
    note: "",
    totalPrice: 300000,
    discount: 0,
    createdAt: "2026-05-08 20:00",
  },
  {
    id: 1004,
    customerId: 3,
    customerName: "Lê Thị Bảo",
    customerPhone: "0923456789",
    fieldId: 5,
    fieldName: "Sân C1",
    facilityName: "LDH Football Hub – Bình Thạnh",
    date: "2026-05-11",
    startTime: "17:00",
    endTime: "19:00",
    status: "Chờ xác nhận",
    note: "Nhờ chuẩn bị thêm ghế ngồi cạnh sân",
    totalPrice: 400000,
    discount: 0,
    createdAt: "2026-05-09 08:00",
  },
  {
    id: 1005,
    customerId: 1,
    customerName: "Phạm Thành Danh",
    customerPhone: "0901234567",
    fieldId: 7,
    fieldName: "Sân D1",
    facilityName: "LDH Football Hub – Bình Thạnh",
    date: "2026-05-06",
    startTime: "20:00",
    endTime: "21:30",
    status: "Đã hủy",
    note: "",
    totalPrice: 495000,
    discount: 0,
    createdAt: "2026-05-04 11:00",
  },
  {
    id: 1006,
    customerId: 2,
    customerName: "Nguyễn Văn An",
    customerPhone: "0912345678",
    fieldId: 3,
    fieldName: "Sân B1",
    facilityName: "LDH Football Hub – Quận 7",
    date: "2026-05-12",
    startTime: "06:00",
    endTime: "08:00",
    status: "Chờ xác nhận",
    note: "",
    totalPrice: 500000,
    discount: 0,
    createdAt: "2026-05-09 10:00",
  },
  {
    id: 1007,
    customerId: 3,
    customerName: "Lê Thị Bảo",
    customerPhone: "0923456789",
    fieldId: 9,
    fieldName: "Sân F1",
    facilityName: "LDH Football Hub – Thủ Đức",
    date: "2026-05-15",
    startTime: "19:00",
    endTime: "21:00",
    status: "Đã xác nhận",
    note: "",
    totalPrice: 640000,
    discount: 0,
    createdAt: "2026-05-09 12:00",
  },
  {
    id: 1008,
    customerId: 1,
    customerName: "Phạm Thành Danh",
    customerPhone: "0901234567",
    fieldId: 5,
    fieldName: "Sân C1",
    facilityName: "LDH Football Hub – Bình Thạnh",
    date: TODAY,
    startTime: "15:00",
    endTime: "17:00",
    status: "Đã xác nhận",
    note: "Nhóm 5 người, nhờ chuẩn bị bóng sẵn",
    totalPrice: 280000,
    discount: 0,
    createdAt: TODAY + " 10:30",
  },
];

// ─── Invoices ─────────────────────────────────────────────────────────────────
export const invoices: Invoice[] = [
  {
    id: 2001,
    bookingId: 1002,
    staffId: 4,
    staffName: "Trần Minh Ngọc",
    createdAt: "2026-05-07 21:05",
    fieldAmount: 700000,
    serviceAmount: 80000,
    discount: 140000,
    totalAmount: 640000,
    paymentMethod: "Chuyển khoản",
    status: "Đã thanh toán",
    services: [
      { name: "Nước suối Lavie", qty: 4, price: 15000 },
      { name: "Nước tăng lực Sting", qty: 2, price: 20000 },
    ],
  },
  {
    id: 2002,
    bookingId: 1003,
    staffId: 4,
    staffName: "Trần Minh Ngọc",
    createdAt: "2026-05-09 09:05",
    fieldAmount: 300000,
    serviceAmount: 45000,
    discount: 0,
    totalAmount: 345000,
    paymentMethod: "Tiền mặt",
    status: "Đã thanh toán",
    services: [{ name: "Nước suối Lavie", qty: 3, price: 15000 }],
  },
];

// ─── Services ─────────────────────────────────────────────────────────────────
export const services: Service[] = [
  {
    id: 1,
    facilityId: 1,
    name: "Nước suối Lavie 500ml",
    category: "Nước uống",
    price: 15000,
    stock: 120,
    unit: "chai",
  },
  {
    id: 2,
    facilityId: 1,
    name: "Nước tăng lực Sting",
    category: "Nước uống",
    price: 20000,
    stock: 48,
    unit: "chai",
  },
  {
    id: 3,
    facilityId: 1,
    name: "Nước ngọt Pepsi",
    category: "Nước uống",
    price: 18000,
    stock: 60,
    unit: "lon",
  },
  {
    id: 4,
    facilityId: 1,
    name: "Khăn lạnh",
    category: "Thiết bị",
    price: 10000,
    stock: 30,
    unit: "cái",
  },
  {
    id: 5,
    facilityId: 1,
    name: "Thuê giày size 39-44",
    category: "Thiết bị",
    price: 30000,
    stock: 20,
    unit: "đôi",
  },
  {
    id: 6,
    facilityId: 1,
    name: "Thuê bóng đá size 4",
    category: "Thiết bị",
    price: 25000,
    stock: 8,
    unit: "quả",
  },
  {
    id: 7,
    facilityId: 2,
    name: "Nước suối Lavie 500ml",
    category: "Nước uống",
    price: 15000,
    stock: 85,
    unit: "chai",
  },
  {
    id: 8,
    facilityId: 2,
    name: "Nước tăng lực Sting",
    category: "Nước uống",
    price: 20000,
    stock: 36,
    unit: "chai",
  },
  {
    id: 9,
    facilityId: 2,
    name: "Thuê giày size 39-44",
    category: "Thiết bị",
    price: 30000,
    stock: 12,
    unit: "đôi",
  },
  {
    id: 10,
    facilityId: 3,
    name: "Nước suối Lavie 500ml",
    category: "Nước uống",
    price: 15000,
    stock: 5,
    unit: "chai",
  },
  {
    id: 11,
    facilityId: 3,
    name: "Nước tăng lực Sting",
    category: "Nước uống",
    price: 20000,
    stock: 0,
    unit: "chai",
  },
];

// ─── Promotions ───────────────────────────────────────────────────────────────
export const promotions: Promotion[] = [
  {
    id: 1,
    code: "SUMMER20",
    discountPercent: 20,
    maxDiscount: 200000,
    minOrder: 300000,
    usesLeft: 42,
    startDate: "2026-05-01",
    endDate: "2026-05-31",
    status: "Đang hoạt động",
  },
  {
    id: 2,
    code: "NEWUSER10",
    discountPercent: 10,
    maxDiscount: 100000,
    minOrder: 200000,
    usesLeft: 98,
    startDate: "2026-04-01",
    endDate: "2026-06-30",
    status: "Đang hoạt động",
  },
  {
    id: 3,
    code: "EARLYBIRD15",
    discountPercent: 15,
    maxDiscount: 150000,
    minOrder: 250000,
    usesLeft: 0,
    startDate: "2026-03-01",
    endDate: "2026-04-30",
    status: "Hết lượt",
  },
  {
    id: 4,
    code: "TET2026",
    discountPercent: 25,
    maxDiscount: 300000,
    minOrder: 400000,
    usesLeft: 0,
    startDate: "2026-01-20",
    endDate: "2026-02-15",
    status: "Hết hạn",
  },
];

// ─── Revenue data for charts ──────────────────────────────────────────────────
export const revenueByDay = [
  { date: "03/05", q7: 4200000, binhThanh: 2800000, thuDuc: 1900000 },
  { date: "04/05", q7: 5100000, binhThanh: 3200000, thuDuc: 2200000 },
  { date: "05/05", q7: 3800000, binhThanh: 2600000, thuDuc: 1700000 },
  { date: "06/05", q7: 6200000, binhThanh: 4100000, thuDuc: 2900000 },
  { date: "07/05", q7: 7500000, binhThanh: 4800000, thuDuc: 3400000 },
  { date: "08/05", q7: 6800000, binhThanh: 4300000, thuDuc: 2800000 },
  { date: "09/05", q7: 5900000, binhThanh: 3700000, thuDuc: 2500000 },
];

export const revenueByField: Record<string, number> = {
  "Sân A1": 12500000,
  "Sân A2": 10800000,
  "Sân B1": 18200000,
  "Sân B2": 16700000,
  "Sân C1": 9400000,
  "Sân C2": 4200000,
  "Sân D1": 11300000,
  "Sân E1": 7800000,
  "Sân F1": 13600000,
};

// ─── Time slots ───────────────────────────────────────────────────────────────
export const TIME_SLOTS = [
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

export const PEAK_HOURS = ["17:00", "18:00", "19:00", "20:00", "21:00"];

export function isPeakHour(time: string): boolean {
  return PEAK_HOURS.includes(time);
}

export function getFieldPrice(field: Field, startTime: string): number {
  return isPeakHour(startTime) ? field.peakPrice : field.basePrice;
}

export function getBookedSlots(fieldId: number, date: string): string[] {
  return bookings
    .filter(
      (b) => b.fieldId === fieldId && b.date === date && b.status !== "Đã hủy",
    )
    .map((b) => b.startTime);
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
}

export function formatDate(dateStr: string): string {
  const [y, m, d] = dateStr.split("-");
  return `${d}/${m}/${y}`;
}

export const STATUS_COLORS: Record<string, string> = {
  "Chờ xác nhận": "bg-yellow-100 text-yellow-800",
  "Đã xác nhận": "bg-blue-100 text-blue-800",
  "Đã check-in": "bg-purple-100 text-purple-800",
  "Hoàn thành": "bg-green-100 text-green-800",
  "Đã hủy": "bg-red-100 text-red-800",
  Trống: "bg-green-100 text-green-800",
  "Đã đặt": "bg-yellow-100 text-yellow-800",
  "Đang sử dụng": "bg-blue-100 text-blue-800",
  "Bảo trì": "bg-gray-100 text-gray-800",
  "Đang hoạt động": "bg-green-100 text-green-800",
  "Hết hạn": "bg-gray-100 text-gray-800",
  "Hết lượt": "bg-red-100 text-red-800",
  "Chờ thanh toán": "bg-yellow-100 text-yellow-800",
  "Đã thanh toán": "bg-green-100 text-green-800",
};
