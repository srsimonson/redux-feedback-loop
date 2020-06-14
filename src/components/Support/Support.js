import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    state = {
        supportData: ''
    }

    captureSupportData = (event) => {
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
          <input type="number" onChange={this.captureSupportData}></input>
          <button onClick={this.submitSupportData}>Page 4: Comments</button>
      </div>
    );
  }
}


const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(Support);