import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import { HashRouter as Router, Route, Link} from 'react-router-dom';


class Understanding extends Component {


  goToSupport = () => {
    this.props.history.push('/Support');  }

  render() {
    return (
      <div className="App">
          <h2>2 of 6: Understanding</h2>
          <input type="number"></input>
          <button onClick={this.goToSupport}>Page 3: Support</button>
      </div>
    );
  }
}


const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(Understanding);