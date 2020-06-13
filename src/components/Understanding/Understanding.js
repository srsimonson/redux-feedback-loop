import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import { HashRouter as Router, Route, Link} from 'react-router-dom';


class Understanding extends Component {


  goToSupport = () => {
    console.log('in goToSupport');
  }

  render() {
    return (
      <div className="App">
            <h2>2 of 6: Understanding</h2>
            
            <div>
                <button onClick={this.goToSupport}>Page 3: Support</button>
            </div>

      </div>
    );
  }
}


const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(Understanding);