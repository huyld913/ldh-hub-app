"use client";

import { useState } from "react";
import { services, Service, facilities, formatCurrency } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { AlertTriangle, Edit, Package, Plus, Trash2 } from "lucide-react";

export default function ManagerServicesPage() {
  const [svcList, setSvcList] = useState<Service[]>(services);
  const [facilityFilter, setFacilityFilter] = useState("all");
  const [editing, setEditing] = useState<Service | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState({ name: "", price: 0, stock: 0 });
  const [newSvc, setNewSvc] = useState({ name: "", category: "Nước uống" as Service["category"], price: "", stock: "", unit: "", facilityId: "1" });

  const filtered = svcList.filter((s) => facilityFilter === "all" || s.facilityId === Number(facilityFilter));
  const lowStock = filtered.filter((s) => s.stock < 10);

  function openEdit(s: Service) {
    setEditing(s);
    setEditForm({ name: s.name, price: s.price, stock: s.stock });
  }

  function handleSaveEdit() {
    if (!editing) return;
    setSvcList((prev) => prev.map((s) => s.id === editing.id ? { ...s, ...editForm } : s));
    setEditing(null);
  }

  function handleAdd() {
    const id = Math.max(...svcList.map((s) => s.id)) + 1;
    setSvcList((prev) => [...prev, {
      id, facilityId: Number(newSvc.facilityId), name: newSvc.name, category: newSvc.category,
      price: Number(newSvc.price), stock: Number(newSvc.stock), unit: newSvc.unit,
    }]);
    setShowAdd(false);
    setNewSvc({ name: "", category: "Nước uống", price: "", stock: "", unit: "", facilityId: "1" });
  }

  function handleDelete() {
    if (deleteId) { setSvcList((prev) => prev.filter((s) => s.id !== deleteId)); setDeleteId(null); }
  }

  const categoryColor: Record<Service["category"], string> = {
    "Nước uống": "bg-blue-100 text-blue-700",
    "Thức ăn": "bg-orange-100 text-orange-700",
    "Thiết bị": "bg-purple-100 text-purple-700",
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">Quản lý Dịch vụ</h1>
          <p className="text-muted-foreground text-sm mt-1">Hàng hóa và dịch vụ phụ trợ tại quầy</p>
        </div>
        <Button className="bg-green-700 hover:bg-green-800" onClick={() => setShowAdd(true)}>
          <Plus className="w-4 h-4 mr-2" /> Thêm dịch vụ
        </Button>
      </div>

      {lowStock.length > 0 && (
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 flex items-center gap-3">
          <AlertTriangle className="w-4 h-4 text-orange-500 shrink-0" />
          <p className="text-sm text-orange-700"><strong>{lowStock.length} mục</strong> sắp hết hoặc hết hàng: {lowStock.map((s) => s.name).join(", ")}</p>
        </div>
      )}

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
        {filtered.map((svc) => {
          const facility = facilities.find((f) => f.id === svc.facilityId);
          return (
            <Card key={svc.id} className="hover:shadow-sm transition-shadow">
              <CardContent className="pt-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">
                      <Package className="w-4 h-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{svc.name}</p>
                      <p className="text-xs text-muted-foreground">{facility?.name.replace("LDH Football Hub – ", "")}</p>
                    </div>
                  </div>
                  <Badge className={`text-xs shrink-0 ${categoryColor[svc.category]}`}>{svc.category}</Badge>
                </div>
                <div className="space-y-1 text-sm mb-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Giá:</span>
                    <span className="font-semibold">{formatCurrency(svc.price)}/{svc.unit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tồn kho:</span>
                    <span className={`font-medium ${svc.stock === 0 ? "text-red-600" : svc.stock < 10 ? "text-orange-500" : "text-green-600"}`}>
                      {svc.stock} {svc.unit}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" onClick={() => openEdit(svc)}>
                    <Edit className="w-3.5 h-3.5 mr-1" /> Sửa
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50" onClick={() => setDeleteId(svc.id)}>
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Dialog open={!!editing} onOpenChange={() => setEditing(null)}>
        {editing && (
          <DialogContent>
            <DialogHeader><DialogTitle>Chỉnh sửa – {editing.name}</DialogTitle></DialogHeader>
            <div className="space-y-3">
              <div className="space-y-1.5"><Label>Tên</Label><Input value={editForm.name} onChange={(e) => setEditForm({ ...editForm, name: e.target.value })} /></div>
              <div className="space-y-1.5"><Label>Đơn giá (VNĐ)</Label><Input type="number" value={editForm.price} onChange={(e) => setEditForm({ ...editForm, price: Number(e.target.value) })} /></div>
              <div className="space-y-1.5"><Label>Tồn kho ({editing.unit})</Label><Input type="number" value={editForm.stock} onChange={(e) => setEditForm({ ...editForm, stock: Number(e.target.value) })} /></div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setEditing(null)}>Hủy</Button>
              <Button className="bg-green-700 hover:bg-green-800" onClick={handleSaveEdit}>Lưu</Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>

      <Dialog open={showAdd} onOpenChange={setShowAdd}>
        <DialogContent>
          <DialogHeader><DialogTitle>Thêm dịch vụ / hàng hóa</DialogTitle></DialogHeader>
          <div className="space-y-3">
            <div className="space-y-1.5"><Label>Tên</Label><Input placeholder="VD: Nước suối 500ml" value={newSvc.name} onChange={(e) => setNewSvc({ ...newSvc, name: e.target.value })} /></div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label>Danh mục</Label>
                <Select value={newSvc.category} onValueChange={(v) => { if (v !== null) setNewSvc({ ...newSvc, category: v as Service["category"] }); }}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Nước uống">Nước uống</SelectItem>
                    <SelectItem value="Thức ăn">Thức ăn</SelectItem>
                    <SelectItem value="Thiết bị">Thiết bị</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Cơ sở</Label>
                <Select value={newSvc.facilityId} onValueChange={(v) => { if (v !== null) setNewSvc({ ...newSvc, facilityId: v }); }}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {facilities.map((f) => <SelectItem key={f.id} value={String(f.id)}>{f.name.replace("LDH Football Hub – ", "")}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-1.5"><Label>Đơn giá</Label><Input type="number" value={newSvc.price} onChange={(e) => setNewSvc({ ...newSvc, price: e.target.value })} /></div>
              <div className="space-y-1.5"><Label>Tồn kho</Label><Input type="number" value={newSvc.stock} onChange={(e) => setNewSvc({ ...newSvc, stock: e.target.value })} /></div>
              <div className="space-y-1.5"><Label>Đơn vị</Label><Input placeholder="chai" value={newSvc.unit} onChange={(e) => setNewSvc({ ...newSvc, unit: e.target.value })} /></div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAdd(false)}>Hủy</Button>
            <Button className="bg-green-700 hover:bg-green-800" onClick={handleAdd} disabled={!newSvc.name || !newSvc.price}>Thêm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>Xóa dịch vụ</DialogTitle></DialogHeader>
          <p className="text-sm text-muted-foreground">Bạn có chắc muốn xóa dịch vụ này không?</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteId(null)}>Hủy</Button>
            <Button variant="destructive" onClick={handleDelete}>Xóa</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
