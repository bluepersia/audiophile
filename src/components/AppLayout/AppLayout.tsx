import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import type { JSX } from "react";

export default function AppLayout(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
