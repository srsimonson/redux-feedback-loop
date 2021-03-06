import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Review extends Component {

  submitSurveyClicked = (event) => {
      event.preventDefault();
      axios.post('/form', this.props.reduxStore.submitSurveyData)
      .then(response => {
        console.log('POST /form SUCCESS')
      })
      .catch(error => {
          console.log('ERROR with POST /form', error);
      })
      this.props.history.push('/Submit');
  }

  render() {
    return (
      <div className="App">
          <h2>Review</h2>
                <p>Feeling: {this.props.reduxStore.submitSurveyData[0]}</p>
                <p>Understanding: {this.props.reduxStore.submitSurveyData[1]}</p>
                <p>Supported: {this.props.reduxStore.submitSurveyData[2]}</p>
                <p>Comments: {this.props.reduxStore.submitSurveyData[3]}</p>
                <button onClick={this.submitSurveyClicked}>Submit Feedback</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(Review);