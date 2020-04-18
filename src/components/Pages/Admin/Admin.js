import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class Admin extends Component {
  state = {
    feeling: "",
  };

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    axios
      .get("/feedback")
      .then((response) => {
        console.log(response.data);
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
        <div></div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Admin);
