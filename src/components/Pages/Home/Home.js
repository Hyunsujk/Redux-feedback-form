import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Home extends Component {
  handleClick = () => {
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
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={this.handleClick}
          >
            Let us know how your day was!
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
