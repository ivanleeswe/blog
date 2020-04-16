import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

//index.js, App.js, reducers index.js,postlist,  actions index.js, postlist componentdidmount, api,action inddex async wait,
//thunk applymiddleware in index.js/src--hooking up middleware to redux store, postreducer, postlist, renderlist, fetchuser action reducer,
//Userheader, ownprops, fetchuser, fetchpostsandusers, change in postlist fetchpostsandusers