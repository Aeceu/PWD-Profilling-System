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
import { SubmitHandler, useForm } from "react-hook-form";
import { TUserSignup } from "../../types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../lib/userSchema";
import UserSignupWatch from "../../hooks/UserSignupWatch";

const UserSignupForm = () => {
  const [employmentType, setEmploymentType] = useState("");
  const [disabilityType, setDisabilityType] = useState("");
  const [specificDevice, setSpecificDevice] = useState(false);
  const [specificMedicine, setSpecificMedicine] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TUserSignup>({ resolver: zodResolver(userSchema) });

  UserSignupWatch({
    watch,
    setDisabilityType,
    setEmploymentType,
    setSpecificDevice,
    setSpecificMedicine,
  });

  const onSubmit: SubmitHandler<TUserSignup> = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative grid grid-cols-4 place-items-center gap-4 p-4  bg-white"
    >
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
        variant="faded"
        isInvalid={!!errors.lastName}
        errorMessage={errors.lastName?.message}
        {...register("lastName")}
        radius="sm"
        size="sm"
        label="Last name"
        className="text-xs"
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        variant="faded"
        isInvalid={!!errors.firstName}
        errorMessage={errors.firstName?.message}
        {...register("firstName")}
        radius="sm"
        size="sm"
        label="First name"
        className="text-xs"
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        variant="faded"
        isInvalid={!!errors.middleName}
        errorMessage={errors.middleName?.message}
        {...register("middleName")}
        radius="sm"
        size="sm"
        label="Middle name"
        className="text-xs"
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        variant="faded"
        {...register("suffix")}
        radius="sm"
        size="sm"
        label="Suffix"
        className="text-xs"
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        variant="faded"
        isInvalid={!!errors.age}
        errorMessage={errors.age?.message}
        {...register("age")}
        radius="sm"
        size="sm"
        type="number"
        label="Age"
        className="text-xs"
        placeholder=" "
      />
      <Input
        variant="faded"
        isInvalid={!!errors.birthdate}
        errorMessage={errors.birthdate?.message}
        {...register("birthdate")}
        radius="sm"
        size="sm"
        type="date"
        label="Birthdate"
        className="text-xs"
        placeholder=" "
      />
      <Input
        variant="faded"
        isInvalid={!!errors.birthplace}
        errorMessage={errors.birthplace?.message}
        {...register("birthplace")}
        radius="sm"
        size="sm"
        label="Place of birth"
        className="text-xs"
        placeholder=" "
      />
      <Select
        variant="faded"
        isInvalid={!!errors.gender}
        errorMessage={errors.gender?.message}
        {...register("gender")}
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
        variant="faded"
        isInvalid={!!errors.religion}
        errorMessage={errors.religion?.message}
        {...register("religion")}
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
      <Input
        variant="faded"
        isInvalid={!!errors.citizenship}
        errorMessage={errors.citizenship?.message}
        {...register("citizenship")}
        radius="sm"
        size="sm"
        label="Citizenship"
        className="text-xs"
        placeholder=" "
      />
      <Select
        variant="faded"
        isInvalid={!!errors.civil}
        errorMessage={errors.civil?.message}
        {...register("civil")}
        radius="sm"
        size="sm"
        label="Civil Status"
        placeholder=" "
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
        variant="faded"
        isInvalid={!!errors.email}
        errorMessage={errors.email?.message}
        {...register("email")}
        radius="sm"
        size="sm"
        label="Email"
        className="text-xs"
        startContent={<EnvelopeIcon className="w-4" />}
      />
      <Input
        variant="faded"
        isInvalid={!!errors.phone}
        errorMessage={errors.phone?.message}
        {...register("phone")}
        type="number"
        radius="sm"
        size="sm"
        label="Mobile no."
        className="text-xs"
        startContent={<PhoneIcon className="w-4" />}
      />
      <Input
        variant="faded"
        {...register("landline")}
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
        variant="faded"
        {...register("houseno")}
        radius="sm"
        size="sm"
        label="House no.,block,lot,building,etc"
        className="text-xs"
        placeholder=" "
      />
      <Input
        variant="faded"
        isInvalid={!!errors.street}
        errorMessage={errors.street?.message}
        {...register("street")}
        radius="sm"
        size="sm"
        label="Street address, village etc."
        className="text-xs"
        placeholder=" "
      />
      <Input
        variant="faded"
        isInvalid={!!errors.baranggay}
        errorMessage={errors.baranggay?.message}
        {...register("baranggay")}
        radius="sm"
        size="sm"
        label="Baranggay"
        className="text-xs"
        placeholder=" "
      />
      <Input
        variant="faded"
        {...register("district")}
        radius="sm"
        size="sm"
        label="District"
        className="text-xs"
        placeholder=" "
      />
      <Input
        variant="faded"
        isInvalid={!!errors.city}
        errorMessage={errors.city?.message}
        {...register("city")}
        radius="sm"
        size="sm"
        label="City/Municipality"
        className="text-xs"
        placeholder=" "
      />
      <Input
        variant="faded"
        {...register("province")}
        radius="sm"
        size="sm"
        label="Province"
        className="text-xs"
        placeholder=" "
      />
      <Input
        variant="faded"
        {...register("zipcode")}
        type="number"
        radius="sm"
        size="sm"
        label="zip code"
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
        variant="faded"
        isInvalid={!!errors.elementary}
        errorMessage={errors.elementary?.message}
        {...register("elementary")}
        radius="sm"
        size="sm"
        label="Name of Elementary School"
        className="text-xs col-span-3"
        placeholder=" "
      />
      <Select
        variant="faded"
        isInvalid={!!errors.attain}
        errorMessage={errors.attain?.message}
        {...register("attain")}
        radius="sm"
        size="sm"
        label="School Attainment"
        placeholder="Select your school attainment"
        className="text-xs"
      >
        <SelectItem key={"Graduate"} value="Graduate">
          Graduate
        </SelectItem>
        <SelectItem key={"Undergraduate"} value="Undergraduate">
          Undergraduate
        </SelectItem>
      </Select>
      <Input
        variant="faded"
        isInvalid={!!errors.highschool}
        errorMessage={errors.highschool?.message}
        {...register("highschool")}
        radius="sm"
        size="sm"
        label="Name of Junior High School"
        className="text-xs col-span-3"
        placeholder=" "
      />
      <Select
        variant="faded"
        isInvalid={!!errors.attain1}
        errorMessage={errors.attain1?.message}
        {...register("attain1")}
        radius="sm"
        size="sm"
        label="School Attainment"
        placeholder="Select your school attainment"
        className="text-xs"
      >
        <SelectItem key={"Graduate"} value="Graduate">
          Graduate
        </SelectItem>
        <SelectItem key={"Undergraduate"} value="Undergraduate">
          Undergraduate
        </SelectItem>
      </Select>
      <Input
        variant="faded"
        isInvalid={!!errors.senior}
        errorMessage={errors.senior?.message}
        {...register("senior")}
        radius="sm"
        size="sm"
        label="Name of Senior High School"
        className="text-xs col-span-3"
        placeholder=" "
      />
      <Select
        variant="faded"
        isInvalid={!!errors.attain2}
        errorMessage={errors.attain2?.message}
        {...register("attain2")}
        radius="sm"
        size="sm"
        label="School Attainment"
        placeholder="Select your school attainment"
        className="text-xs"
      >
        <SelectItem key={"Graduate"} value="Graduate">
          Graduate
        </SelectItem>
        <SelectItem key={"Undergraduate"} value="Undergraduate">
          Undergraduate
        </SelectItem>
      </Select>
      <Input
        variant="faded"
        isInvalid={!!errors.college}
        errorMessage={errors.college?.message}
        {...register("college")}
        radius="sm"
        size="sm"
        label="Name of College University"
        className="text-xs col-span-3"
        placeholder=" "
      />
      <Select
        variant="faded"
        isInvalid={!!errors.attain3}
        errorMessage={errors.attain3?.message}
        {...register("attain3")}
        radius="sm"
        size="sm"
        label="School Attainment"
        placeholder="Select your school attainment"
        className="text-xs"
      >
        <SelectItem key={"Graduate"} value="Graduate">
          Graduate
        </SelectItem>
        <SelectItem key={"Undergraduate"} value="Undergraduate">
          Undergraduate
        </SelectItem>
      </Select>

      <div className="col-span-4 mt-4 w-full h-[1px] border-b border-black" />

      <h1 className="col-span-4 font-bold text-xl w-full">Occupation</h1>
      <div className="w-full col-span-4 grid grid-cols-4">
        <Select
          variant="faded"
          isInvalid={!!errors.employment}
          errorMessage={errors.employment?.message}
          {...register("employment")}
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
      <>
        <Input
          isDisabled={employmentType !== "Employed" ? true : false}
          variant="faded"
          {...register("occupation")}
          radius="sm"
          size="sm"
          label="Occupation"
          className="text-xs row-span-2"
          placeholder=" "
        />
        <Input
          isDisabled={employmentType === "Employed" ? false : true}
          variant="faded"
          {...register("yearEmploy")}
          radius="sm"
          size="sm"
          label="Months/Years of being employed"
          className="text-xs "
          placeholder=" "
        />
        <Input
          isDisabled={employmentType === "Employed" ? false : true}
          variant="faded"
          {...register("skill1")}
          radius="sm"
          size="sm"
          label="1. Skills while being employed"
          className="text-xs "
          placeholder=" "
        />
        <Input
          isDisabled={employmentType === "Employed" ? false : true}
          variant="faded"
          {...register("skill2")}
          radius="sm"
          size="sm"
          label="2. Skills while being employed"
          className="text-xs "
          placeholder=" "
        />
      </>

      <>
        <Input
          isDisabled={employmentType === "Unmployed" ? false : true}
          variant="faded"
          {...register("yearUnemploy")}
          radius="sm"
          size="sm"
          label="Months/Years of being unemployed"
          className="text-xs "
          placeholder=" "
        />
        <Input
          isDisabled={employmentType === "Unmployed" ? false : true}
          variant="faded"
          {...register("skill1_1")}
          radius="sm"
          size="sm"
          label="1. Skills while being unemployed"
          className="text-xs "
          placeholder=" "
        />
        <Input
          isDisabled={employmentType === "Unmployed" ? false : true}
          variant="faded"
          {...register("skill2_1")}
          radius="sm"
          size="sm"
          label="2. Skills while being unemployed"
          className="text-xs "
          placeholder=" "
        />
      </>

      <div className="col-span-4 mt-4 w-full h-[1px] border-b border-black" />

      <h1 className="col-span-4 font-bold text-xl w-full">
        Health Information
      </h1>
      <Select
        variant="faded"
        isInvalid={!!errors.blood}
        errorMessage={errors.blood?.message}
        {...register("blood")}
        radius="sm"
        size="sm"
        label="Blood Type"
        placeholder=" "
        className="text-xs"
      >
        {bloods.map((blood) => (
          <SelectItem key={blood.value} value={blood.value}>
            {blood.label}
          </SelectItem>
        ))}
      </Select>
      <Input
        variant="faded"
        isInvalid={!!errors.height}
        errorMessage={errors.height?.message}
        {...register("height")}
        type="number"
        radius="sm"
        size="sm"
        label="Height in CM"
        className="text-xs"
        placeholder=" "
      />
      <Input
        variant="faded"
        isInvalid={!!errors.weight}
        errorMessage={errors.weight?.message}
        {...register("weight")}
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
        variant="faded"
        isInvalid={!!errors.disability}
        errorMessage={errors.disability?.message}
        {...register("disability")}
        radius="sm"
        size="sm"
        label="Disability Visibility"
        placeholder=" "
        className="text-xs"
      >
        <SelectItem key={"Visible"} value="Visible">
          Visible
        </SelectItem>
        <SelectItem key={"Not Visible"} value="Not Visible">
          Not Visible
        </SelectItem>
      </Select>

      <Select
        variant="faded"
        isInvalid={!!errors.visibility}
        errorMessage={errors.visibility?.message}
        {...register("visibility")}
        isDisabled={disabilityType ? false : true}
        radius="sm"
        size="sm"
        label="Disability Type"
        placeholder=" "
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
        variant="faded"
        isInvalid={!!errors.made_disabled}
        errorMessage={errors.made_disabled?.message}
        {...register("made_disabled")}
        radius="sm"
        size="sm"
        label="What made you become disable?"
        className="text-xs"
        placeholder=" "
      >
        <SelectItem key={"Inborn"} value="Inborn">
          Inborn
        </SelectItem>
        <SelectItem key={"Sickness"} value="Sickness">
          Sickness
        </SelectItem>
        <SelectItem key={"Accident"} value="Accident">
          Accident
        </SelectItem>
      </Select>

      <Select
        variant="faded"
        isInvalid={!!errors.status}
        errorMessage={errors.status?.message}
        {...register("status")}
        radius="sm"
        size="sm"
        label="Health Status"
        className="text-xs"
        placeholder=" "
      >
        <SelectItem key={"Good Condition"} value="Good Condition">
          Good Condition
        </SelectItem>
        <SelectItem key={"Require Assistance"} value="Require Assistance">
          Require Assistance
        </SelectItem>
        <SelectItem key={"Confine to Bed"} value="Confine to Bed">
          Confine to Bed
        </SelectItem>
        <SelectItem key={"Undefined"} value="Undefined">
          Undefined
        </SelectItem>
      </Select>

      <Select
        variant="faded"
        isInvalid={!!errors.device}
        errorMessage={errors.device?.message}
        {...register("device")}
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
        variant="faded"
        {...register("specificDevice")}
        isDisabled={!specificDevice}
        radius="sm"
        size="sm"
        label="Specific device used"
        className="text-xs"
        placeholder=" "
      />

      <Select
        variant="faded"
        isInvalid={!!errors.medicine}
        errorMessage={errors.medicine?.message}
        {...register("medicine")}
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
        variant="faded"
        {...register("specificMedicine")}
        isDisabled={!specificMedicine}
        radius="sm"
        size="sm"
        label="Specific device used"
        className="text-xs"
        placeholder=" "
      />
      <Input
        variant="faded"
        isInvalid={!!errors.others}
        errorMessage={errors.others?.message}
        {...register("others")}
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
        variant="faded"
        isInvalid={!!errors.emergencyPerson?.lastName}
        errorMessage={errors.emergencyPerson?.lastName?.message}
        {...register("emergencyPerson.lastName")}
        radius="sm"
        size="sm"
        label="Last name"
        className="text-xs"
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        variant="faded"
        isInvalid={!!errors.emergencyPerson?.firstName}
        errorMessage={errors.emergencyPerson?.firstName?.message}
        {...register("emergencyPerson.firstName")}
        radius="sm"
        size="sm"
        label="First name"
        className="text-xs"
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        variant="faded"
        isInvalid={!!errors.emergencyPerson?.middleName}
        errorMessage={errors.emergencyPerson?.middleName?.message}
        {...register("emergencyPerson.middleName")}
        radius="sm"
        size="sm"
        label="Middle name"
        className="text-xs"
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        variant="faded"
        {...register("emergencyPerson.suffix")}
        radius="sm"
        size="sm"
        label="Suffix"
        className="text-xs"
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        variant="faded"
        isInvalid={!!errors.emergencyPerson?.age}
        errorMessage={errors.emergencyPerson?.age?.message}
        {...register("emergencyPerson.age")}
        radius="sm"
        size="sm"
        type="number"
        label="Age"
        className="text-xs"
        placeholder=" "
      />
      <Select
        variant="faded"
        isInvalid={!!errors.emergencyPerson?.gender}
        errorMessage={errors.emergencyPerson?.gender?.message}
        {...register("emergencyPerson.gender")}
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
        variant="faded"
        isInvalid={!!errors.emergencyPerson?.relationship}
        errorMessage={errors.emergencyPerson?.relationship?.message}
        {...register("emergencyPerson.relationship")}
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
        variant="faded"
        isInvalid={!!errors.emergencyPerson?.religion}
        errorMessage={errors.emergencyPerson?.religion?.message}
        {...register("emergencyPerson.religion")}
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
        variant="faded"
        isInvalid={!!errors.emergencyPerson?.email}
        errorMessage={errors.emergencyPerson?.email?.message}
        {...register("emergencyPerson.email")}
        radius="sm"
        size="sm"
        label="Email"
        className="text-xs"
        startContent={<EnvelopeIcon className="w-4" />}
      />
      <Input
        variant="faded"
        isInvalid={!!errors.emergencyPerson?.phone}
        errorMessage={errors.emergencyPerson?.phone?.message}
        {...register("emergencyPerson.phone")}
        type="number"
        radius="sm"
        size="sm"
        label="Mobile no."
        className="text-xs"
        startContent={<PhoneIcon className="w-4" />}
      />
      <Input
        variant="faded"
        {...register("emergencyPerson.landline")}
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
        variant="faded"
        {...register("emergencyPerson.houseno")}
        radius="sm"
        size="sm"
        label="House no.,block,lot,building,etc"
        className="text-xs"
        placeholder=" "
      />
      <Input
        variant="faded"
        isInvalid={!!errors.emergencyPerson?.street}
        errorMessage={errors.emergencyPerson?.street?.message}
        {...register("emergencyPerson.street")}
        radius="sm"
        size="sm"
        label="Street address, village etc."
        className="text-xs"
        placeholder=" "
      />
      <Input
        variant="faded"
        isInvalid={!!errors.emergencyPerson?.baranggay}
        errorMessage={errors.emergencyPerson?.baranggay?.message}
        {...register("emergencyPerson.baranggay")}
        radius="sm"
        size="sm"
        label="Baranggay"
        className="text-xs"
        placeholder=" "
      />
      <Input
        variant="faded"
        {...register("emergencyPerson.district")}
        radius="sm"
        size="sm"
        label="District"
        className="text-xs"
        placeholder=" "
      />
      <Input
        variant="faded"
        isInvalid={!!errors.emergencyPerson?.city}
        errorMessage={errors.emergencyPerson?.city?.message}
        {...register("emergencyPerson.city")}
        radius="sm"
        size="sm"
        label="City/Municipality"
        className="text-xs"
        placeholder=" "
      />
      <Input
        variant="faded"
        {...register("emergencyPerson.province")}
        radius="sm"
        size="sm"
        label="Province"
        className="text-xs"
        placeholder=" "
      />
      <Input
        variant="faded"
        {...register("emergencyPerson.zipcode")}
        type="number"
        radius="sm"
        size="sm"
        label="zip code"
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
          variant="faded"
          isInvalid={!!errors.password}
          errorMessage={errors.password?.message}
          {...register("password")}
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
          variant="faded"
          isInvalid={!!errors.confirmPassword}
          errorMessage={errors.confirmPassword?.message}
          {...register("confirmPassword")}
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
        isDisabled={isSubmitting}
        type="submit"
        radius="sm"
        className="col-span-4 w-full text-white bg-blue-500"
      >
        {isSubmitting ? "Submitting..." : "Register"}
      </Button>
    </form>
  );
};
export default UserSignupForm;
