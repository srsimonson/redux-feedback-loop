import React, { Component } from 'react';
import './App.css';

// Things I added
import { connect } from 'react-redux';
import { HashRouter as Router, Route} from 'react-router-dom';

// Import pages here 
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Submit from '../Submit/Submit';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>

          <Route exact path="/" component={Home}/>
          <Route path="/Feeling" component={Feeling}/>
          <Route path="/Understanding" component={Understanding}/>
          <Route path="/Support" component={Support}/>
          <Route path="/Comments" component={Comments}/>
          <Route path="/Review" component={Review}/>
          <Route path="/Submit" component={Submit}/>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(App);