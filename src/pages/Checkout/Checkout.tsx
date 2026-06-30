import { useState, type ChangeEvent } from "react";
import type { JSX } from "react/jsx-runtime";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import type { FormDataType, FormErrors } from "./Checkout.types";
import { ZodError } from "zod";
import { checkoutSchema } from "./Checkout.schema";
import clsx from "clsx";
import styles from "./Checkout.module.scss";
import GoBack from "../../components/GoBack/GoBack";

export default function Checkout(): JSX.Element {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentMethod: "e-money",
    eMoneyNumber: "",
    eMoneyPIN: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  function onChange(e: ChangeEvent<HTMLInputElement>): void {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function pay(): void {
    setFormErrors({});

    try {
      checkoutSchema.parse(formData);
    } catch (err) {
      if (err instanceof ZodError) {
        for (const issue of err.issues.reverse()) {
          for (const path of issue.path)
            setFormErrors((prev) => ({ ...prev, [path]: issue.message }));
        }
      }
    }
  }

  return (
    <>
      <GoBack />
      <div className={clsx(styles.checkout, "container")}>
        <CheckoutForm
          onChange={onChange}
          formData={formData}
          formErrors={formErrors}
          className={styles["checkout-form"]}
        />
        <button onClick={pay}>Pay</button>
      </div>
    </>
  );
}
