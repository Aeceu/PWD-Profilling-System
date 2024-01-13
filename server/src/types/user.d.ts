export type TUserSignup = {
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string | null;
  age: number;
  birthdate: string;
  birthplace: string;
  gender: string;
  religion: string;
  citizenship: string;
  civil: string;

  email: string;
  phone: string;
  landline: string | null;

  houseno: string | null;
  street: string;
  baranggay: string;
  district: string | null;
  city: string;
  province: string | null;
  zipcode: string | null;

  elementary: string;
  attain: string;
  highschool: string;
  attain1: string;
  senior: string;
  attain2: string;
  college: string;
  attain3: string;

  employment: string;
  occupation: string | null;
  yearEmploy: string | null;
  skill1: string | null;
  skill2: string | null;
  yearUnemploy: string | null;
  skill1_1: string | null;
  skill2_1: string | null;

  blood: string;
  height: string;
  weight: string;

  disability: string;
  visibility: string;
  made_disabled: string;
  status: string;
  device: string;
  specificDevice: string | null;
  medicine: string;
  specificMedicine: string | null;
  others: string;

  emergencyPerson: EmergencyPerson;
  password: string | null;
};

type EmergencyPerson = {
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string | null;
  age: number;
  gender: string;
  relationship: string;
  religion: string;

  email: string;
  phone: string;
  landline: string;

  province: string;
  district: string;
  houseno: string;
  street: string;
  baranggay: string;
  city: string;
  zipcode: string;
};

export type TUser = {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string | null;
  age: number;
  birthdate: string;
  birthplace: string;
  gender: string;
  religion: string;
  citizenship: string;
  civil: string;

  email: string;
  phone: string;
  landline: string | null;

  houseno: string | null;
  street: string;
  baranggay: string;
  district: string | null;
  city: string;
  province: string | null;
  zipcode: string | null;

  elementary: string;
  attain: string;
  highschool: string;
  attain1: string;
  senior: string;
  attain2: string;
  college: string;
  attain3: string;

  employment: string;
  occupation: string | null;
  yearEmploy: string | null;
  skill1: string | null;
  skill2: string | null;
  yearUnemploy: string | null;
  skill1_1: string | null;
  skill2_1: string | null;

  blood: string;
  height: string;
  weight: string;

  disability: string;
  visibility: string;
  made_disabled: string;
  status: string;
  device: string;
  specificDevice: string | null;
  medicine: string;
  specificMedicine: string | null;
  others: string | null;

  emergencyPerson: {
    firstName: string;
    middleName: string;
    lastName: string;
    suffix: string | null;
    age: number;
    gender: string;
    relationship: string;
    religion: string;

    email: string;
    phone: string;
    landline: string;

    province: string;
    district: string;
    houseno: string;
    street: string;
    baranggay: string;
    city: string;
    zipcode: string;
    userId: string;
  } | null;
  password?: string | null;
  refreshToken?: string | null;
  role: string;

  createdAt: Date;
};
