import type { JSX } from "react/jsx-runtime";
import Hero from "./Hero/Hero";
import Categories from "../../components/Categories/Categories";
import Highlights from "./Highlights/Highlights";
import AboutUs from "../../components/AboutUs/AboutUs";

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <Categories />
      <Highlights />
      <AboutUs />
    </>
  );
}
