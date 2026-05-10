"use client";

import { useState } from "react";
import { services, Service, formatCurrency, STATUS_COLORS } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, Package, Plus } from "lucide-react";
import { NotificationToast, NotificationState } from "@/components/ui/notification-toast";

const FACILITY_ID = 1; // Staff assigned to Quận 7

export default function InventoryPage() {
  const [inventory, setInventory] = useState<Service[]>(services);
  const [editing, setEditing] = useState<Service | null>(null);
  const [addQty, setAddQty] = useState(0);
  const [showAdd, setShowAdd] = useState(false);
  const [notification, setNotification] = useState<NotificationState | null>(null);

  const myItems = inventory.filter((s) => s.facilityId === FACILITY_ID);
  const lowStock = myItems.filter((s) => s.stock < 10);

  function handleAddStock() {
    if (!editing || addQty <= 0) return;
    const itemName = editing.name;
    setInventory((prev) => prev.map((s) => s.id === editing.id ? { ...s, stock: s.stock + addQty } : s));
    setEditing(null);
    setAddQty(0);
    setShowAdd(false);
    setNotification({ type: "success", message: `Đã nhập thêm ${addQty} ${editing.unit} ${itemName} thành công!` });
  }

  function getStockLevel(s: Service): { color: string; label: string } {
    if (s.stock === 0) return { color: "text-red-600", label: "Hết hàng" };
    if (s.stock < 10) return { color: "text-orange-500", label: "Sắp hết" };
    return { color: "text-green-600", label: "Còn hàng" };
  }

  return (
    <div className="space-y-6">
      {notification && <NotificationToast {...notification} onClose={() => setNotification(null)} />}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">Quản lý Kho vật tư</h1>
          <p className="text-muted-foreground text-sm mt-1">LDH Football Hub – Quận 7</p>
        </div>
      </div>

      {/* Low stock alert */}
      {lowStock.length > 0 && (
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-orange-800 text-sm">Cảnh báo tồn kho thấp</p>
            <p className="text-sm text-orange-700 mt-0.5">
              {lowStock.map((s) => s.name).join(", ")} đang ở mức thấp. Vui lòng nhập hàng sớm.
            </p>
          </div>
        </div>
      )}

      {/* Inventory grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {myItems.map((item) => {
          const maxStock = 150;
          const pct = Math.min(100, (item.stock / maxStock) * 100);
          const level = getStockLevel(item);
          return (
            <Card key={item.id} className="hover:shadow-sm transition-shadow">
              <CardContent className="pt-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">
                      <Package className="w-4 h-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm leading-tight">{item.name}</p>
                      <Badge variant="outline" className="text-xs mt-0.5">{item.category}</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className={`font-bold ${level.color}`}>{item.stock} {item.unit}</span>
                    <span className={`text-xs ${level.color}`}>{level.label}</span>
                  </div>
                  <Progress value={pct} className="h-1.5" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Đơn giá: {formatCurrency(item.price)}</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-3 text-green-700 border-green-200 hover:bg-green-50"
                  onClick={() => { setEditing(item); setAddQty(0); setShowAdd(true); }}
                >
                  <Plus className="w-3.5 h-3.5 mr-1" /> Nhập thêm hàng
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Add stock dialog */}
      <Dialog open={showAdd} onOpenChange={(o) => { if (!o) { setShowAdd(false); setEditing(null); } }}>
        {editing && (
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nhập thêm hàng</DialogTitle>
            </DialogHeader>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-3 text-sm">
                <p className="font-medium">{editing.name}</p>
                <p className="text-muted-foreground text-xs">Tồn kho hiện tại: <strong>{editing.stock} {editing.unit}</strong></p>
              </div>
              <div className="space-y-1.5">
                <p className="text-sm font-medium">Số lượng nhập thêm ({editing.unit})</p>
                <Input
                  type="number"
                  min={1}
                  value={addQty || ""}
                  onChange={(e) => setAddQty(Math.max(0, Number(e.target.value)))}
                  placeholder="Nhập số lượng..."
                />
              </div>
              {addQty > 0 && (
                <p className="text-sm text-muted-foreground">
                  Sau nhập: <strong>{editing.stock + addQty} {editing.unit}</strong>
                </p>
              )}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => { setShowAdd(false); setEditing(null); }}>Hủy</Button>
              <Button className="bg-green-700 hover:bg-green-800" onClick={handleAddStock} disabled={addQty <= 0}>
                Xác nhận nhập hàng
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
