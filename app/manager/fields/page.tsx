"use client";

import { useState } from "react";
import { fields, Field, facilities, formatCurrency, STATUS_COLORS } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Edit, MapPin, Plus } from "lucide-react";
import { NotificationToast, NotificationState } from "@/components/ui/notification-toast";

type FieldStatus = Field["status"];

export default function ManagerFieldsPage() {
  const [fieldList, setFieldList] = useState<Field[]>(fields);
  const [editing, setEditing] = useState<Field | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [facilityFilter, setFacilityFilter] = useState("all");
  const [editForm, setEditForm] = useState({ basePrice: 0, peakPrice: 0, status: "" as FieldStatus });
  const [newField, setNewField] = useState({ name: "", type: "5" as "5" | "7" | "11", facilityId: "1", basePrice: "", peakPrice: "" });
  const [notification, setNotification] = useState<NotificationState | null>(null);

  const filtered = fieldList.filter((f) => facilityFilter === "all" || f.facilityId === Number(facilityFilter));

  function openEdit(f: Field) {
    setEditing(f);
    setEditForm({ basePrice: f.basePrice, peakPrice: f.peakPrice, status: f.status });
  }

  function handleSaveEdit() {
    if (!editing) return;
    setFieldList((prev) => prev.map((f) => f.id === editing.id ? { ...f, ...editForm } : f));
    setEditing(null);
    setNotification({ type: "success", message: "Đã lưu thay đổi thông tin sân bóng." });
  }

  function handleAddField() {
    const id = Math.max(...fieldList.map((f) => f.id)) + 1;
    setFieldList((prev) => [...prev, {
      id,
      facilityId: Number(newField.facilityId),
      name: newField.name,
      type: Number(newField.type) as 5 | 7 | 11,
      basePrice: Number(newField.basePrice),
      peakPrice: Number(newField.peakPrice),
      status: "Trống",
      image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=400&h=250&fit=crop",
      description: "Sân mới được thêm vào hệ thống",
    }]);
    setShowAdd(false);
    setNewField({ name: "", type: "5", facilityId: "1", basePrice: "", peakPrice: "" });
    setNotification({ type: "success", message: "Đã thêm sân mới thành công!" });
  }

  const statusBadgeColors: Record<FieldStatus, string> = {
    "Trống": "bg-green-100 text-green-700 border-green-200",
    "Đã đặt": "bg-yellow-100 text-yellow-700 border-yellow-200",
    "Đang sử dụng": "bg-blue-100 text-blue-700 border-blue-200",
    "Bảo trì": "bg-gray-100 text-gray-600 border-gray-200",
  };

  return (
    <div className="space-y-6">
      {notification && <NotificationToast {...notification} onClose={() => setNotification(null)} />}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">Quản lý Sân bóng</h1>
          <p className="text-muted-foreground text-sm mt-1">Cấu hình thông tin, giá và trạng thái từng sân</p>
        </div>
        <Button className="bg-green-700 hover:bg-green-800" onClick={() => setShowAdd(true)}>
          <Plus className="w-4 h-4 mr-2" /> Thêm sân
        </Button>
      </div>

      <div className="flex gap-3 flex-wrap">
        {(["Trống", "Đã đặt", "Đang sử dụng", "Bảo trì"] as FieldStatus[]).map((s) => (
          <div key={s} className={`px-3 py-1.5 rounded-full text-xs font-medium border ${statusBadgeColors[s]}`}>
            {fieldList.filter((f) => f.status === s).length} {s}
          </div>
        ))}
      </div>

      <Select value={facilityFilter} onValueChange={(v) => { if (v !== null) setFacilityFilter(v); }}>
        <SelectTrigger className="w-64">
          <SelectValue placeholder="Lọc theo cơ sở" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Tất cả cơ sở</SelectItem>
          {facilities.map((f) => <SelectItem key={f.id} value={String(f.id)}>{f.name.replace("LDH Football Hub – ", "")}</SelectItem>)}
        </SelectContent>
      </Select>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((field) => {
          const facility = facilities.find((f) => f.id === field.facilityId)!;
          return (
            <Card key={field.id} className="overflow-hidden hover:shadow-md transition-shadow">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={field.image} alt={field.name} className="w-full h-36 object-cover" />
              <CardContent className="pt-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold">{field.name}</h3>
                      <Badge variant="outline" className="text-xs">{field.type} người</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" />{facility.name.replace("LDH Football Hub – ", "")}
                    </p>
                  </div>
                  <Badge className={`text-xs ${STATUS_COLORS[field.status]}`}>{field.status}</Badge>
                </div>
                <div className="space-y-1 text-sm mb-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Giờ thường:</span>
                    <span className="font-medium text-green-700">{formatCurrency(field.basePrice)}/h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Giờ vàng:</span>
                    <span className="font-medium text-amber-600">{formatCurrency(field.peakPrice)}/h</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full" onClick={() => openEdit(field)}>
                  <Edit className="w-3.5 h-3.5 mr-1" /> Chỉnh sửa
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Dialog open={!!editing} onOpenChange={() => setEditing(null)}>
        {editing && (
          <DialogContent>
            <DialogHeader><DialogTitle>Chỉnh sửa – {editing.name}</DialogTitle></DialogHeader>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <Label>Giá giờ thường (VNĐ/h)</Label>
                <Input type="number" value={editForm.basePrice} onChange={(e) => setEditForm({ ...editForm, basePrice: Number(e.target.value) })} />
              </div>
              <div className="space-y-1.5">
                <Label>Giá giờ vàng (VNĐ/h)</Label>
                <Input type="number" value={editForm.peakPrice} onChange={(e) => setEditForm({ ...editForm, peakPrice: Number(e.target.value) })} />
              </div>
              <div className="space-y-1.5">
                <Label>Trạng thái</Label>
                <Select value={editForm.status} onValueChange={(v) => { if (v !== null) setEditForm({ ...editForm, status: v as FieldStatus }); }}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {(["Trống", "Bảo trì"] as FieldStatus[]).map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setEditing(null)}>Hủy</Button>
              <Button className="bg-green-700 hover:bg-green-800" onClick={handleSaveEdit}>Lưu thay đổi</Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>

      <Dialog open={showAdd} onOpenChange={setShowAdd}>
        <DialogContent>
          <DialogHeader><DialogTitle>Thêm sân mới</DialogTitle></DialogHeader>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label>Tên sân</Label>
              <Input placeholder="VD: Sân G1" value={newField.name} onChange={(e) => setNewField({ ...newField, name: e.target.value })} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label>Loại sân</Label>
                <Select value={newField.type} onValueChange={(v) => { if (v !== null) setNewField({ ...newField, type: v as "5" | "7" | "11" }); }}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 người</SelectItem>
                    <SelectItem value="7">7 người</SelectItem>
                    <SelectItem value="11">11 người</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Cơ sở</Label>
                <Select value={newField.facilityId} onValueChange={(v) => { if (v !== null) setNewField({ ...newField, facilityId: v }); }}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {facilities.map((f) => <SelectItem key={f.id} value={String(f.id)}>{f.name.replace("LDH Football Hub – ", "")}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label>Giá giờ thường</Label>
                <Input type="number" placeholder="150000" value={newField.basePrice} onChange={(e) => setNewField({ ...newField, basePrice: e.target.value })} />
              </div>
              <div className="space-y-1.5">
                <Label>Giá giờ vàng</Label>
                <Input type="number" placeholder="220000" value={newField.peakPrice} onChange={(e) => setNewField({ ...newField, peakPrice: e.target.value })} />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAdd(false)}>Hủy</Button>
            <Button className="bg-green-700 hover:bg-green-800" onClick={handleAddField} disabled={!newField.name || !newField.basePrice}>Thêm sân</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
