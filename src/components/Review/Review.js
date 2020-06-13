import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import { HashRouter as Router, Route, Link} from 'react-router-dom';

class Review extends Component {


  goToSubmitSuccess = () => {
    console.log('in goToSubmitSuccess');
  }

  render() {
    return (
      <div className="App">
          <h2>5 of 6: Review</h2>
          <h3>Results</h3>
          <p>Feeling:</p>
          <p>Understanding:</p>
          <p>Supported:</p>
          <p>Comments:</p>
          <button onClick={this.goToSubmitSuccess}>Page 6: Submit</button>
      </div>
    );
  }
}


const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(Review);