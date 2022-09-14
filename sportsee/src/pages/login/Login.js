import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Login = () => {
  return (
    <div className="pageLogin_container">
      <header className="pageLogin_header">
        <picture>
          <img src={logo} alt="logo Sportsee"></img>
        </picture>
      </header>
      <main className="pageLogin_main">
        <h1>Se connecter</h1>
        <ul>
          <li>
            <NavLink to="/homepage/12">
              <p>Karl</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/homepage/18">
              <p>Cecilia</p>
            </NavLink>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Login;
