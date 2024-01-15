import { createContext, useState } from "react";
import { TAdmin } from "../types/admin";

type AdminContextType = {
  admin: TAdmin | null;
  setAdmin: (admin: TAdmin | null) => void;
  token: string | null;
  setToken: (token: string | null) => void;
};

export const AdminContext = createContext<AdminContextType>({
  admin: null,
  token: null,
  setAdmin: () => {},
  setToken: () => {},
});

const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const [admin, setAdmin] = useState<TAdmin | null>(null);
  const [token, setToken] = useState<string | null>(null);

  return (
    <AdminContext.Provider value={{ admin, setAdmin, setToken, token }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
