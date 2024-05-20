import React from "react";
import "./PreFooterSection.css"; // Importa il file CSS per la stilizzazione



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
              <h3>Newsletter</h3>
              <form
                action="vpennacchio02@gmail.com"
                method="post"
                encType="text/plain"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PreFooterSection;
