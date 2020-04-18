import React, { Component } from "react";
import { connect } from "react-redux";

class FeelingPage extends Component {
  state = {
    feeling: 0,
  };

  onInputChange = (event) => {
    this.setState({
      feeling: event.target.value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();

    if (this.state.feeling === 0) {
      alert("Let us know how you feel!");
    } else {
      this.props.dispatch({ type: "SET_FEELING", payload: this.state.feeling });
      this.props.history.push("/understanding");
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
          <h1>How are you feeling today?</h1>
          <form>
            <input
              required
              type="number"
              placeholder="Feeling?"
              onChange={this.onInputChange}
            />
            <button onClick={this.handleClick}>Next</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(FeelingPage);
