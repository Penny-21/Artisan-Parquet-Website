import React from 'react';
import Carousel from '../Carousel-folder/Carousel';  // Percorso corretto al file Carousel.js
import TextSection from '../Text-section-folder/TextSection';
import ImageSection from '../Imagesection-folder/ImageSection';
import ReviewSection from '../Review-section-folder/ReviewSection';
import SocialLinksSection from '../Social-links-folder/SocialLinksSection';

function Home() {
  return (
    <div className="home-page">
      <Carousel />
      <TextSection />
      <ImageSection />
      <ReviewSection />
      <SocialLinksSection />
    </div>
  );
}

export default Home;