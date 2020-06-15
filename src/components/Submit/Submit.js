import React, { Component } from 'react';
import { connect } from 'react-redux';

class Submit extends Component {

    state = {
        IDK: ''
    }

    captureSupportData = (event) => {
        this.setState({
            supportData: event.target.value
        })
    }

  submitSupportData = () => {
      console.log('hi', this.state;
        this.props.dispatch({
        type: 'RESET_STORE',
        payload: this.state
    })
    // this.props.history.push('/');
    }
}

  render() {
    return (
      <div className="App">
          <h2>6 of 6: Success</h2>
          <p>Thank you for filling this out. Click here to start over.</p>
          <button onClick={this.goToBeginning}>Page 0: Home</button>
          <p>{JSON.stringify(this.props.reduxStore.submitSurveyData)}</p> 
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(Submit);