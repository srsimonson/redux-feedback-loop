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
// const goToFeeling = ( state = [], action) => {
//     if( action.type === 'GO_TO_FEELING' ) {
//         console.log('Reducer goToFeeling - state, action.type:', state, action.type);
//     } return state;
// };

// Reducers
const startSurvey = (state = [], action) => {
    switch(action.type) {
        case 'START_SURVEY':
            return [...state, action.payload]
        default: 
            return state;
    }
};

const submitFeelingData = (state = [], action) => {
    switch(action.type) {
        case 'SUBMIT_FEELING_DATA':
            return [...state, action.payload]
        default: 
            return state;
    }
};

const submitUnderstandingData = (state = [], action) => {
    switch(action.type) {
        case 'SUBMIT_UNDERSTANDING_DATA':
            return [...state, action.payload]
        default: 
            return state;
    }
};

const submitSupportData = (state = [], action) => {
    switch(action.type) {
        case 'SUBMIT_SUPPORT_DATA':
            return [...state, action.payload]
        default: 
            return state;
    }
};

const submitCommentsData = (state = [], action) => {
    switch(action.type) {
        case 'SUBMIT_COMMENTS_DATA':
            return [...state, action.payload]
        default: 
            return state;
    }
};


// Create Redux Store
const reduxStore = createStore(
    combineReducers({
        startSurvey,
        submitFeelingData,
        submitUnderstandingData,
        submitSupportData,
        submitCommentsData
      
    }),
    applyMiddleware(logger)
  )
  
  
  ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
