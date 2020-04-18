import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";

class UnderstandingPage extends Component {
  state = {
    understanding: "",
  };

  onInputChange = (event) => {
    this.setState({
      understanding: event.target.value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();

    if (!this.state.understanding) {
      alert("Let us know how well you understood!");
    } else {
      this.props.dispatch({
        type: "SET_UNDERSTANDING",
        payload: this.state.understanding,
      });
      this.props.history.push("/support");
    }
  };

  handleBackClick = (event) => {
    this.props.history.push("/feeling");
  };

  render() {
    const classes = this.props;

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
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Understanding?"
              required
              type="text"
              placeholder="Understanding?"
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

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(UnderstandingPage);
