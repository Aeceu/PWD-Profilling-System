import { createContext, useState } from "react";
import { TUser } from "@/types/user";

type UserContextType = {
  user: TUser | null;
  setUser: (user: TUser | null) => void;
  token: string | null;
  setToken: (token: string | null) => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  token: null,
  setToken: () => {},
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<TUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser, setToken, token }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
