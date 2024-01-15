import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import UserSignup from "./pages/UserSignup";
import UserLogin from "./pages/UserLogin";
import AuthLayout from "./AuthLayout";
import AuthPage from "./pages/AuthPage";
import AdminLogin from "./pages/AdminLogin";
import AdminSignup from "./pages/AdminSignup";
import AdminPersistsLogin from "./lib/admin/AdminPersistsLogin";
import UserHome from "./pages/user/Userhome";
import Service from "./pages/user/Service";
import About from "./pages/user/About";
import Contact from "./pages/user/Contact";
import UserPersistsLogin from "./lib/user/UserPersistsLogin";
import UserProtectedRoute from "./lib/user/UserProtectedRoute";
import AdminProtectedRoute from "./lib/admin/AdminProtectedRoute";
import Profile from "./pages/user/Profile";
import Dashboard from "./pages/admin/Dashboard";

const App = () => {
  return (
    <Routes>
      {/* Protected User Page */}
      <Route element={<UserPersistsLogin />}>
        <Route element={<UserProtectedRoute allowedRoles={["User"]} />}>
          <Route path="/profile/:id" element={<Layout />}>
            <Route index element={<Profile />} />
          </Route>
        </Route>
      </Route>

      {/* Protected Admin Page */}
      <Route element={<AdminPersistsLogin />}>
        <Route
          element={
            <AdminProtectedRoute
              allowedRoles={["Administrative", "Employee"]}
            />
          }
        >
          <Route path="/admin/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Route>
      </Route>

      <Route element={<Layout />}>
        <Route path="/" element={<UserHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

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
