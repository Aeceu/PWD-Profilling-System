import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import UserSignup from "./pages/UserSignup";
import UserLogin from "./pages/UserLogin";
import AuthLayout from "./AuthLayout";
import AuthPage from "./pages/AuthPage";
import AdminLogin from "./pages/AdminLogin";
import AdminSignup from "./pages/AdminSignup";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}></Route>

      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<AuthPage />} />
        <Route path="user/login" element={<UserLogin />} />
        <Route path="user/signup" element={<UserSignup />} />
        <Route path="admin/login" element={<AdminLogin />} />
        <Route path="admin/signup" element={<AdminSignup />} />
      </Route>
    </Routes>
  );
};
export default App;
