type FormDataType = {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  paymentMethod: "e-money" | "cash-on-delivery";
  eMoneyNumber: string;
  eMoneyPIN: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  zip?: string;
  city?: string;
  country?: string;
  eMoneyNumber?: string;
  eMoneyPIN?: string;
};

export type { FormDataType, FormErrors };
