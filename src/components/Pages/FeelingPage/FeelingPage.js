import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class FeelingPage extends Component {
  state = {
    feeling: "",
  };

  onInputChange = (event) => {
    this.setState({
      feeling: event.target.value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    if (!this.state.feeling) {
      alert("Let us know how you feel!");
    } else {
      this.props.dispatch({ type: "SET_FEELING", payload: this.state.feeling });
      this.props.history.push("/understanding");
    }
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
          <h1>How are you feeling today?</h1>
          <form noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Feeling?"
              required
              text="number"
              placeholder="Feeling?"
              onChange={this.onInputChange}
            />
            <Button variant="contained" onClick={this.handleClick}>
              Next
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(FeelingPage);
