import type { JSX } from "react/jsx-runtime";
import CartItem from "./CartItem";
import type { CartProduct } from "../../types/cart.types";
import styles from "./CartItemWithQuantity.module.scss";

type CartItemWithQuantityProps = {
  cartProduct: CartProduct;
};
export default function CartItemWithQuantity({
  cartProduct,
}: CartItemWithQuantityProps): JSX.Element {
  return (
    <CartItem product={cartProduct} quantity={cartProduct.quantity}>
      <p className={styles.quantity}>x{cartProduct.quantity}</p>
    </CartItem>
  );
}
