import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/main.css";
import "./css/vendor.css";
import Header from "./components/Header/header";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/portfolio";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Intro} />
        <Route exact path="/" component={About} />
        <Route exact path="/" component={Resume} />
        <Route exact path="/index.html" component={Intro} />
        <Route exact path="/index.html" component={About} />
        <Route exact path="/index.html" component={Resume} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/portfolio" component={Services} />
        <Route exact path="/portfolio" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
