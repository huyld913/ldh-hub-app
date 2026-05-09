"use client";

import { useState } from "react";
import { promotions, Promotion, formatCurrency, STATUS_COLORS } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { CalendarDays, Percent, Plus, Tag, Trash2 } from "lucide-react";

export default function ManagerPromotionsPage() {
  const [promoList, setPromoList] = useState<Promotion[]>(promotions);
  const [showAdd, setShowAdd] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [form, setForm] = useState({
    code: "", discountPercent: "", maxDiscount: "", minOrder: "", usesLeft: "", startDate: "", endDate: "",
  });

  function handleAdd() {
    const id = Math.max(...promoList.map((p) => p.id)) + 1;
    setPromoList((prev) => [...prev, {
      id,
      code: form.code.toUpperCase(),
      discountPercent: Number(form.discountPercent),
      maxDiscount: Number(form.maxDiscount),
      minOrder: Number(form.minOrder),
      usesLeft: Number(form.usesLeft),
      startDate: form.startDate,
      endDate: form.endDate,
      status: "Đang hoạt động",
    }]);
    setShowAdd(false);
    setForm({ code: "", discountPercent: "", maxDiscount: "", minOrder: "", usesLeft: "", startDate: "", endDate: "" });
  }

  function handleDelete() {
    if (deleteId) { setPromoList((prev) => prev.filter((p) => p.id !== deleteId)); setDeleteId(null); }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">Quản lý Khuyến mãi</h1>
          <p className="text-muted-foreground text-sm mt-1">Tạo và quản lý mã giảm giá</p>
        </div>
        <Button className="bg-green-700 hover:bg-green-800" onClick={() => setShowAdd(true)}>
          <Plus className="w-4 h-4 mr-2" /> Tạo mã mới
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Đang hoạt động", count: promoList.filter((p) => p.status === "Đang hoạt động").length, color: "text-green-600" },
          { label: "Hết lượt", count: promoList.filter((p) => p.status === "Hết lượt").length, color: "text-red-600" },
          { label: "Hết hạn", count: promoList.filter((p) => p.status === "Hết hạn").length, color: "text-gray-500" },
        ].map((s) => (
          <Card key={s.label}>
            <CardContent className="pt-4 pb-3 text-center">
              <p className={`text-3xl font-bold ${s.color}`}>{s.count}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Promo list */}
      <div className="space-y-3">
        {promoList.map((p) => (
          <Card key={p.id} className="hover:shadow-sm transition-shadow">
            <CardContent className="py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                  <Tag className="w-5 h-5 text-green-700" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-bold font-mono text-lg">{p.code}</p>
                    <Badge className={`text-xs ${STATUS_COLORS[p.status]}`}>{p.status}</Badge>
                  </div>
                  <div className="flex items-center gap-4 mt-1 text-sm flex-wrap">
                    <span className="flex items-center gap-1 text-green-700 font-medium">
                      <Percent className="w-3.5 h-3.5" /> Giảm {p.discountPercent}% (tối đa {formatCurrency(p.maxDiscount)})
                    </span>
                    <span className="text-muted-foreground text-xs">Đơn tối thiểu: {formatCurrency(p.minOrder)}</span>
                  </div>
                  <div className="flex items-center gap-4 mt-0.5 text-xs text-muted-foreground flex-wrap">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="w-3 h-3" />
                      {p.startDate.split("-").reverse().join("/")} → {p.endDate.split("-").reverse().join("/")}
                    </span>
                    <span>Còn lại: <strong>{p.usesLeft} lượt</strong></span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50" onClick={() => setDeleteId(p.id)}>
                  <Trash2 className="w-3.5 h-3.5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add dialog */}
      <Dialog open={showAdd} onOpenChange={setShowAdd}>
        <DialogContent>
          <DialogHeader><DialogTitle>Tạo mã khuyến mãi mới</DialogTitle></DialogHeader>
          <div className="space-y-3">
            <div className="space-y-1.5">
              <Label>Mã khuyến mãi</Label>
              <Input placeholder="VD: SUMMER30" value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value })} className="font-mono uppercase" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label>Phần trăm giảm (%)</Label>
                <Input type="number" min={1} max={100} placeholder="VD: 20" value={form.discountPercent} onChange={(e) => setForm({ ...form, discountPercent: e.target.value })} />
              </div>
              <div className="space-y-1.5">
                <Label>Giảm tối đa (VNĐ)</Label>
                <Input type="number" placeholder="VD: 200000" value={form.maxDiscount} onChange={(e) => setForm({ ...form, maxDiscount: e.target.value })} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label>Đơn tối thiểu (VNĐ)</Label>
                <Input type="number" placeholder="VD: 300000" value={form.minOrder} onChange={(e) => setForm({ ...form, minOrder: e.target.value })} />
              </div>
              <div className="space-y-1.5">
                <Label>Số lượt sử dụng</Label>
                <Input type="number" placeholder="VD: 100" value={form.usesLeft} onChange={(e) => setForm({ ...form, usesLeft: e.target.value })} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label>Ngày bắt đầu</Label>
                <Input type="date" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} />
              </div>
              <div className="space-y-1.5">
                <Label>Ngày kết thúc</Label>
                <Input type="date" value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAdd(false)}>Hủy</Button>
            <Button className="bg-green-700 hover:bg-green-800" onClick={handleAdd} disabled={!form.code || !form.discountPercent}>Tạo mã</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete confirm */}
      <Dialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>Xóa mã khuyến mãi</DialogTitle></DialogHeader>
          <p className="text-muted-foreground text-sm">Bạn có chắc muốn xóa mã này? Hành động này không thể hoàn tác.</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteId(null)}>Hủy</Button>
            <Button variant="destructive" onClick={handleDelete}>Xóa</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
