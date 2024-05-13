import React from 'react';
import "./Footer.css"; // Importa il file CSS per la stilizzazione

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p>© 2024 Nome della tua azienda. Tutti i diritti riservati.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
