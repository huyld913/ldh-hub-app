"use client"

import { useEffect } from "react"
import { CheckCircle2, XCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"

export interface NotificationState {
  type: "success" | "error"
  message: string
}

interface NotificationToastProps extends NotificationState {
  onClose: () => void
  duration?: number
}

export function NotificationToast({ type, message, onClose, duration = 3000 }: NotificationToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [onClose, duration])

  return (
    <div
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-[200] flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border min-w-72 max-w-sm",
        "animate-in fade-in slide-in-from-top-2 duration-200",
        type === "success"
          ? "bg-green-50 border-green-200 text-green-800"
          : "bg-red-50 border-red-200 text-red-800"
      )}
    >
      {type === "success"
        ? <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
        : <XCircle className="w-5 h-5 text-red-500 shrink-0" />
      }
      <p className="text-sm font-medium flex-1">{message}</p>
      <button onClick={onClose} className="opacity-50 hover:opacity-100 shrink-0 transition-opacity">
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
