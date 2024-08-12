import React from 'react';
import "./About.css";
import abtimg from "../assets/png/Logo-affiancato-2.png"; // Importa l'immagine (assicurati di avere il percorso corretto)

function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur.
            </p>
            <ul className="features-list">
              <li>
                <i className="fas fa-lock" />
                <span>Secure Data Storage</span>
              </li>
              <li>
                <i className="fas fa-rocket" />
                <span>Fast and Reliable Performance</span>
              </li>
              <li>
                <i className="fas fa-cog" />
                <span>Customizable Solutions</span>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img src={abtimg} alt="Parquet pattern" className="parquet-pattern" />
            <div className="stats-container">
              <div className="stat">
                <h3>10+</h3>
                <p>Years of Experience</p>
              </div>
              <div className="stat">
                <h3>500+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat">
                <h3>20+</h3>
                <p>Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="call-to-action">
        <button className="btn btn-primary">Learn More</button>
      </div>
    </section>
  );
}

export default About;
