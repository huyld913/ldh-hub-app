"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User, users } from "./mock-data";

const SESSION_KEY = "ldh_session";
const REGISTERED_KEY = "ldh_registered_users";

interface RegisterResult {
  success: boolean;
  error?: string;
}

interface AuthContextType {
  currentUser: User | null;
  isLoading: boolean;
  login: (emailOrPhone: string, password: string) => User | null;
  logout: () => void;
  register: (name: string, phone: string, email: string, password: string) => RegisterResult;
}

const AuthContext = createContext<AuthContextType | null>(null);

function getRegisteredUsers(): User[] {
  try {
    return JSON.parse(localStorage.getItem(REGISTERED_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(SESSION_KEY);
      if (saved) setCurrentUser(JSON.parse(saved));
    } catch {
      localStorage.removeItem(SESSION_KEY);
    }
    setIsLoading(false);
  }, []);

  function login(emailOrPhone: string, password: string): User | null {
    const allUsers = [...users, ...getRegisteredUsers()];
    const user = allUsers.find(
      u => (u.email === emailOrPhone || u.phone === emailOrPhone) && u.password === password
    ) ?? null;
    if (user) {
      setCurrentUser(user);
      localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    }
    return user;
  }

  function logout() {
    setCurrentUser(null);
    localStorage.removeItem(SESSION_KEY);
  }

  function register(name: string, phone: string, email: string, password: string): RegisterResult {
    const allUsers = [...users, ...getRegisteredUsers()];
    if (allUsers.some(u => u.email === email))
      return { success: false, error: "Email này đã được đăng ký." };
    if (allUsers.some(u => u.phone === phone))
      return { success: false, error: "Số điện thoại này đã được đăng ký." };

    const newUser: User = {
      id: Date.now(),
      name,
      email,
      phone,
      password,
      role: "customer",
      points: 0,
      createdAt: new Date().toISOString().split("T")[0],
    };

    const registered = getRegisteredUsers();
    registered.push(newUser);
    localStorage.setItem(REGISTERED_KEY, JSON.stringify(registered));

    setCurrentUser(newUser);
    localStorage.setItem(SESSION_KEY, JSON.stringify(newUser));
    return { success: true };
  }

  return (
    <AuthContext.Provider value={{ currentUser, isLoading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
