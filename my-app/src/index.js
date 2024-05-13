import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar'; // Importa il componente Navbar
import Carousel from './Carousel';
import TextSection from './TextSection';
import ImageSection from './ImageSection';
import ReviewSection from './ReviewSection';
import SocialLinksSection from './SocialLinksSection';
import PreFooterSection from './PreFooterSection';
import Footer from './Footer';

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
