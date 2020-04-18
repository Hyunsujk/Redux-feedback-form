import React, { Component } from "react";
import { connect } from "react-redux";

class CommentPage extends Component {
  state = {
    comment: "",
  };

  onInputChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "SET_COMMENT",
      payload: this.state.comment,
    });
    this.props.history.push("/review");
  };

  handleBackClick = (event) => {
    this.props.history.push("/support");
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
          <h1>Any comments you want to leave?</h1>
          <form>
            <input
              required
              type="text"
              placeholder="Comments"
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

export default connect()(CommentPage);
