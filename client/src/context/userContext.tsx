import { createContext, useState } from "react";
import { TAdmin } from "../types/admin";

type UserContextType = {
  admin: TAdmin | null;
  setAdmin: (admin: TAdmin | null) => void;
  token: string | null;
  setToken: (token: string | null) => void;
};

export const UserContext = createContext<UserContextType | null>(null);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [admin, setAdmin] = useState<TAdmin | null>(null);
  const [token, setToken] = useState<string | null>(null);

  return (
    <UserContext.Provider value={{ admin, setAdmin, setToken, token }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
