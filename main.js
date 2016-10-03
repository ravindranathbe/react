import React from 'react';
import ReactDOM from 'react-dom';

// == Tutorial ==
// Source: http://buildwithreact.com/tutorial
ReactDOM.render(<h1>Welcome!</h1>, document.getElementById('app'));
// == Tutorial End ==

// == Hello App ==
// import HwApp from './HwApp.jsx';
// ReactDOM.render(<HwApp/>, document.getElementById('app'));
// == Hello App End ==

// == Examples ==
/*
import HelloApp from './HelloApp.jsx';
var v_attr2 = 1;
ReactDOM.render(<HelloApp attr1="Ravi" attr2={v_attr2} />, document.getElementById('app'));
*/
// == Examples END == 

/*
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App.jsx';
import RouteEx from './RouteEx.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
*/

// ReactDOM.render(<App />, document.getElementById('app'));
// ReactDOM.render(<RouteEx />, document.getElementById('app'));
/* ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {RouteEx}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
      </Route>
   </Router>
	
), document.getElementById('app')); */

/*
import ReduxEx from './ReduxEx.jsx';
import todoApp from './reducers/reducers'

let store = createStore(todoApp)

render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
*/

/*
setTimeout(() => {
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));
}, 10000);
*/