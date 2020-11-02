import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import ScrollToTop from "../src/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Intro />
            <About />
            <Resume />
          </Route>
          <Route path="/intro" component={Intro} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio">
            <Portfolio />
            <Services />
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
