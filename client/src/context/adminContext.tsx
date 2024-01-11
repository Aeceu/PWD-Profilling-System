import { createContext, useState } from "react";
import { TAdmin } from "../types/admin";

type AdminContextType = {
  admin: TAdmin | null;
  updateAdmin: (admin: TAdmin | null) => void;
  token: string | null;
  updateToken: (token: string | null) => void;
};

export const AdminContext = createContext<AdminContextType | null>(null);

const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const [admin, setAdmin] = useState<TAdmin | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const updateAdmin = (admin: TAdmin | null) => {
    setAdmin(admin);
  };

  const updateToken = (token: string | null) => {
    setToken(token);
  };

  return (
    <AdminContext.Provider value={{ admin, updateAdmin, updateToken, token }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
