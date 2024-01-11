export type TAdmin = {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  username: string;
  password?: string;
  role: string;
  refreshToken: string | null | undefined;
};

export type TAdminSignup = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  username: string;
  password: string;
  role: string;
};
