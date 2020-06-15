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

  backButtonClicked = () => {
      console.log('in back to feeling');
      this.props.history.push('/Feeling');
  }

  render() {
    return (

      <div className="App">
          <h2>2 of 6: Understanding</h2>
          <input type="number" onChange={this.captureUnderstandingData}></input>
          <button onClick={this.submitUnderstandingData}>Page 3: Support</button>

          {/* Back button still needs to clear data of previous answer */}
          <button onClick={this.backButtonClicked}>Back TEST</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(Understanding);