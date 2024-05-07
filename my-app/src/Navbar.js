import React from "react";
import "./Navbar.css";
import logo from 'assets/png/Logo-affiancato-1'; // Importa l'immagine (assicurati di avere il percorso corretto)

function Navbar() {
  return (
    <header>
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="navbar-logo-img" />
      </div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Elemento 1
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Elemento 2
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Elemento 3
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Elemento 4
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Elemento 5
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Elemento 6
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar; // Esporta il componente Navbar
