import React, { Component } from 'react';
import { connect } from 'react-redux';

class Submit extends Component {

  goToBeginning = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="App">
          <h2>6 of 6: Success</h2>
          <p>Thank you for filling this out. Click here to start over.</p>
          <button onClick={this.goToBeginning}>Page 0: Home</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(Submit);