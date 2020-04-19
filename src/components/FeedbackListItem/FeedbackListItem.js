import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import axios from "axios";

class FeedbackListItem extends Component {
  // when delete button is clicked, send the id of the item to deleteFeedback function
  handleDelete = (event) => {
    const itemId = this.props.feedback.id;
    this.deleteFeedback(itemId);
  };

  // delete the data of the id in database and get updated list from the database.
  deleteFeedback = (id) => {
    axios
      .delete(`/feedback/${id}`)
      .then((response) => {
        console.log(response.data);
        this.props.getList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const classes = this.props;

    return (
      <tr>
        <td>{this.props.feedback.feeling}</td>
        <td>{this.props.feedback.understanding}</td>
        <td>{this.props.feedback.support}</td>
        <td>{this.props.feedback.comments}</td>
        <td>
          <button onClick={this.handleDelete}>
            <Grid item className={classes.root}>
              <DeleteSweepIcon />
            </Grid>
          </button>
        </td>
      </tr>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(FeedbackListItem);
