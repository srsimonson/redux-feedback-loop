import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import { HashRouter as Router, Route, Link} from 'react-router-dom';

class Comments extends Component {


  goToReview = () => {
    console.log('in goToReview');
  }

  render() {
    return (
      <div className="App">
            <h2>4 of 6: Comments</h2>
            
            <div>
                <button onClick={this.goToReview}>Page 5: Review</button>
            </div>

      </div>
    );
  }
}


const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(Comments);