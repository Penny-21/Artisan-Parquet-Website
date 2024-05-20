import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar-folder/Navbar'; // Importa il componente Navbar
import Carousel from './Carousel-folder/Carousel';
import TextSection from './Text-section-folder/TextSection';
import ImageSection from './Imagesection-folder/ImageSection';
import ReviewSection from './Review-section-folder/ReviewSection';
import SocialLinksSection from './Social-links-folder/SocialLinksSection';
import PreFooterSection from './Prefooter-folder/PreFooterSection';
import Footer from './Footer-folder/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Carousel />
    <TextSection />
    <ImageSection />
    <ReviewSection />
    <SocialLinksSection />
    <PreFooterSection />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
