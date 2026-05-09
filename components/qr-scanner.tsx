"use client";

import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { Camera, CameraOff } from "lucide-react";

interface Props {
  onScan: (data: string) => void;
  onError?: (message: string) => void;
}

const CONTAINER_ID = "qr-scanner-container";

export function QrScanner({ onScan, onError }: Props) {
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const [status, setStatus] = useState<"starting" | "active" | "error">("starting");
  const [errorMsg, setErrorMsg] = useState("");
  const calledRef = useRef(false);

  useEffect(() => {
    // Guard against StrictMode double-invoke
    if (calledRef.current) return;
    calledRef.current = true;

    const scanner = new Html5Qrcode(CONTAINER_ID);
    scannerRef.current = scanner;

    scanner
      .start(
        { facingMode: "environment" },
        { fps: 10, qrbox: { width: 240, height: 240 } },
        (decoded) => {
          onScan(decoded);
        },
        () => {
          // per-frame "not found" — ignore
        }
      )
      .then(() => setStatus("active"))
      .catch((err: unknown) => {
        const msg = err instanceof Error ? err.message : String(err);
        setStatus("error");
        setErrorMsg(msg);
        onError?.(msg);
      });

    return () => {
      if (scanner.isScanning) {
        scanner.stop().catch(() => {});
      }
    };
  }, []);   // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-3">
      {status === "starting" && (
        <div className="flex items-center justify-center gap-2 py-8 text-muted-foreground text-sm">
          <Camera className="w-5 h-5 animate-pulse" /> Đang khởi động camera...
        </div>
      )}

      {status === "error" && (
        <div className="flex flex-col items-center gap-2 py-8 text-red-600 text-sm text-center">
          <CameraOff className="w-8 h-8" />
          <p className="font-medium">Không thể truy cập camera</p>
          <p className="text-xs text-muted-foreground max-w-xs">{errorMsg}</p>
        </div>
      )}

      {/* html5-qrcode renders its UI inside this div */}
      <div id={CONTAINER_ID} className="w-full overflow-hidden rounded-lg" />

      {status === "active" && (
        <p className="text-xs text-center text-muted-foreground">
          Hướng camera vào mã QR trên màn hình khách hàng
        </p>
      )}
    </div>
  );
}
