import React from "react";
/*import './SocialLinksSection.css'; */// Importa il file CSS per la stilizzazione
import {ReactComponent as Instagram} from "./svg-bank/square-instagram.svg";
import {ReactComponent as Facebook} from "./svg-bank/square-facebook.svg";
import {ReactComponent as Linkedin} from "./svg-bank/linkedin.svg";

/* const colors = {
  primary: '#405DE6',
  secondary: '#5851DB',
  tertiary: '#833AB4',
  quaternary: '#C13584',
  quinary: '#E1306C'
}; */


function SocialLinksSection() {
  return (
    <section className="social-links-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram style={{ width: '50px', height:'50px', fill: '#C13584' }} />
            </a>
          </div>
          <div className="col-md-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook style={{ width: '50px', height:'50px', fill: '#0165E1' }} />
            </a>
          </div>
          <div className="col-md-4">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin style={{ width: '50px', height:'50px', fill: '#0A66C2' }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialLinksSection;
