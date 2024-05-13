import React from 'react';
import './ReviewSection.css'; // Importa il file CSS per la stilizzazione

function ReviewSection() {
  return (
    <section className="review-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="review">
              <div className="review-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis, velit et aliquam congue, magna odio elementum libero.</p>
              </div>
              <div className="review-author">
                <h4>John Doe</h4>
                <p>CEO, Company Name</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="review">
              <div className="review-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis, velit et aliquam congue, magna odio elementum libero.</p>
              </div>
              <div className="review-author">
                <h4>Jane Smith</h4>
                <p>CTO, Company Name</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="review">
              <div className="review-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis, velit et aliquam congue, magna odio elementum libero.</p>
              </div>
              <div className="review-author">
                <h4>Alice Johnson</h4>
                <p>Designer, Company Name</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;
