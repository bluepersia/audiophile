import { NavLink } from "react-router";
import type { JSX } from "react/jsx-runtime";
import { determineNavLinkClass } from "./Nav.utils";
import styles from "./Nav.module.scss";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../api/categories.api";
import clsx from "clsx";

type NavProps = {
  variant?: "header" | "footer";
};
export default function Nav({ variant = "header" }: NavProps): JSX.Element {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return (
    <nav className={styles[`nav--${variant}`]}>
      <ul className={styles.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              clsx(styles.link, styles[determineNavLinkClass(isActive)])
            }
          >
            Home
          </NavLink>
        </li>
        {categories?.map((category) => (
          <li key={category.name}>
            <NavLink
              to={`categories/${category.name}`}
              className={({ isActive }) =>
                clsx(styles.link, styles[determineNavLinkClass(isActive)])
              }
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
