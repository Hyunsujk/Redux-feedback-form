import React, { Component } from "react";
import { connect } from "react-redux";

class SupportPage extends Component {
  state = {
    support: 0,
  };

  onInputChange = (event) => {
    this.setState({
      support: event.target.value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();

    if (this.state.support === 0) {
      alert("Let us know how well you were supported!");
    } else {
      this.props.dispatch({
        type: "SET_SUPPORT",
        payload: this.state.support,
      });
      this.props.history.push("/comment");
    }
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
        </div>
      </div>
    );
  }
}

export default connect()(SupportPage);
