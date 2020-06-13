import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import { HashRouter as Router, Route, Link} from 'react-router-dom';

class Submit extends Component {


  goToBeginning = () => {
    console.log('in goToBeginning');
  }

  render() {
    return (
      <div className="App">
          <h2>6 of 6: Success</h2>
          <button onClick={this.goToBeginning}>Page 0: Home</button>
      </div>
    );
  }
}


const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(Submit);