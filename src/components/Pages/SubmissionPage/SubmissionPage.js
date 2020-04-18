import React, { Component } from "react";
import { connect } from "react-redux";

class SubmissionPage extends Component {
  handleClick = (event) => {
    this.props.dispatch({
      type: "RESET",
    });
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <div>
          <h2>Feedback!</h2>
        </div>
        <div>
          <h2>Thank You!</h2>
          <button onClick={this.handleClick}>Leave New Feedback</button>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(SubmissionPage);
