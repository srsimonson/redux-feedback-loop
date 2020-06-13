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
const firstReducer = (state = {}, action) => {
    if(action.type === 'GO_TO_FEELING') {
        console.log('in firstReducer - state, action.type:', state, action.type);
    } return state;

    // switch (action.type) {
    //     case 'GO_TO_FEELING':
    //         console.log('SUCCESS');
    //         const idk = action.payload;
    //         return idk;
    //     default:
    //         console.log('ERROR with testReducer');
    //         return state   
    // }
}

const secondReducer = (state = {}, action) => {
    if(action.type === 'GO_TO_UNDERSTANDING') {
        console.log('in secondReducer. state, action.type:', state, action.type);
    } return {};
}


// Create Redux Store
const reduxStore = createStore(
    combineReducers({
      firstReducer,
      secondReducer
      
    }),
    applyMiddleware(logger)
  )
  
  
  ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
