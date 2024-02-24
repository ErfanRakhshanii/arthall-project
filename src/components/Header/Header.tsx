import React from "react";
import styles from "../../Styles/Header/Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  const headerRoutes = [
    { routeName: "لیست کارها", routeId: 1, routePath: "/" },
    { routeName: "افزودن کارها", routeId: 2, routePath: "/addToDO" },
  ];
  return (
    <main className={styles.container}>
      <ul>
        {headerRoutes.map((item) => {
          return (
            <li key={item.routeId}>
              <NavLink
                to={item.routePath}
                style={({ isActive }) => ({
                  color: isActive ? "#F1C400" : "white",
                })}
              >
                {item.routeName}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
