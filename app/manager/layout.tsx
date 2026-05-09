"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import Navbar from "@/components/navbar";

const LINKS = [
  { href: "/manager", label: "Dashboard" },
  { href: "/manager/bookings", label: "Đơn đặt sân" },
  { href: "/manager/fields", label: "Quản lý sân" },
  { href: "/manager/users", label: "Nhân sự" },
  { href: "/manager/promotions", label: "Khuyến mãi" },
  { href: "/manager/services", label: "Dịch vụ" },
];

export default function ManagerLayout({ children }: { children: React.ReactNode }) {
  const { currentUser, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;
    if (!currentUser) router.replace("/login");
    else if (currentUser.role !== "manager") router.replace("/");
  }, [isLoading, currentUser, router]);

  if (isLoading || !currentUser || currentUser.role !== "manager") return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar links={LINKS} />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6">{children}</main>
    </div>
  );
}
