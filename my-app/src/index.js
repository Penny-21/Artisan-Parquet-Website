import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa Router e Route
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./Navbar-folder/Navbar"; // Importa il componente Navbar
import Home from "./Home-folder/Home"; // Assicurati che il percorso sia corretto
import About from "./About-folder/About"; // Assicurati che il percorso sia corretto
import Collections from "./Collections-folder/Collections"; // Assicurati che il percorso sia corretto
import Portfolio from "./Portfolio-folder/Portfolio"; // Assicurati che il percorso sia corretto
import Stories from "./Stories-folder/Stories"; // Assicurati che il percorso sia corretto
import Contact from "./Contact-folder/Contact"; // Assicurati che il percorso sia corretto
import Carousel from "./Carousel-folder/Carousel";
import TextSection from "./Text-section-folder/TextSection";
import ImageSection from "./Imagesection-folder/ImageSection";
import ReviewSection from "./Review-section-folder/ReviewSection";
import SocialLinksSection from "./Social-links-folder/SocialLinksSection";
import PreFooterSection from "./Prefooter-folder/PreFooterSection";
import Footer from "./Footer-folder/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About-folder" component={About} />
        <Route path="/Collections-folder" component={Collections} />
        <Route path="/Portfolio-folder" component={Portfolio} />
        <Route path="/Stories-folder" component={Stories} />
        <Route path="/Contact-folder" component={Contact} />
      </Switch>
      <PreFooterSection />
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
