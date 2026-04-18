import type { JSX } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { determineActiveLinkStyle, getUserErrorMessage } from "./Nav.utils";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../api/categories.api";
import styles from "./Nav.module.css";

type NavProps = {
  className?: string;
};

export default function Nav({ className }: NavProps): JSX.Element {
  const { data, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  function renderCategories() {
    if (error) return <p className="error">{getUserErrorMessage(error)}</p>;

    if (data)
      return data.map((cat) => (
        <NavLink
          key={cat.id}
          to={`category/${cat.name}`}
          className={({ isActive }) =>
            clsx(styles.link, "reset-link", determineActiveLinkStyle(isActive))
          }
        >
          {cat.name}
        </NavLink>
      ));

    return null;
  }

  return (
    <nav className={clsx(styles.nav, className)}>
      <NavLink
        to="."
        end={true}
        className={({ isActive }) =>
          clsx(styles.link, "reset-link", determineActiveLinkStyle(isActive))
        }
      >
        Home
      </NavLink>
      {renderCategories()}
    </nav>
  );
}
