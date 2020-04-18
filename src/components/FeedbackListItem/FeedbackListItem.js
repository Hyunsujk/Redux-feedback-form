import React, { Component } from "react";
import { connect } from "react-redux";

class FeedbackListItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.feedback.feeling}</td>
        <td>{this.props.feedback.understanding}</td>
        <td>{this.props.feedback.support}</td>
        <td>{this.props.feedback.comments}</td>
        <td>
          <button>delete</button>
        </td>
      </tr>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(FeedbackListItem);
