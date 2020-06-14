import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import { HashRouter as Router, Route, Link} from 'react-router-dom';

class Review extends Component {


  submitSurveyClicked = (event) => {
      event.preventDefault();
      console.log('this.props.reduxStore:', this.props.reduxStore.submitSurveyData[0]);
      
    //   axios.post('/form', this.props.reduxStore)
      // this.props.history.push('/Submit');
  }

  render() {
    return (
      <div className="App">
          <h2>5 of 6: Review</h2>
          <h3>Results</h3>
          <p>Feeling: {this.props.reduxStore.submitSurveyData[0]}</p>
          <p>Understanding: {this.props.reduxStore.submitSurveyData[1]}</p>
          <p>Supported: {this.props.reduxStore.submitSurveyData[2]}</p>
          <p>Comments: {this.props.reduxStore.submitSurveyData[3]}</p>
          {/* <p>{JSON.stringify(this.props.reduxStore.submitSurveyData)}</p>  */}
          <button onClick={this.submitSurveyClicked}>Page 6: Submit</button>
      </div>
    );
  }
}


const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(Review);