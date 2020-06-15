import React, { Component } from 'react';
import { connect } from 'react-redux';

class Submit extends Component {
  goToBeginning = () => {
    this.props.dispatch({
        type: 'RESET_STORE',
    })
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="App">
          <h2>Success!</h2>
          <p>Thank you for filling this feedback form. Click the button below to start a new feedback form.</p>
          <button onClick={this.goToBeginning}>New Survey</button>
          {/* <p>{JSON.stringify(this.props.reduxStore.submitSurveyData)}</p>  */}
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(Submit);