import React, { Component } from 'react';
import axios from 'axios';

// Things I added
import { connect } from 'react-redux';


class Feeling extends Component {

  goToUnderstanding = () => {
    console.log('in goToUnderstanding');
  }

  render() {
    return (
      <div className="App">
        <h2>1 of 6: Feeling</h2>
        
        <div>
            <button onClick={this.goToUnderstanding}>Page 2: Understanding</button>
        </div>

      </div>
    );
  }
}


const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(Feeling);