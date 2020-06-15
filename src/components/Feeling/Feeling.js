import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {

    state = {
        feelingData: ''
    }

    captureFeelingData = (event) => {
        this.setState({
            feelingData: event.target.value
        })
    }

  submitFeelingData = () => {
      if (this.state.feelingData === '' || null) {
          alert ('Please submit score before moving on to next question.')
      } else {
        this.props.dispatch({
        type: 'SUBMIT_FEELING_DATA',
        payload: this.state.feelingData
    })
    this.props.history.push('/Understanding');
    }
}

  render() {
    return (
      <div className="App">
          <h2>1 of 6: Feeling</h2>
          <input type="number" onChange={this.captureFeelingData}></input>
          <button onClick={this.submitFeelingData}>Page 2: Understanding</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(Feeling);