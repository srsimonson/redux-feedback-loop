import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    state = {
        supportData: ''
    }

    captureSupportData = (event) => {
        this.setState({
            supportData: event.target.value
        })
    }

  submitSupportData = () => {
      console.log('hi', this.state.supportData);
      if (this.state.supportData === '' || null) {
          alert ('Please submit score before moving on to next question.')
      } else {
        this.props.dispatch({
        type: 'SUBMIT_SUPPORT_DATA',
        payload: this.state.supportData
    })
    this.props.history.push('/Comments');
    }
}

  render() {
    return (
      <div className="App">
          <h2>How supported do you feel by staff?</h2>
          <p>1=low 5=high</p>
          <input type="number" max="5" onChange={this.captureSupportData}></input>
          <button onClick={this.submitSupportData}>Next: Comments</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(Support);