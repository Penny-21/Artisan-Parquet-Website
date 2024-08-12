import React from "react";
import "./Navbar.css";
import logo from "../assets/png/Logo-affiancato-1.png"; // Importa l'immagine (assicurati di avere il percorso corretto)
import { Link } from 'react-router-dom'; // Importa Link da react-router-dom

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
            <Link to="/" className="nav-link navbar-link">Home</Link>
            <Link to="/About" className="nav-link navbar-link">About</Link>
            <Link to="/Collections" className="nav-link navbar-link">Collections</Link>
            <Link to="/Portfolio" className="nav-link navbar-link">Portfolio</Link>
            <Link to="./Stories" className="nav-link navbar-link">Stories</Link>
            <Link to="/Contact" className="nav-link navbar-link">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar; // Esporta il componente Navbar
