import React from "react";
import { NavLink } from "react-router-dom";

const HorizontalNav = () => {
  return (
    <header>
      <nav className="horizontal_nav">
        <NavLink to="/">
          <picture>
            <img src="./img/logo.svg" alt="logo SportSee"></img>
          </picture>
        </NavLink>
        <NavLink
          to="/"
          className={(nav) =>
            nav.isActive ? "nav_goToPage--active" : "nav_goToPage"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/profile"
          className={(nav) =>
            nav.isActive ? "nav_goToPage--active" : "nav_goToPage"
          }
        >
          Profil
        </NavLink>
        <NavLink
          to="/setting"
          className={(nav) =>
            nav.isActive ? "nav_goToPage--active" : "nav_goToPage"
          }
        >
          Réglage
        </NavLink>
        <NavLink
          to="/community"
          className={(nav) =>
            nav.isActive ? "nav_goToPage--active" : "nav_goToPage"
          }
        >
          Communauté
        </NavLink>
      </nav>
    </header>
  );
};

export default HorizontalNav;
