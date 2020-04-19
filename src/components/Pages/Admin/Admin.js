import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import FeedbackList from "../../FeedbackList/FeedbackList";
import "./Admin.css";

class Admin extends Component {
  // after component is mounted, get list from database
  componentDidMount() {
    this.getList();
  }

  // get list of feedback from database and save it in reducer
  getList = () => {
    axios
      .get("/feedback")
      .then((response) => {
        console.log(response.data);
        this.props.dispatch({
          type: "SET_LIST",
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback Results!</h1>
        </header>
        <br />
        <FeedbackList getList={this.getList} />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Admin);
