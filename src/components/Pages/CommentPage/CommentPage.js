import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class CommentPage extends Component {
  state = {
    comment: "",
  };

  // capture entered value
  onInputChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  //store the entered value to the reducer and guide user to next page
  handleClick = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "SET_COMMENT",
      payload: this.state.comment,
    });
    this.props.history.push("/review");
  };

  // take user back to previous page
  handleBackClick = (event) => {
    this.props.history.push("/support");
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
          <h1>Any comments you want to leave?</h1>
          <form noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Comments"
              type="text"
              placeholder="Comments"
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

export default connect()(CommentPage);
