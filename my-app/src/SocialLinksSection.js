import React from "react";
import {ReactComponent as Instagram} from "./svg-bank/square-instagram.svg"
import {ReactComponent as Facebook} from "./svg-bank/square-facebook.svg"
import {ReactComponent as Linkedin} from "./svg-bank/linkedin.svg"

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
              <Instagram />
            </a>
          </div>
          <div className="col-md-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
          </div>
          <div className="col-md-4">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialLinksSection;
