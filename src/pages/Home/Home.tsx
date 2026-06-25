import type { JSX } from "react/jsx-runtime";
import Hero from "./Hero/Hero";
import Categories from "../../components/Categories/Categories";

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <Categories />
    </>
  );
}
