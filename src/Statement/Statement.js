import React from 'react';
import { Provider } from 'react-redux';
import StatementContainer from './StatementContainer'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose} from 'redux'
import reduxthunk from './Reducer'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reduxthunk, composeEnhancers (applyMiddleware(thunk))
);




function Statement () {
  return (
    <Provider store={store}>
      <div className='statement'>
        <StatementContainer />
      </div>
    </Provider>
    
  )
}

export default Statement;