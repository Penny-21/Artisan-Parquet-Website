import "./App.css";
import Navbar from './Navbar-folder/Navbar'; // Importa il componente Navbar
import PreFooterSection from './Prefooter-folder/PreFooterSection';
import Footer from './Footer-folder/Footer';

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
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
        <PreFooterSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
