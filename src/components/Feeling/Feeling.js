import React, { Component } from 'react';
import axios from 'axios';

// Things I added
import { connect } from 'react-redux';


class Feeling extends Component {

  goToUnderstanding = () => {
    console.log('in goToUnderstanding');
    this.props.history.push('/Understanding');
  }

  render() {
    return (
      <div className="App">
        <h2>1 of 6: Feeling</h2>
        <input type="number"></input>
        <button onClick={this.goToUnderstanding}>Page 2: Understanding</button>
      </div>
    );
  }
}


const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(Feeling);