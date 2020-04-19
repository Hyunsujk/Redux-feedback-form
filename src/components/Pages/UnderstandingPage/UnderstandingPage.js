import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class UnderstandingPage extends Component {
  state = {
    understanding: "",
  };

  // capture entered value
  onInputChange = (event) => {
    this.setState({
      understanding: event.target.value,
    });
  };

  //store the entered value to the reducer and guide user to next page
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

  // take user back to previous page
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
        <div className={classes.root}>
          <h1>How well are you understanding the content?</h1>
          <form noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Understanding?"
              required
              type="text"
              placeholder="1-5"
              onChange={this.onInputChange}
            />
            <Button variant="contained" onClick={this.handleClick}>
              Next
            </Button>
          </form>
          <div className="btn-back">
            <Button variant="contained" onClick={this.handleBackClick}>
              Go Back
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(UnderstandingPage);
