import React from 'react';
import './ImageSection.css'; // Importa il file CSS per la stilizzazione

function ImageSection() {
  return (
    <section className="image-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="image-tile">
              <img src="https://via.placeholder.com/150" alt="Immagine 1" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="image-tile">
              <img src="https://via.placeholder.com/200" alt="Immagine 2" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="image-tile">
              <img src="https://via.placeholder.com/250" alt="Immagine 3" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-tile">
              <img src="https://via.placeholder.com/300" alt="Immagine 4" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-tile">
              <img src="https://via.placeholder.com/350" alt="Immagine 5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageSection;
