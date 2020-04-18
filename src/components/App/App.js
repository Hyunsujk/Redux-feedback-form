import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Pages/Home/Home";
import FeelingPage from "../Pages/FeelingPage/FeelingPage";
import UnderstandingPage from "../Pages/UnderstandingPage/UnderstandingPage";
import SupportPage from "../Pages/SupportPage/SupportPage";
import CommentPage from "../Pages/CommentPage/CommentPage";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/feeling" component={FeelingPage} />
          <Route exact path="/understanding" component={UnderstandingPage} />
          <Route exact path="/support" component={SupportPage} />
          <Route exact path="/comment" component={CommentPage} />
        </Router>
      </div>
    );
  }
}

export default App;
