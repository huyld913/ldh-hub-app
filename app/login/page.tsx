"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AlertCircle, Trophy } from "lucide-react";

function redirectByRole(role: string, router: ReturnType<typeof useRouter>) {
  if (role === "customer") router.replace("/customer");
  else if (role === "staff") router.replace("/staff");
  else router.replace("/manager");
}

export default function LoginPage() {
  const { login, currentUser, isLoading } = useAuth();
  const router = useRouter();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isLoading && currentUser) redirectByRole(currentUser.role, router);
  }, [isLoading, currentUser, router]);

  if (isLoading || currentUser) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const user = login(credential, password);
    if (!user) {
      setError("Tài khoản hoặc mật khẩu không chính xác.");
      return;
    }
    redirectByRole(user.role, router);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-900 via-green-800 to-green-700 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-lg">
            <Trophy className="w-8 h-8 text-green-700" />
          </div>
          <h1 className="text-3xl font-bold text-white">LDH Football Hub</h1>
          <p className="text-green-200 mt-1 text-sm">Hệ thống Quản lý & Đặt sân bóng</p>
        </div>

        <Card className="shadow-2xl border-0">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl">Đăng nhập</CardTitle>
            <CardDescription>Nhập thông tin tài khoản để tiếp tục</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="credential">Email hoặc Số điện thoại</Label>
                <Input
                  id="credential"
                  placeholder="example@email.com hoặc 09xxxxxxxx"
                  value={credential}
                  onChange={(e) => setCredential(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Mật khẩu</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 rounded-md px-3 py-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {error}
                </div>
              )}

              <Button type="submit" className="w-full bg-green-700 hover:bg-green-800" >
                Đăng nhập
              </Button>
            </form>

            <div className="mt-4 text-center text-sm text-muted-foreground">
              Chưa có tài khoản?{" "}
              <Link href="/register" className="text-green-700 font-medium hover:underline">
                Đăng ký ngay
              </Link>
            </div>

            <div className="mt-4 text-center text-sm text-muted-foreground">
              <Link href="/" className="text-yellow-700 font-medium hover:underline">
                Trang chủ
              </Link>
            </div>

            {/* Demo accounts */}
            <div className="mt-6 pt-4 border-t">
              <p className="text-xs text-muted-foreground mb-3 font-medium">Tài khoản demo:</p>
              <div className="space-y-2">
                {[
                  { label: "Khách hàng", email: "huyld@email.com", pw: "123456" },
                  { label: "Nhân viên", email: "duongvt@ldhfootball.vn", pw: "staff123" },
                  { label: "Quản lý", email: "hoang@ldhfootball.vn", pw: "manager123" },
                ].map((acc) => (
                  <button
                    key={acc.email}
                    type="button"
                    onClick={() => { setCredential(acc.email); setPassword(acc.pw); }}
                    className="w-full text-left text-xs bg-gray-50 hover:bg-gray-100 rounded-md px-3 py-2 transition-colors"
                  >
                    <span className="font-medium text-gray-700">{acc.label}:</span>{" "}
                    <span className="text-gray-500">{acc.email} / {acc.pw}</span>
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
