"use client";

import { useState } from "react";
import { users, User, facilities } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, Plus, RefreshCw, UserX } from "lucide-react";

export default function ManagerUsersPage() {
  const [userList, setUserList] = useState<User[]>(users);
  const [selected, setSelected] = useState<User | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [newStaff, setNewStaff] = useState({ name: "", email: "", phone: "", facilityId: "1" });
  const [resetMsg, setResetMsg] = useState<number | null>(null);

  const staff = userList.filter((u) => u.role === "staff");
  const customers = userList.filter((u) => u.role === "customer");

  function handleResetPassword(userId: number) {
    setResetMsg(userId);
    setTimeout(() => setResetMsg(null), 2500);
  }

  function handleDeactivate(userId: number) {
    setUserList((prev) => prev.filter((u) => u.id !== userId));
    setSelected(null);
  }

  function handleAddStaff() {
    const id = Math.max(...userList.map((u) => u.id)) + 1;
    const facility = facilities.find((f) => f.id === Number(newStaff.facilityId));
    setUserList((prev) => [...prev, {
      id,
      name: newStaff.name,
      email: newStaff.email,
      phone: newStaff.phone,
      role: "staff",
      password: "staff123",
      facility: facility?.name,
      createdAt: new Date().toISOString().split("T")[0],
    }]);
    setShowAdd(false);
    setNewStaff({ name: "", email: "", phone: "", facilityId: "1" });
  }

  function getInitials(name: string) {
    return name.split(" ").map((w) => w[0]).slice(-2).join("").toUpperCase();
  }

  function UserCard({ u }: { u: User }) {
    return (
      <Card className="hover:shadow-sm transition-shadow">
        <CardContent className="py-4 flex items-center gap-4">
          <Avatar className="w-10 h-10 shrink-0">
            <AvatarFallback className="bg-green-100 text-green-800 text-sm">{getInitials(u.name)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm truncate">{u.name}</p>
            <p className="text-xs text-muted-foreground truncate">{u.email}</p>
            {u.facility && <p className="text-xs text-muted-foreground">{u.facility.replace("LDH Football Hub – ", "")}</p>}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {resetMsg === u.id && <span className="text-xs text-green-600">Đã reset!</span>}
            <Button variant="ghost" size="sm" onClick={() => handleResetPassword(u.id)} title="Reset mật khẩu">
              <RefreshCw className="w-3.5 h-3.5" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setSelected(u)} title="Chỉnh sửa">
              <Edit className="w-3.5 h-3.5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">Quản lý Nhân sự & Người dùng</h1>
          <p className="text-muted-foreground text-sm mt-1">Cấp phát và quản lý tài khoản hệ thống</p>
        </div>
        <Button className="bg-green-700 hover:bg-green-800" onClick={() => setShowAdd(true)}>
          <Plus className="w-4 h-4 mr-2" /> Thêm nhân viên
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Nhân viên", count: staff.length, color: "text-blue-600" },
          { label: "Khách hàng", count: customers.length, color: "text-green-600" },
          { label: "Quản lý", count: userList.filter((u) => u.role === "manager").length, color: "text-purple-600" },
        ].map((s) => (
          <Card key={s.label}>
            <CardContent className="pt-4 pb-3 text-center">
              <p className={`text-3xl font-bold ${s.color}`}>{s.count}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="staff">
        <TabsList>
          <TabsTrigger value="staff">Nhân viên ({staff.length})</TabsTrigger>
          <TabsTrigger value="customers">Khách hàng ({customers.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="staff" className="mt-4 space-y-2">
          {staff.map((u) => <UserCard key={u.id} u={u} />)}
        </TabsContent>
        <TabsContent value="customers" className="mt-4 space-y-2">
          {customers.map((u) => (
            <Card key={u.id} className="hover:shadow-sm transition-shadow">
              <CardContent className="py-4 flex items-center gap-4">
                <Avatar className="w-10 h-10 shrink-0">
                  <AvatarFallback className="bg-gray-100 text-gray-700 text-sm">{getInitials(u.name)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate">{u.name}</p>
                  <p className="text-xs text-muted-foreground">{u.phone} · {u.email}</p>
                  <p className="text-xs text-muted-foreground">Tham gia: {u.createdAt} · {u.points ?? 0} điểm</p>
                </div>
                <Badge variant="outline" className="text-xs shrink-0">Khách hàng</Badge>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      {/* Edit/deactivate dialog */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        {selected && (
          <DialogContent>
            <DialogHeader><DialogTitle>Thông tin – {selected.name}</DialogTitle></DialogHeader>
            <div className="space-y-2 text-sm">
              <div className="grid grid-cols-2 gap-2 bg-gray-50 rounded-lg p-3">
                <div><p className="text-xs text-muted-foreground">Họ tên</p><p className="font-medium">{selected.name}</p></div>
                <div><p className="text-xs text-muted-foreground">Email</p><p className="font-medium">{selected.email}</p></div>
                <div><p className="text-xs text-muted-foreground">SĐT</p><p className="font-medium">{selected.phone}</p></div>
                <div><p className="text-xs text-muted-foreground">Cơ sở</p><p className="font-medium">{selected.facility?.replace("LDH Football Hub – ", "") ?? "—"}</p></div>
                <div><p className="text-xs text-muted-foreground">Tạo lúc</p><p className="font-medium">{selected.createdAt}</p></div>
              </div>
            </div>
            <DialogFooter className="flex-col sm:flex-row gap-2">
              <Button variant="outline" onClick={() => setSelected(null)} className="sm:mr-auto">Đóng</Button>
              <Button variant="outline" onClick={() => { handleResetPassword(selected.id); setSelected(null); }}>
                <RefreshCw className="w-3.5 h-3.5 mr-1" /> Reset mật khẩu
              </Button>
              <Button variant="destructive" onClick={() => handleDeactivate(selected.id)}>
                <UserX className="w-3.5 h-3.5 mr-1" /> Thu hồi tài khoản
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>

      {/* Add staff dialog */}
      <Dialog open={showAdd} onOpenChange={setShowAdd}>
        <DialogContent>
          <DialogHeader><DialogTitle>Thêm nhân viên mới</DialogTitle></DialogHeader>
          <div className="space-y-3">
            <div className="space-y-1.5">
              <Label>Họ và tên</Label>
              <Input value={newStaff.name} onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })} placeholder="Nguyễn Văn A" />
            </div>
            <div className="space-y-1.5">
              <Label>Email</Label>
              <Input type="email" value={newStaff.email} onChange={(e) => setNewStaff({ ...newStaff, email: e.target.value })} placeholder="nhanvien@ldhfootball.vn" />
            </div>
            <div className="space-y-1.5">
              <Label>Số điện thoại</Label>
              <Input value={newStaff.phone} onChange={(e) => setNewStaff({ ...newStaff, phone: e.target.value })} placeholder="09xxxxxxxx" />
            </div>
            <div className="space-y-1.5">
              <Label>Phụ trách cơ sở</Label>
              <Select value={newStaff.facilityId} onValueChange={(v) => { if (v !== null) setNewStaff({ ...newStaff, facilityId: v }); }}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {facilities.map((f) => <SelectItem key={f.id} value={String(f.id)}>{f.name.replace("LDH Football Hub – ", "")}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <p className="text-xs text-muted-foreground">Mật khẩu mặc định: <strong className="font-mono">staff123</strong></p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAdd(false)}>Hủy</Button>
            <Button className="bg-green-700 hover:bg-green-800" onClick={handleAddStaff} disabled={!newStaff.name || !newStaff.email}>Thêm nhân viên</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
