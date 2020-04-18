import React, { Component } from "react";
import { connect } from "react-redux";

class SupportPage extends Component {
  state = {
    support: "",
  };

  onInputChange = (event) => {
    this.setState({
      support: event.target.value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();

    if (!this.state.support) {
      alert("Let us know how well you were supported!");
    } else {
      this.props.dispatch({
        type: "SET_SUPPORT",
        payload: this.state.support,
      });
      this.props.history.push("/comment");
    }
  };

  handleBackClick = (event) => {
    this.props.history.push("/understanding");
  };

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
            <input
              required
              type="number"
              placeholder="Support?"
              onChange={this.onInputChange}
            />
            <button onClick={this.handleClick}>Next</button>
          </form>
          <button onClick={this.handleBackClick}>Go Back</button>
        </div>
      </div>
    );
  }
}

export default connect()(SupportPage);
