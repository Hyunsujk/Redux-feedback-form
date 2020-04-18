import React, { Component } from "react";
import { connect } from "react-redux";

class FeelingPage extends Component {
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
          <h1>How are you feeling today?</h1>
          <form>
            <button>Next</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(FeelingPage);
