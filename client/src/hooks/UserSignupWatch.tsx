import { Dispatch, SetStateAction, useEffect } from "react";
import { UseFormWatch } from "react-hook-form";
import { TUserSignup } from "../types/user";

type TProps = {
  watch: UseFormWatch<TUserSignup>;
  setEmploymentType: Dispatch<SetStateAction<string>>;
  setDisabilityType: Dispatch<SetStateAction<string>>;
  setSpecificDevice: Dispatch<SetStateAction<boolean>>;
  setSpecificMedicine: Dispatch<SetStateAction<boolean>>;
};

const UserSignupWatch = ({
  setEmploymentType,
  watch,
  setDisabilityType,
  setSpecificDevice,
  setSpecificMedicine,
}: TProps) => {
  useEffect(() => {
    if (watch().employment === "Employed") {
      setEmploymentType("Employed");
    } else if (watch().employment === "Unemployed") {
      setEmploymentType("Unemployed");
    } else if (watch().employment === "Student") {
      setEmploymentType("Student");
    } else {
      setEmploymentType("");
    }
  }, [watch().employment]);

  useEffect(() => {
    if (watch().disability === "Visible") {
      setDisabilityType("Visible");
    } else if (watch().disability === "Not Visible") {
      setDisabilityType("Not Visible");
    } else {
      setDisabilityType("");
    }
  }, [watch().disability]);

  useEffect(() => {
    if (watch().device === "Specify device used") {
      setSpecificDevice(true);
    } else {
      setSpecificDevice(false);
    }
  }, [watch().device]);

  useEffect(() => {
    if (watch().medicine === "Specify Medicine Used") {
      setSpecificMedicine(true);
    } else {
      setSpecificMedicine(false);
    }
  }, [watch().medicine]);
};
export default UserSignupWatch;
