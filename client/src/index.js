import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import mainReducer from './redux/reducers/mainReducer'
import thunk from 'redux-thunk'

const globalStore = createStore(mainReducer, applyMiddleware(thunk))

ReactDOM.render(
   <React.StrictMode>
      <Provider store={globalStore}>
         <App />
      </Provider>
   </React.StrictMode>,
   document.getElementById('root')
);
