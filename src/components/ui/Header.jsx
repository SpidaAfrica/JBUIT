// components/Header.jsx
import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">JBUIT</div>

        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <a href="/" className="a">Home</a>
          <a href="/Academy" className="a">Academy</a>
          <a href="https://wa.me/+2348123888508" className="nav-btn">Get a Quote</a>
        </nav>

        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
}
