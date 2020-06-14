import React, { Component } from 'react';

// Things I added
import { connect } from 'react-redux';
// import Button from '@material-ui/core/Button';
import { Button, FormControl } from '@material-ui/core';

class Feeling extends Component {
    
    state = {
        feelingData: '',
        feelingDataError: ''
    }

  captureFeelingData = (event) => {
    this.setState({
        feelingData: event.target.value
    })
}

// validate = () => {
//     if (this.state.feelingData.length < 1) {
//         return false
//     }
// }

  submitFeelingData = () => {
    const validate = validate();
    
    if (!validate){
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
        <FormControl>
        <h2>1 of 6: Feeling</h2>
        <input type="number" onChange={this.captureFeelingData} errorText={this.state.feelingDataError}></input>
        <Button variant="contained" color="primary" onClick={this.submitFeelingData}>Page 2: Understanding</Button>
        </FormControl>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(Feeling);