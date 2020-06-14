import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import { HashRouter as Router, Route, Link} from 'react-router-dom';


class Understanding extends Component {
    
    state = {
        understandingData: ''
    }
    
    captureUnderstandingData = (event) => {
        console.log('event.target.value', event.target.value);
        this.setState({
            understandingData: event.target.value
        })
    }

    submitUnderstandingData = () => {
        this.props.dispatch({
            type: 'SUBMIT_UNDERSTANDING_DATA',
            payload: this.state.understandingData
        })
        this.props.history.push('/Support');
    }

  render() {
    return (
      <div className="App">
          <h2>2 of 6: Understanding</h2>
          <input type="number" onChange={this.captureUnderstandingData}></input>
          <button onClick={this.submitUnderstandingData}>Page 3: Support</button>
          <p>{JSON.stringify(this.props.reduxStore)}</p>
      </div>
    );
  }
}


const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(Understanding);