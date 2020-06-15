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
const submitSurveyData = (state = [], action) => {
    switch(action.type) {
        case 'SUBMIT_FEELING_DATA':
            return [...state, action.payload]
        case 'SUBMIT_UNDERSTANDING_DATA':
            return [...state, action.payload];
        case 'SUBMIT_SUPPORT_DATA':
            return [...state, action.payload];
        case 'SUBMIT_COMMENTS_DATA':
            return [...state, action.payload]
        case 'RESET_STORE':
            state = []
        default: 
            return state;
    }
};
// const resetStore = (state = [], action) => {
//     switch(action.type) {
//         case 'RESET_STORE':
//             state = null
//         default:
//             return state
//     }
// }

// Create Redux Store
const reduxStore = createStore(
    combineReducers({
        submitSurveyData,
        // resetStore
    }),
    applyMiddleware(logger)
  )

  ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
