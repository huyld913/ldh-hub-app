import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth-context";

const inter = Inter({ variable: "--font-sans", subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "LDH Football Hub",
  description: "Hệ thống Quản lý và Đặt sân bóng LDH Football Hub",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-gray-50">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
