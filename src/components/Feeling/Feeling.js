import React, { Component } from 'react';
import axios from 'axios';

// Things I added
import { connect } from 'react-redux';

class Feeling extends Component {
    
    state = {
        feelingData: ''
    }

  captureFeelingData = (event) => {
    console.log('event.target.value', event.target.value);
    this.setState({
        feelingData: event.target.value
    })
}

  submitFeelingData = () => {
    this.props.dispatch({
        type: 'SUBMIT_FEELING_DATA',
        payload: this.state.feelingData
    })
    this.props.history.push('/Understanding');
  }

  render() {
    return (
      <div className="App">
        <h2>1 of 6: Feeling</h2>
        <input type="number" onChange={this.captureFeelingData}></input>
        <button onClick={this.submitFeelingData}>Page 2: Understanding</button>
        {/* <p>{JSON.stringify(this.props.reduxStore)}</p> */}
      </div>
    );
  }
}


const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(Feeling);