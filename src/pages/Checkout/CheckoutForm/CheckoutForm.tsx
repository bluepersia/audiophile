import type { ChangeEvent } from "react";
import type { JSX } from "react/jsx-runtime";
import InputGroup from "./InputGroup/InputGroup";
import type { FormDataType, FormErrors } from "../Checkout.types";
import cashOnDeliveryIcon from "/src/assets/checkout/icon-cash-on-delivery.svg";
import styles from "./CheckoutForm.module.scss";
import clsx from "clsx";

type CheckoutFormProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  formData: FormDataType;
  formErrors: FormErrors;
  className: string;
};
export default function CheckoutForm({
  onChange,
  formData,
  formErrors,
  className,
}: CheckoutFormProps): JSX.Element {
  return (
    <section className={clsx(styles["checkout-form"], className)}>
      <h1 className={styles.title}>Checkout</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <section>
          <h2 className={styles["sub-title"]}>Billing Details</h2>
          <div className={styles["billing-inner"]}>
            <InputGroup
              label="Name"
              type="text"
              placeholder="Alexei Ward"
              name="name"
              value={formData.name}
              onChange={onChange}
              error={formErrors.name}
            />
            <InputGroup
              label="Email Address"
              type="email"
              placeholder="alexei@mail.com"
              name="email"
              value={formData.email}
              onChange={onChange}
              error={formErrors.email}
            />
            <InputGroup
              label="Phone Number"
              type="text"
              placeholder="+1 202-555-0136"
              name="phone"
              value={formData.phone}
              onChange={onChange}
              error={formErrors.phone}
            />
          </div>
        </section>

        <section>
          <h2 className={styles["sub-title"]}>Shipping Info</h2>
          <div className={styles["shipping-inner"]}>
            <InputGroup
              label="Your Address"
              type="text"
              placeholder="1137 Williams Avenue"
              name="address"
              value={formData.address}
              onChange={onChange}
              error={formErrors.address}
              className={styles.address}
            />
            <InputGroup
              label="ZUP Code"
              type="number"
              placeholder="10001"
              name="zip"
              value={formData.zip}
              onChange={onChange}
              error={formErrors.zip}
            />
            <InputGroup
              label="City"
              type="text"
              placeholder="New York"
              name="city"
              value={formData.city}
              onChange={onChange}
              error={formErrors.city}
            />
            <InputGroup
              label="Country"
              type="text"
              placeholder="United States"
              name="country"
              value={formData.country}
              onChange={onChange}
              error={formErrors.country}
            />
          </div>
        </section>

        <section>
          <h2 className={styles["sub-title"]}>Payment Details</h2>
          <fieldset className={styles["payment-method-fieldset"]}>
            <div className={styles["payment-method-fieldset-label"]}>
              <legend className={styles["payment-method-legend"]}>
                Payment Method
              </legend>
            </div>

            <div className={styles["payment-method-fieldset-inner"]}>
              <label className={styles["payment-method-label"]}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="e-money"
                  onChange={onChange}
                  className={styles["payment-method-input"]}
                  checked={formData.paymentMethod === "e-money"}
                />
                <span>e-Money</span>
              </label>
              <label className={styles["payment-method-label"]}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash-on-delivery"
                  onChange={onChange}
                  className={styles["payment-method-input"]}
                  checked={formData.paymentMethod === "cash-on-delivery"}
                />
                <span>Cash on Delivery</span>
              </label>
            </div>
          </fieldset>

          {formData.paymentMethod === "e-money" ? (
            <div className={styles["e-money-inner"]}>
              <InputGroup
                label="e-Money Number"
                type="number"
                placeholder="238521993"
                name="eMoneyNumber"
                value={formData.eMoneyNumber}
                onChange={onChange}
                error={formErrors.eMoneyNumber}
              />
              <InputGroup
                label="e-Money PIN"
                type="number"
                placeholder="6891"
                name="eMoneyPIN"
                value={formData.eMoneyPIN}
                onChange={onChange}
                error={formErrors.eMoneyPIN}
              />
            </div>
          ) : (
            <div className={styles["cash-on-delivery"]}>
              <img
                src={cashOnDeliveryIcon}
                alt=""
                className={styles["cash-icon"]}
              />
              <p className={styles["cash-text"]}>
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          )}
        </section>
      </form>
    </section>
  );
}
