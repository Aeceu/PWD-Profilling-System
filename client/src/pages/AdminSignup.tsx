import AdminSignupForm from "../components/forms/AdminSignupForm";

const AdminSignup = () => {
  return (
    <div className="w-3/4 h-[95%]  bg-white rounded-md flex items-end justify-between">
      <AdminSignupForm />
      <div className="w-full h-full flex items-center justify-center">
        <img
          src="/Signupbg.png"
          alt="Signupbg"
          className="bg-cover bg-center"
        />
      </div>
    </div>
  );
};
export default AdminSignup;
