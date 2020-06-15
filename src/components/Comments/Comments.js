import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    state = {
        commentsData: ''
    }

    captureCommentsData = (event) => {
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
          <h2>Additional Comments</h2>
          <textarea rows="10" cols="20" onChange={this.captureCommentsData} placeholder="Enter your comment here. (OPTIONAL)"></textarea>
          <button onClick={this.submitCommentsData}>Next: Review</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(Comments);