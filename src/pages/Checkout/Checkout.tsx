import { useContext, useEffect, useState, type ChangeEvent } from "react";
import type { JSX } from "react/jsx-runtime";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import type { FormDataType, FormErrors } from "./Checkout.types";
import { ZodError } from "zod";
import { checkoutSchema } from "./Checkout.schema";
import clsx from "clsx";
import styles from "./Checkout.module.scss";
import GoBack from "../../components/GoBack/GoBack";
import Summary from "./Summary/Summary";
import { ModalContext } from "../../contexts/ModalContext/ModalContext";
import type { CartProduct } from "../../types/cart.types";

export default function Checkout(): JSX.Element {
  const [formData, setFormData] = useState<FormDataType>(() => {
    const formDataFromLocaleStorage = localStorage.getItem("form");
    if (formDataFromLocaleStorage) {
      return JSON.parse(formDataFromLocaleStorage) as FormDataType;
    }
    return {
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
    };
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const modalContext = useContext(ModalContext);

  function onChange(e: ChangeEvent<HTMLInputElement>): void {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function pay(items: CartProduct[], grandTotal: number): void {
    setFormErrors({});

    try {
      checkoutSchema.parse(formData);

      modalContext.openModal({
        type: "checkout-confirmation",
        items,
        grandTotal,
      });
    } catch (err) {
      if (err instanceof ZodError) {
        for (const issue of err.issues.reverse()) {
          for (const path of issue.path)
            setFormErrors((prev) => ({ ...prev, [path]: issue.message }));
        }
      }
    }
  }

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(formData));
  }, [formData]);

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
        <Summary pay={pay} className={styles.summary} />
      </div>
    </>
  );
}
