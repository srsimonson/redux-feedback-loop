import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import { HashRouter as Router, Route, Link} from 'react-router-dom';

class Support extends Component {


  goToComments = () => {
    console.log('in goToComments');
  }

  render() {
    return (
      <div className="App">
          <h2>3 of 6: Support</h2>
          <input type="number"></input>
          <button onClick={this.goToComments}>Page 4: Comments</button>
      </div>
    );
  }
}


const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(Support);