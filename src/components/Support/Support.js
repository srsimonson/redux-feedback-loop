import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import { HashRouter as Router, Route, Link} from 'react-router-dom';

class Support extends Component {

    state = {
        supportData: ''
    }

    captureSupportData = (event) => {
        console.log('event.target.value', event.target.value);
        this.setState({
            supportData: event.target.value
        })
    }

  submitSupportData = () => {
    this.props.dispatch({
        type: 'SUBMIT_SUPPORT_DATA',
        payload: this.state.supportData
    })
    this.props.history.push('/Comments');
}

  render() {
    return (
      <div className="App">
          <h2>3 of 6: Support</h2>
          {/* {/* <input type="number"></input> */}
          <input type="number" onChange={this.captureSupportData}></input>
          <button onClick={this.submitSupportData}>Page 4: Comments</button>
          {/* <p>{JSON.stringify(this.props.reduxStore)}</p> */}
      </div>
    );
  }
}


const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(Support);