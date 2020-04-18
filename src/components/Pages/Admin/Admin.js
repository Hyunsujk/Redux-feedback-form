import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import FeedbackList from "../../FeedbackList/FeedbackList";

class Admin extends Component {
  componentDidMount() {
    this.getList();
  }

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
        <FeedbackList />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Admin);
