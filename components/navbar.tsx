"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Trophy, LogOut, User } from "lucide-react";

interface NavLink { href: string; label: string }

export default function Navbar({ links }: { links: NavLink[] }) {
  const { currentUser, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  function handleLogout() {
    logout();
    router.replace("/login");
  }

  const initials = currentUser?.name.split(" ").map((w) => w[0]).slice(-2).join("").toUpperCase() ?? "?";

  return (
    <nav className="bg-green-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg shrink-0">
            <Trophy className="w-5 h-5" />
            <span className="hidden sm:inline">LDH Football Hub</span>
          </Link>
          <div className="flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  pathname === l.href ? "bg-green-600 text-white" : "text-green-100 hover:bg-green-700"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 hover:opacity-80 transition-opacity outline-none">
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-green-600 text-white text-xs">{initials}</AvatarFallback>
            </Avatar>
            <span className="hidden sm:inline text-sm font-medium text-green-100">{currentUser?.name}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel className="font-normal">
              <div className="text-sm font-medium">{currentUser?.name}</div>
              <div className="text-xs text-muted-foreground">{currentUser?.email}</div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {currentUser?.role === "customer" && (
              <DropdownMenuItem onClick={() => router.push("/customer/profile")} className="cursor-pointer">
                <User className="w-4 h-4 mr-2" /> Tài khoản của tôi
              </DropdownMenuItem>
            )}
            <DropdownMenuItem onClick={handleLogout} variant="destructive" className="cursor-pointer">
              <LogOut className="w-4 h-4 mr-2" /> Đăng xuất
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
