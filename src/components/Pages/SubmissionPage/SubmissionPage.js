import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { sizing } from "@material-ui/system";
import "./SubmissionPage.css";

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
      <div className="center">
        <Card className="card">
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
        </Card>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(SubmissionPage);
