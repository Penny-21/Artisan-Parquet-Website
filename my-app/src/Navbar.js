import React from "react";
import "./Navbar.css";
import logo from "./assets/png/Logo-affiancato-1.png"; // Importa l'immagine (assicurati di avere il percorso corretto)

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" className="navbar-logo-img" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link navbar-link" href="#">
              Home
            </a>
            <a className="nav-link navbar-link" href="#">
              About
            </a>
            <a className="nav-link navbar-link" href="#">
              Collections
            </a>
            <a className="nav-link navbar-link" href="#">
              Portfolio
            </a>
            <a className="nav-link navbar-link" href="#">
              Stories
            </a>
            <a className="nav-link navbar-link" href="#">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar; // Esporta il componente Navbar
