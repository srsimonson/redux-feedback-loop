import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Things I added
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


// Reducers
const testReducer = (state=[], action) => {
    switch (action.type) {
        case 'I_D_K':
            console.log('in testReducer');
            const idk = action.payload;
            return idk;
        default:
            console.log('Error with testReducer');
            return state   
    }
}


// Create Redux Store
const reduxStore = createStore(
    combineReducers({
      testReducer
      
    }),
    applyMiddleware(logger)
  )
  
  
  ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
