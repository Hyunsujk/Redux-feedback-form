import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import FeelingPage from "../Pages/FeelingPage/FeelingPage";
import UnderstandingPage from "../Pages/UnderstandingPage/UnderstandingPage";
import SupportPage from "../Pages/SupportPage/SupportPage";
import CommentPage from "../Pages/CommentPage/CommentPage";
import ReviewPage from "../Pages/ReviewPage/ReviewPage";
import SubmissionPage from "../Pages/SubmissionPage/SubmissionPage";
import Admin from "../Pages/Admin/Admin";

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
          <Route exact path="/review" component={ReviewPage} />
          <Route exact path="/submission" component={SubmissionPage} />
          <Route exact path="/admin" component={Admin} />
        </Router>
      </div>
    );
  }
}

export default App;
