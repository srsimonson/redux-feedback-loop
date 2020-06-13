import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import { HashRouter as Router, Route, Link} from 'react-router-dom';

class Home extends Component {

  goToFeeling = () => {
      console.log('hello from home.js');
      
    //Dispatch an action to the store. Connect gives us acceess
    this.props.dispatch({
        type: 'GO_TO_FEELING',
        // payload: response.data
    })

    //   this.props.history.push('/Feeling');
  }

  render() {
    return (
      <div className="App">
            <h2>0 of 6: HOME</h2>
            
            <div>
                <button onClick={this.goToFeeling}>Page 1: Feeling</button>
            </div>

      </div>
    );
  }
}


const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(Home);