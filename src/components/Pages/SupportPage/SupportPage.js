import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
          <h1>How well are you being supported?</h1>
          <form noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Support?"
              required
              type="number"
              placeholder="Support?"
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

export default connect()(SupportPage);
