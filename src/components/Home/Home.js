import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

  startSurvey = () => {
      this.props.history.push('/Feeling');
  }

  render() {
    return (
        <div className="App">
          <h2>0 of 6: HOME</h2>
          <button onClick={this.startSurvey}>Page 1: Start Survey</button>
          <p>{JSON.stringify(this.props.reduxStore.submitSurveyData)}</p>
        </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(Home);