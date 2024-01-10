import { Button, Select, SelectItem, SelectSection } from "@nextui-org/react";
import {
  ChevronLeftIcon,
  BellAlertIcon,
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  KeyIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { Input } from "@nextui-org/react";
import { genders } from "../../data/genders";
import { religions } from "../../data/religion";
import { civils } from "../../data/civil";
import { employments } from "../../data/employments";
import { useState } from "react";
import { bloods } from "../../data/bloods";
import {
  disabilityTypeNotVisible,
  disabilityTypeVisible,
} from "../../data/disabilityType";
import { assistiveDevices } from "../../data/assistiveDevices";
import { medications } from "../../data/medications";
import { relationships } from "../../data/relationships";
import { Link } from "react-router-dom";

const UserSignupForm = () => {
  const [employmentType, setEmploymentType] = useState("");
  const [disabilityType, setDisabilityType] = useState("");
  const [specificDevice, setSpecificDevice] = useState(false);
  const [specificMedicine, setSpecificMedicine] = useState(false);
  const [showPass, setShowPass] = useState(false);

  return (
    <form className="relative grid grid-cols-4 place-items-center gap-4 p-4  bg-white">
      <Link
        to="/auth/user/login"
        className="bg-red-500 text-white px-2 py-1 rounded-b-md  text-sm absolute top-0 left-5 flex items-center hover:scale-105 duration-200 transition-all cursor-pointer shadow-xl"
      >
        <ChevronLeftIcon className="w-5" /> Cancel
      </Link>
      <h1 className="mt-5 text-white bg-black col-span-4 text-center p-2 rounded-md w-full text-3xl font-bold">
        Register Form
      </h1>
      <div className="col-span-4 mt-4 w-[90%] h-2 rounded-full bg-foreground-400" />
      <h1 className="col-span-4 font-bold text-xl w-full">
        Profile Information
      </h1>
      <Input
        radius="sm"
        size="sm"
        label="Last name"
        className="text-xs"
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        radius="sm"
        size="sm"
        label="First name"
        className="text-xs"
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        radius="sm"
        size="sm"
        label="Last name"
        className="text-xs"
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        radius="sm"
        size="sm"
        label="Suffix"
        className="text-xs"
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        radius="sm"
        size="sm"
        type="number"
        label="Age"
        className="text-xs"
        placeholder=" "
      />
      <Input
        radius="sm"
        size="sm"
        type="date"
        label="Birthdate"
        className="text-xs"
        placeholder=" "
      />
      <Input
        radius="sm"
        size="sm"
        label="Place of birth"
        className="text-xs"
        placeholder=" "
      />
      <Select
        radius="sm"
        size="sm"
        label="Gender"
        placeholder="Select an gender"
        className="text-xs"
      >
        {genders.map((gender) => (
          <SelectItem key={gender.value} value={gender.value}>
            {gender.label}
          </SelectItem>
        ))}
      </Select>
      <Select
        radius="sm"
        size="sm"
        label="Religion"
        placeholder="Select an religion"
        className="text-xs"
      >
        {religions.map((religion) => (
          <SelectItem key={religion.value} value={religion.value}>
            {religion.label}
          </SelectItem>
        ))}
      </Select>
      <Input
        radius="sm"
        size="sm"
        label="Citizenship"
        className="text-xs"
        placeholder=" "
      />
      <Select
        radius="sm"
        size="sm"
        label="Civil Status"
        placeholder="Select your civil status"
        className="text-xs"
      >
        {civils.map((civil) => (
          <SelectItem key={civil.value} value={civil.value}>
            {civil.label}
          </SelectItem>
        ))}
      </Select>

      <div className="col-span-4 mt-4 w-full h-[1px] border-b border-black" />
      <h1 className="col-span-4 font-bold text-xl w-full">
        Contact Information
      </h1>
      <Input
        radius="sm"
        size="sm"
        label="Email"
        className="text-xs"
        startContent={<EnvelopeIcon className="w-4" />}
      />
      <Input
        type="number"
        radius="sm"
        size="sm"
        label="Mobile no."
        className="text-xs"
        startContent={<PhoneIcon className="w-4" />}
      />
      <Input
        radius="sm"
        size="sm"
        label="Landline no."
        className="text-xs"
        startContent={<PhoneIcon className="w-4" />}
      />
      <p className="text-red-500 text-xs flex items-center gap-2">
        <BellAlertIcon className="w-4 flex-none" />
        Kindly type 'NA' in boxes where there are no possible answer to the
        information being requested.
      </p>

      <div className="col-span-4 mt-4 w-full h-[1px] border-b border-black" />

      <h1 className="col-span-4 font-bold text-xl w-full">
        Home/Permanent Address
      </h1>
      <Input
        radius="sm"
        size="sm"
        label="Province"
        className="text-xs"
        placeholder=" "
      />
      <Input
        radius="sm"
        size="sm"
        label="City/Municipality"
        className="text-xs"
        placeholder=" "
      />
      <Input
        radius="sm"
        size="sm"
        label="District"
        className="text-xs"
        placeholder=" "
      />
      <Input
        radius="sm"
        size="sm"
        label="House no.,block,lot,building,etc"
        className="text-xs"
        placeholder=" "
      />
      <Input
        radius="sm"
        size="sm"
        label="Street address, village etc."
        className="text-xs"
        placeholder=" "
      />
      <Input
        radius="sm"
        size="sm"
        label="Baranggay"
        className="text-xs"
        placeholder=" "
      />
      <Input
        type="number"
        radius="sm"
        size="sm"
        label="zipconde"
        className="text-xs"
        placeholder=" "
      />

      <div className="col-span-4 mt-4 w-full h-[1px] border-b border-black" />

      <h1 className="col-span-1 font-bold text-xl w-full">
        Educational Attainment
      </h1>
      <p className="col-span-1 text-red-500 text-xs flex items-center gap-2">
        <BellAlertIcon className="w-4 flex-none" />
        Kindly type 'NA' in boxes where there are no possible answer to the
        information being requested.
      </p>
      <Input
        radius="sm"
        size="sm"
        label="Name of Elementary School"
        className="text-xs col-span-3"
        placeholder=" "
      />
      <Select
        radius="sm"
        size="sm"
        label="School Attainment"
        placeholder="Select your school attainment"
        className="text-xs"
      >
        <SelectItem key={1} value="Graduate">
          Graduate
        </SelectItem>
        <SelectItem key={2} value="Undergraduate">
          Undergraduate
        </SelectItem>
      </Select>
      <Input
        radius="sm"
        size="sm"
        label="Name of Junior High School"
        className="text-xs col-span-3"
        placeholder=" "
      />
      <Select
        radius="sm"
        size="sm"
        label="School Attainment"
        placeholder="Select your school attainment"
        className="text-xs"
      >
        <SelectItem key={1} value="Graduate">
          Graduate
        </SelectItem>
        <SelectItem key={2} value="Undergraduate">
          Undergraduate
        </SelectItem>
      </Select>
      <Input
        radius="sm"
        size="sm"
        label="Name of Senior High School"
        className="text-xs col-span-3"
        placeholder=" "
      />
      <Select
        radius="sm"
        size="sm"
        label="School Attainment"
        placeholder="Select your school attainment"
        className="text-xs"
      >
        <SelectItem key={1} value="Graduate">
          Graduate
        </SelectItem>
        <SelectItem key={2} value="Undergraduate">
          Undergraduate
        </SelectItem>
      </Select>
      <Input
        radius="sm"
        size="sm"
        label="Name of College University"
        className="text-xs col-span-3"
        placeholder=" "
      />
      <Select
        radius="sm"
        size="sm"
        label="School Attainment"
        placeholder="Select your school attainment"
        className="text-xs"
      >
        <SelectItem key={1} value="Graduate">
          Graduate
        </SelectItem>
        <SelectItem key={2} value="Undergraduate">
          Undergraduate
        </SelectItem>
      </Select>

      <div className="col-span-4 mt-4 w-full h-[1px] border-b border-black" />

      <h1 className="col-span-4 font-bold text-xl w-full">Occupation</h1>
      <div className="w-full col-span-4 grid grid-cols-4">
        <Select
          onChange={(e) => setEmploymentType(e.target.value)}
          radius="sm"
          size="sm"
          label="Employment Type"
          placeholder="Select your employment type"
          className="col-span-2"
        >
          {employments.map((employment) => (
            <SelectItem key={employment.value} value={employment.value}>
              {employment.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      {employmentType === "Employed" && (
        <>
          <Input
            radius="sm"
            size="sm"
            label="Occupation"
            className="text-xs "
            placeholder=" "
          />
          <Input
            radius="sm"
            size="sm"
            label="Months/Years of being employed"
            className="text-xs "
            placeholder=" "
          />
          <Input
            radius="sm"
            size="sm"
            label="1. Skills while being employed"
            className="text-xs "
            placeholder=" "
          />
          <Input
            radius="sm"
            size="sm"
            label="2. Skills while being employed"
            className="text-xs "
            placeholder=" "
          />
        </>
      )}
      {employmentType === "Unemployed" && (
        <>
          <Input
            radius="sm"
            size="sm"
            label="Occupation"
            className="text-xs "
            placeholder=" "
          />
          <Input
            radius="sm"
            size="sm"
            label="Months/Years of being unemployed"
            className="text-xs "
            placeholder=" "
          />
          <Input
            radius="sm"
            size="sm"
            label="1. Skills while being unemployed"
            className="text-xs "
            placeholder=" "
          />
          <Input
            radius="sm"
            size="sm"
            label="2. Skills while being unemployed"
            className="text-xs "
            placeholder=" "
          />
        </>
      )}

      <div className="col-span-4 mt-4 w-full h-[1px] border-b border-black" />

      <h1 className="col-span-4 font-bold text-xl w-full">
        Health Information
      </h1>
      <Select
        radius="sm"
        size="sm"
        label="Blood Type"
        placeholder="Select your blood type"
        className="text-xs"
      >
        {bloods.map((blood) => (
          <SelectItem key={blood.value} value={blood.value}>
            {blood.label}
          </SelectItem>
        ))}
      </Select>
      <Input
        type="number"
        radius="sm"
        size="sm"
        label="Height in CM"
        className="text-xs"
        placeholder=" "
      />
      <Input
        type="number"
        radius="sm"
        size="sm"
        label="Weight in KG"
        className="text-xs"
        placeholder=" "
      />
      <p className="col-span-1 text-red-500 text-xs flex items-center gap-2">
        <BellAlertIcon className="w-4 flex-none" />
        Kindly type '0' in boxes where there are no possible answer to the
        information being requested.
      </p>
      <Select
        onChange={(e) => setDisabilityType(e.target.value)}
        radius="sm"
        size="sm"
        label="Disability Visibility"
        placeholder="Select your disability visibility"
        className="text-xs"
      >
        <SelectItem key={1} value="Visible">
          Visible
        </SelectItem>
        <SelectItem key={2} value="Not Visible">
          Not Visible
        </SelectItem>
      </Select>

      <Select
        isDisabled={disabilityType ? false : true}
        radius="sm"
        size="sm"
        label="Disability Type"
        placeholder="Select your disability Type"
        className="text-xs"
      >
        {disabilityType === "Visible"
          ? disabilityTypeVisible.map((visible) => (
              <SelectItem key={visible.value} value={visible.value}>
                {visible.label}
              </SelectItem>
            ))
          : disabilityTypeNotVisible.map((disability) => (
              <SelectItem key={disability.value} value={disability.value}>
                {disability.label}
              </SelectItem>
            ))}
      </Select>

      <Select
        radius="sm"
        size="sm"
        label="What made you become disable?"
        className="text-xs"
        placeholder=" "
      >
        <SelectItem key={1} value="Inborn">
          Inborn
        </SelectItem>
        <SelectItem key={2} value="Sickness">
          Sickness
        </SelectItem>
        <SelectItem key={3} value="Accident">
          Accident
        </SelectItem>
      </Select>

      <Select
        radius="sm"
        size="sm"
        label="Health Status"
        className="text-xs"
        placeholder=" "
      >
        <SelectItem key={1} value="Good Condition">
          Good Condition
        </SelectItem>
        <SelectItem key={2} value="Require Assistance">
          Require Assistance
        </SelectItem>
        <SelectItem key={3} value="Confine to Bed">
          Confine to Bed
        </SelectItem>
        <SelectItem key={4} value="Undefined">
          Undefined
        </SelectItem>
      </Select>

      <Select
        onChange={(e) => {
          e.target.value === "Specify device used"
            ? setSpecificDevice(true)
            : setSpecificDevice(false);
        }}
        radius="sm"
        size="sm"
        label="Assistive Devices"
        placeholder=" "
        className="text-xs"
      >
        {assistiveDevices.map((category) => (
          <SelectSection
            key={category.label}
            showDivider
            title={category.label}
            className="font-bold "
          >
            {category.options.map((device) => (
              <SelectItem key={device.value}>{device.label}</SelectItem>
            ))}
          </SelectSection>
        ))}
      </Select>

      <Input
        isDisabled={!specificDevice}
        radius="sm"
        size="sm"
        label="Specific device used"
        className="text-xs"
        placeholder=" "
      />

      <Select
        onChange={(e) => {
          e.target.value === "Specify Medicine Used"
            ? setSpecificMedicine(true)
            : setSpecificMedicine(false);
        }}
        radius="sm"
        size="sm"
        label="Current Medicine used"
        placeholder=" "
        className="text-xs"
      >
        {medications.map((category) => (
          <SelectSection
            key={category.label}
            showDivider
            title={category.label}
            className="font-bold "
          >
            {category.options.map((medication) => (
              <SelectItem key={medication.value}>{medication.label}</SelectItem>
            ))}
          </SelectSection>
        ))}
      </Select>

      <Input
        isDisabled={!specificMedicine}
        radius="sm"
        size="sm"
        label="Specific device used"
        className="text-xs"
        placeholder=" "
      />
      <Input
        radius="sm"
        size="sm"
        label="Other Diseases"
        className="text-xs col-span-2"
        placeholder=" "
      />

      <div className="col-span-4 mt-4 w-full h-[1px] border-b border-black" />

      <h1 className="col-span-4 font-bold text-xl w-full">
        Person to contact incase of emergency
      </h1>
      <Input
        radius="sm"
        size="sm"
        label="Last name"
        className="text-xs"
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        radius="sm"
        size="sm"
        label="First name"
        className="text-xs"
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        radius="sm"
        size="sm"
        label="Last name"
        className="text-xs"
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        radius="sm"
        size="sm"
        label="Suffix"
        className="text-xs"
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        radius="sm"
        size="sm"
        type="number"
        label="Age"
        className="text-xs"
        placeholder=" "
      />
      <Select
        radius="sm"
        size="sm"
        label="Gender"
        placeholder=" "
        className="text-xs"
      >
        {genders.map((gender) => (
          <SelectItem key={gender.value} value={gender.value}>
            {gender.label}
          </SelectItem>
        ))}
      </Select>
      <Select
        radius="sm"
        size="sm"
        label="Relationship"
        placeholder=""
        className="text-xs"
      >
        {relationships.map((relationship) => (
          <SelectItem key={relationship.value} value={relationship.value}>
            {relationship.label}
          </SelectItem>
        ))}
      </Select>
      <Select
        radius="sm"
        size="sm"
        label="Religion"
        placeholder=" "
        className="text-xs"
      >
        {religions.map((religion) => (
          <SelectItem key={religion.value} value={religion.value}>
            {religion.label}
          </SelectItem>
        ))}
      </Select>

      <div className="col-span-4 mt-4 w-full h-[1px] border-b border-black" />

      <h1 className="col-span-4 font-bold text-xl w-full">
        Emergency Contact Information
      </h1>
      <Input
        radius="sm"
        size="sm"
        label="Email"
        className="text-xs"
        startContent={<EnvelopeIcon className="w-4" />}
      />
      <Input
        type="number"
        radius="sm"
        size="sm"
        label="Mobile no."
        className="text-xs"
        startContent={<PhoneIcon className="w-4" />}
      />
      <Input
        radius="sm"
        size="sm"
        label="Landline no."
        className="text-xs"
        startContent={<PhoneIcon className="w-4" />}
      />
      <p className="text-red-500 text-xs flex items-center gap-2">
        <BellAlertIcon className="w-4 flex-none" />
        Kindly type 'NA' in boxes where there are no possible answer to the
        information being requested.
      </p>

      <div className="col-span-4 mt-4 w-full h-[1px] border-b border-black" />
      <h1 className="col-span-4 font-bold text-xl w-full">
        Home/Permanent Address
      </h1>
      <Input
        radius="sm"
        size="sm"
        label="Province"
        className="text-xs"
        placeholder=" "
      />
      <Input
        radius="sm"
        size="sm"
        label="City/Municipality"
        className="text-xs"
        placeholder=" "
      />
      <Input
        radius="sm"
        size="sm"
        label="District"
        className="text-xs"
        placeholder=" "
      />
      <Input
        radius="sm"
        size="sm"
        label="House no.,block,lot,building,etc"
        className="text-xs"
        placeholder=" "
      />
      <Input
        radius="sm"
        size="sm"
        label="Street address, village etc."
        className="text-xs"
        placeholder=" "
      />
      <Input
        radius="sm"
        size="sm"
        label="Baranggay"
        className="text-xs"
        placeholder=" "
      />
      <Input
        type="number"
        radius="sm"
        size="sm"
        label="zipconde"
        className="text-xs"
        placeholder=" "
      />

      <div className="col-span-4 mt-4 w-[90%] h-2 rounded-full bg-foreground-400" />
      <h1 className="col-span-4 font-bold text-xl">
        Before submitting this form, please create a password for your Account
      </h1>
      <i className="col-span-2 w-full text-xs text-red-500">
        Note* you need your EMAIl to login your account
      </i>
      <span className="my-2 w-full col-span-4 flex items-center justify-center gap-2">
        <Input
          type={showPass ? "text" : "password"}
          radius="sm"
          size="sm"
          label="Create Password"
          className="text-xs w-1/4"
          startContent={<KeyIcon className="w-4" />}
          endContent={
            showPass ? (
              <EyeIcon
                className="w-4 cursor-pointer"
                onClick={() => setShowPass((prev) => !prev)}
              />
            ) : (
              <EyeSlashIcon
                className="w-4 cursor-pointer"
                onClick={() => setShowPass((prev) => !prev)}
              />
            )
          }
        />
        <Input
          type={showPass ? "text" : "password"}
          radius="sm"
          size="sm"
          label="Confirm Password"
          className="text-xs w-1/4"
          startContent={<KeyIcon className="w-4" />}
          endContent={
            showPass ? (
              <EyeIcon
                className="w-4 cursor-pointer"
                onClick={() => setShowPass((prev) => !prev)}
              />
            ) : (
              <EyeSlashIcon
                className="w-4 cursor-pointer"
                onClick={() => setShowPass((prev) => !prev)}
              />
            )
          }
        />
      </span>

      <Button
        type="submit"
        radius="sm"
        className="col-span-4 w-full text-white bg-blue-500"
      >
        Register
      </Button>
    </form>
  );
};
export default UserSignupForm;
