import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

  startSurvey = () => {
      this.props.history.push('/Feeling');
  }

  render() {
    return (
        <div className="App">
          <p>Please take a moment to fill out this survey.</p>
          <button onClick={this.startSurvey}> Start Survey</button>
          {/* <p>{JSON.stringify(this.props.reduxStore.submitSurveyData)}</p> */}
        </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(Home);