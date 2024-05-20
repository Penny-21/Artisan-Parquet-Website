import React from 'react';
import './ImageSection.css'; // Importa il file CSS per la stilizzazione
import floor1 from "../assets/png/Floor-1.png"; // Importa l'immagine (assicurati di avere il percorso corretto)
import floor2 from "../assets/png/Floor-2.png"; // Importa l'immagine (assicurati di avere il percorso corretto)
import floor3 from "../assets/png/Floor-4.png"; // Importa l'immagine (assicurati di avere il percorso corretto)
import floor4 from "../assets/png/Floor-5.png"; // Importa l'immagine (assicurati di avere il percorso corretto)
import floor5 from "../assets/png/Floor-3.png"; // Importa l'immagine (assicurati di avere il percorso corretto)

function ImageSection() {
  return (
    <section className="image-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="image-tile">
            <img src={floor1} alt="Carousel" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="image-tile">
            <img src={floor2} alt="Carousel" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="image-tile">
            <img src={floor3} alt="Carousel" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-tile">
            <img src={floor4} alt="Carousel" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-tile">
            <img src={floor5} alt="Carousel" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageSection;
