import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import codequiz from "./images/code-quiz.png";
import nomstop from "./images/nomstop.png";
import dayplanner from "./images/day-planner.png";
import notetaker from "./images/note-taker.png";
import weatherapp from "./images/weather-app.png";
import eatdaburger from "./images/eat-da-burger.png";
import Footer from "./components/Footer";
import "./style/App.css";

class App extends Component {
  state = {
    examples: [
      {
        title: "Code Quiz",
        image: codequiz,
        url: "https://fengjess.github.io/code-quiz/",
        git: "https://github.com/fengjess/code-quiz",
      },
      {
        title: "Nom' Stop",
        image: nomstop,
        url: "https://saritapeter123.github.io/projectOne/index.html",
        git: "https://github.com/Saritapeter123/projectOne"
      },
      {
        title: "Day Planner",
        image: dayplanner,
        url: "https://fengjess.github.io/day-planner/",
        git: "https://github.com/fengjess/day-planner"
      },
      {
        title: "Note Taker",
        image: notetaker,
        url: "https://fengjess-notetaker.herokuapp.com/",
        git: "https://github.com/fengjess/note-taker"
      },
      {
        title: "Weather Dashboard",
        image: weatherapp,
        url: "https://fengjess.github.io/weather-dashboard/",
        git: "https://github.com/fengjess/weather-dashboard"
      },
      {
        title: "Eat-Da-Burger",
        image: eatdaburger,
        url: "https://fengjess-burger.herokuapp.com/",
        git: "https://github.com/fengjess/burger1"
      },
          ]
  };
  render() {
    return (
      <Router basename="/">
        <div className="App">
          <Nav />        
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route
            path="/projects"
            render={() => <Projects examples={this.state.examples} />}
          />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
