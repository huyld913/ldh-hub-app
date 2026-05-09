"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const { register, currentUser, isLoading } = useAuth();
  const [form, setForm] = useState({ name: "", phone: "", email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!isLoading && currentUser) {
      if (currentUser.role === "customer") router.replace("/customer");
      else if (currentUser.role === "staff") router.replace("/staff");
      else router.replace("/manager");
    }
  }, [isLoading, currentUser, router]);

  if (isLoading || currentUser) return null;

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Vui lòng nhập họ tên.";
    if (!/^0[0-9]{9}$/.test(form.phone)) e.phone = "Số điện thoại không hợp lệ (10 chữ số, bắt đầu bằng 0).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email không hợp lệ.";
    if (form.password.length < 6) e.password = "Mật khẩu tối thiểu 6 ký tự.";
    if (form.password !== form.confirm) e.confirm = "Mật khẩu xác nhận không khớp.";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    const result = register(form.name.trim(), form.phone, form.email, form.password);
    if (!result.success) {
      setErrors({ email: result.error ?? "Đăng ký thất bại." });
      return;
    }
    router.replace("/customer");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-900 via-green-800 to-green-700 px-4 py-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-lg">
            <Trophy className="w-8 h-8 text-green-700" />
          </div>
          <h1 className="text-3xl font-bold text-white">LDH Football Hub</h1>
          <p className="text-green-200 mt-1 text-sm">Tạo tài khoản mới</p>
        </div>

        <Card className="shadow-2xl border-0">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl">Đăng ký</CardTitle>
            <CardDescription>Điền đầy đủ thông tin bên dưới để tạo tài khoản</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="name">Họ và tên</Label>
                <Input id="name" placeholder="Nguyễn Văn A" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
              </div>
              <div className="space-y-1">
                <Label htmlFor="phone">Số điện thoại</Label>
                <Input id="phone" placeholder="09xxxxxxxx" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                {errors.phone && <p className="text-xs text-red-600">{errors.phone}</p>}
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="example@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Mật khẩu</Label>
                <Input id="password" type="password" placeholder="Tối thiểu 6 ký tự" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
                {errors.password && <p className="text-xs text-red-600">{errors.password}</p>}
              </div>
              <div className="space-y-1">
                <Label htmlFor="confirm">Xác nhận mật khẩu</Label>
                <Input id="confirm" type="password" placeholder="Nhập lại mật khẩu" value={form.confirm} onChange={(e) => setForm({ ...form, confirm: e.target.value })} />
                {errors.confirm && <p className="text-xs text-red-600">{errors.confirm}</p>}
              </div>

              <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
                Đăng ký
              </Button>
            </form>

            <p className="mt-4 text-center text-sm text-muted-foreground">
              Đã có tài khoản?{" "}
              <Link href="/login" className="text-green-700 font-medium hover:underline">
                Đăng nhập
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
