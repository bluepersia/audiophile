import type { JSX } from "react/jsx-runtime";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import CartContextProvider from "../../contexts/CartContext/CartContext";

export default function AppLayout(): JSX.Element {
  return (
    <CartContextProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </CartContextProvider>
  );
}
