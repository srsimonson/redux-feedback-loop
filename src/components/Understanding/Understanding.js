import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

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
          {/* <ValidatorForm ref="form" onSubmit={this.submitUnderstandingData} onError={errors => console.log(errors)}> */}
          
          <h2>2 of 6: Understanding</h2>
          {/* <TextValidator onChange={this.captureUnderstandingData} validators={['required']} errorMessages={['this field is required']}/> */}
          <input type="number" onChange={this.captureUnderstandingData}></input>
          <button onClick={this.submitUnderstandingData}>Page 3: Support</button>
          {/* </ValidatorForm> */}
      </div>
    );
  }
}


const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(Understanding);