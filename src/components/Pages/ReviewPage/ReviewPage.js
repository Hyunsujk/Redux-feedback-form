import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class ReviewPage extends Component {
  handleSubmit = (event) => {
    const feedback = {
      feeling: this.props.store.feedbackReducer.feeling,
      understanding: this.props.store.feedbackReducer.understanding,
      support: this.props.store.feedbackReducer.support,
      comment: this.props.store.feedbackReducer.comment,
    };

    console.log(feedback);
    axios
      .post("/feedback", feedback)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/submission");
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Review Your Feedback</h1>
        <h3>Feelings:{this.props.store.feedbackReducer.feeling}</h3>
        <h3>Understanding:{this.props.store.feedbackReducer.understanding}</h3>
        <h3>Support:{this.props.store.feedbackReducer.support}</h3>
        <h3>Comment:{this.props.store.feedbackReducer.comment}</h3>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ReviewPage);
