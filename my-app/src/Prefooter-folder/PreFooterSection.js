import React from "react";
import "./PreFooterSection.css"; // Importa il file CSS per la stilizzazione
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function PreFooterSection() {
  return (
    <section className="pre-footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="pre-footer-item">
              <h3>Company</h3>
              <p>Descrizione della company.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pre-footer-item">
              <h3>Contact Us</h3>
              <p>Email: info@example.com</p>
              <p>Phone Number: +1234567890</p>
              <p>Website: www.example.com</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pre-footer-item">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="https://www.instagram.com" aria-label="Instagram" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.facebook.com" aria-label="Facebook" target="_blank">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PreFooterSection;
