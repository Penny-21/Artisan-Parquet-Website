import React from "react";
import "./App.css";
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


function App() {
  return (
    /*     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
    /*     <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
        <PreFooterSection />
        <Footer />
      </div>
    </Router> */
    <React.StrictMode>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <PreFooterSection />
      <Footer />
    </React.StrictMode>
  );
}

export default App;
