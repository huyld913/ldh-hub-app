"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import Navbar from "@/components/navbar";

const LINKS = [
  { href: "/customer", label: "Trang chủ" },
  { href: "/customer/search", label: "Tìm sân" },
  { href: "/customer/bookings", label: "Lịch sử đặt" },
];

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  const { currentUser, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;
    if (!currentUser) router.replace("/login");
    else if (currentUser.role !== "customer") router.replace("/");
  }, [isLoading, currentUser, router]);

  if (isLoading || !currentUser || currentUser.role !== "customer") return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar links={LINKS} />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6">{children}</main>
    </div>
  );
}
