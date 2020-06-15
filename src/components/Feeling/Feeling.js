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
      console.log('hi', this.state.feelingData);
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
          <h2>How are you feeling about the course this week?</h2>
          <p>1=low 5=high</p>
          <input type="number" max="5" onChange={this.captureFeelingData}></input>
          <button onClick={this.submitFeelingData}>Next: Understanding</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(Feeling);