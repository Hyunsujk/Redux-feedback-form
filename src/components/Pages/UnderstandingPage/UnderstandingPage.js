import React, { Component } from "react";
import { connect } from "react-redux";

class UnderstandingPage extends Component {
  state = {
    understanding: 0,
  };

  onInputChange = (event) => {
    this.setState({
      understanding: event.target.value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();

    if (this.state.understanding === 0) {
      alert("Let us know how well you understood!");
    } else {
      this.props.dispatch({
        type: "SET_UNDERSTANDING",
        payload: this.state.understanding,
      });
      this.props.history.push("/support");
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
          <h1>How well are you understanding the content?</h1>
          <form>
            <input
              required
              type="number"
              placeholder="Understanding?"
              onChange={this.onInputChange}
            />
            <button onClick={this.handleClick}>Next</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(UnderstandingPage);
