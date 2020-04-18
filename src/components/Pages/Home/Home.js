import React, { Component } from "react";

class Home extends Component {
  handleClick = () => {
    this.props.history.push("/feeling");
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
        <button onClick={this.handleClick}>
          Let us know how your day was!
        </button>
      </div>
    );
  }
}

export default Home;
