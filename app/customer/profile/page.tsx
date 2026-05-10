"use client";

import { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { bookings } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { NotificationToast, NotificationState } from "@/components/ui/notification-toast";

export default function ProfilePage() {
  const { currentUser } = useAuth();
  const [form, setForm] = useState({ name: currentUser?.name ?? "", phone: currentUser?.phone ?? "", email: currentUser?.email ?? "" });
  const [pwForm, setPwForm] = useState({ current: "", newPw: "", confirm: "" });
  const [pwError, setPwError] = useState("");
  const [notification, setNotification] = useState<NotificationState | null>(null);

  const totalBookings = bookings.filter((b) => b.customerId === currentUser?.id).length;
  const completedBookings = bookings.filter((b) => b.customerId === currentUser?.id && b.status === "Hoàn thành").length;

  const initials = currentUser?.name.split(" ").map((w) => w[0]).slice(-2).join("").toUpperCase() ?? "?";

  async function handleSaveProfile(e: React.FormEvent) {
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 400));
    setNotification({ type: "success", message: "Đã lưu thông tin cá nhân thành công!" });
  }

  async function handleChangePw(e: React.FormEvent) {
    e.preventDefault();
    setPwError("");
    if (pwForm.current !== currentUser?.password) { setPwError("Mật khẩu hiện tại không đúng."); return; }
    if (pwForm.newPw.length < 6) { setPwError("Mật khẩu mới tối thiểu 6 ký tự."); return; }
    if (pwForm.newPw !== pwForm.confirm) { setPwError("Mật khẩu xác nhận không khớp."); return; }
    await new Promise((r) => setTimeout(r, 400));
    setPwForm({ current: "", newPw: "", confirm: "" });
    setNotification({ type: "success", message: "Đã đổi mật khẩu thành công!" });
  }

  return (
    <div className="max-w-2xl space-y-6">
      {notification && <NotificationToast {...notification} onClose={() => setNotification(null)} />}
      <div>
        <h1 className="text-2xl font-bold">Tài khoản của tôi</h1>
        <p className="text-muted-foreground text-sm mt-1">Quản lý thông tin cá nhân</p>
      </div>

      {/* Avatar + Stats */}
      <Card>
        <CardContent className="pt-6 flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <Avatar className="w-20 h-20">
            <AvatarFallback className="bg-green-700 text-white text-2xl">{initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl font-bold">{currentUser?.name}</h2>
            <p className="text-muted-foreground text-sm">{currentUser?.email}</p>
            <div className="flex gap-6 mt-4 justify-center sm:justify-start">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-700">{currentUser?.points ?? 0}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1"><Star className="w-3 h-3 text-amber-400" />Điểm tích lũy</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{totalBookings}</p>
                <p className="text-xs text-muted-foreground">Tổng lần đặt</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">{completedBookings}</p>
                <p className="text-xs text-muted-foreground">Đã hoàn thành</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Edit profile */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Chỉnh sửa thông tin</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div className="space-y-1.5">
              <Label>Họ và tên</Label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div className="space-y-1.5">
              <Label>Số điện thoại</Label>
              <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div className="space-y-1.5">
              <Label>Email</Label>
              <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="flex items-center gap-3">
              <Button type="submit" className="bg-green-700 hover:bg-green-800">Lưu thay đổi</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Change password */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Đổi mật khẩu</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleChangePw} className="space-y-4">
            <div className="space-y-1.5">
              <Label>Mật khẩu hiện tại</Label>
              <Input type="password" value={pwForm.current} onChange={(e) => setPwForm({ ...pwForm, current: e.target.value })} />
            </div>
            <div className="space-y-1.5">
              <Label>Mật khẩu mới</Label>
              <Input type="password" value={pwForm.newPw} onChange={(e) => setPwForm({ ...pwForm, newPw: e.target.value })} />
            </div>
            <div className="space-y-1.5">
              <Label>Xác nhận mật khẩu mới</Label>
              <Input type="password" value={pwForm.confirm} onChange={(e) => setPwForm({ ...pwForm, confirm: e.target.value })} />
            </div>
            {pwError && <p className="text-xs text-red-600">{pwError}</p>}
            <div className="flex items-center gap-3">
              <Button type="submit" variant="outline">Đổi mật khẩu</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
