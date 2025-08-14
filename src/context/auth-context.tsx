"use client";

import { User } from "@/payload-types";
import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  user: User | null;
  setUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => { },
});

export const AuthProvider = ({
  children,
  initialUser,
}: {
  children: ReactNode;
  initialUser: User | null;
}) => {
  const [user, setUser] = useState<User | null>(initialUser);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
