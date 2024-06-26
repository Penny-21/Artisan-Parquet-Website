import React from "react";
import "./Carousel.css"; // Importa il file CSS per la stilizzazione
import foglia1 from "../assets/png/Foglia-1.png"; // Importa l'immagine (assicurati di avere il percorso corretto)
import foglia2 from "../assets/png/Foglia-2.png"; // Importa l'immagine (assicurati di avere il percorso corretto)
import foglia3 from "../assets/png/Foglia-3.png"; // Importa l'immagine (assicurati di avere il percorso corretto)


function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
        <img src={foglia1} alt="Carousel" className="d-block w-100" />
        </div>
        <div className="carousel-item">
        <img src={foglia2} alt="Carousel" className="d-block w-100" />
        </div>
        <div className="carousel-item">
        <img src={foglia3} alt="Carousel" className="d-block w-100" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
