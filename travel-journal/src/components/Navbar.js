import React from "react";
import logo from "../assets/images/logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <nav>
        <img src={logo} alt="Logo" />
        <h1>My Travel journal</h1>
      </nav>
    </header>
  );
}
