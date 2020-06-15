import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
    
    state = {
        understandingData: ''
    }
    
    captureUnderstandingData = (event) => {
        this.setState({
            understandingData: event.target.value
        })
    }

    submitUnderstandingData = () => {
        if (this.state.understandingData === '' || null) {
            alert ('Please submit score before moving on to next question.')
        } else {
          this.props.dispatch({
          type: 'SUBMIT_UNDERSTANDING_DATA',
          payload: this.state.understandingData
      })
      this.props.history.push('/Support');
      }
  }

  render() {
    return (

      <div className="App">
          <h2>How well are you understanding the material?</h2>
          <p>1=low 5=high</p>
          <input type="number" max="5" onChange={this.captureUnderstandingData}></input>
          <button onClick={this.submitUnderstandingData}>Next: Support</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(Understanding);