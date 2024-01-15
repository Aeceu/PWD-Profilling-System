import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  return (
    <div className="w-full h-screen flex flex-col items-center">
      Profile: {id}
    </div>
  );
};
export default Profile;
