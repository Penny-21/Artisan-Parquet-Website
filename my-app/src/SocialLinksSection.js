import React from "react";

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
              <i className="fa-brands fa-instagram"></i>
              <span>Instagram</span>
            </a>
          </div>
          <div className="col-md-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
              <span>Facebook</span>
            </a>
          </div>
          <div className="col-md-4">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialLinksSection;
