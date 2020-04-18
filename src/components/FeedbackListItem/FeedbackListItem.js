import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";

class FeedbackListItem extends Component {
  render() {
    const classes = this.props;

    return (
      <tr>
        <td>{this.props.feedback.feeling}</td>
        <td>{this.props.feedback.understanding}</td>
        <td>{this.props.feedback.support}</td>
        <td>{this.props.feedback.comments}</td>
        <td>
          <button>
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
