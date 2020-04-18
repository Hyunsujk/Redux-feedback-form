import React, { Component } from "react";
import { connect } from "react-redux";
import FeedbackListItem from "../FeedbackListItem/FeedbackListItem";

class FeedbackList extends Component {
  render() {
    const feedbackList = this.props.store.listReducer.map((item, index) => {
      return <FeedbackListItem key={index} feedback={item} />;
    });
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Feeling</th>
              <th>Comprehension</th>
              <th>Support</th>
              <th>Comments</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{feedbackList}</tbody>
        </table>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(FeedbackList);
