import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

class SubmissionPage extends Component {
  handleClick = (event) => {
    this.props.dispatch({
      type: "RESET",
    });
    this.props.history.push("/");
  };
  render() {
    const classes = this.props;

    return (
      <div>
        <div>
          <h2>Feedback!</h2>
        </div>
        <div className={classes.root}>
          <h2>Thank You!</h2>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClick}
          >
            Leave New Feedback
          </Button>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(SubmissionPage);
