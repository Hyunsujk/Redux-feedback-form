import React, { Component } from "react";
import { connect } from "react-redux";

class SupportPage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>
            <i>Don't forget it!</i>
          </h4>
        </header>
        <br />
        <div>
          <h1>How well are you being supported?</h1>
          <form>
            <button>Next</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(SupportPage);
