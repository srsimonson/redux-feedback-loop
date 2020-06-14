import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import { HashRouter as Router, Route, Link} from 'react-router-dom';

class Comments extends Component {

    state = {
        commentsData: ''
    }

    captureCommentsData = (event) => {
        console.log('event.target.value', event.target.value);
        this.setState({
            commentsData: event.target.value
        })
    }

    submitCommentsData = () => {
        this.props.dispatch({
            type: 'SUBMIT_COMMENTS_DATA',
            payload: this.state.commentsData
        })
        this.props.history.push('/Review');
    }

  render() {
    return (
      <div className="App">
          <h2>4 of 6: Comments</h2>
          <textarea rows="10" cols="20" onChange={this.captureCommentsData} placeholder="Enter your stupid opinion here"></textarea>
          <button onClick={this.submitCommentsData}>Page 5: Review</button>
          <p>{JSON.stringify(this.props.reduxStore)}</p>
      </div>
    );
  }
}


const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(Comments);