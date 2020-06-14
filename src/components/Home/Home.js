import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import { HashRouter as Router, Route, Link} from 'react-router-dom';

class Home extends Component {

  startSurvey = () => {
      console.log('hello from home.js');
      
// Home doesn't need dispatch or connect to store. Just a GO_TO_FEELING. Or remove from redux altogether because it's not contributing data anyway. Just this.props.history.push...

    this.props.dispatch({
        type: 'START_SURVEY',
    })
      this.props.history.push('/Feeling');
  }

  render() {
    return (
      <div className="App">
            <h2>0 of 6: HOME</h2>
            
            <div>
                <button onClick={this.startSurvey}>Page 1: Start Survey</button>
            </div>

      </div>
    );
  }
}


const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(Home);