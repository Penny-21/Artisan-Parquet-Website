import React from 'react';
import './TextSection.css'; // Importa il file CSS per la stilizzazione

function TextSection() {
  return (
    <section className="text-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Titolo della sezione</h2>
            <p>Testo della sezione Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>Testo della sezione Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Testo della sezione Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TextSection;
