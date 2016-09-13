import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

import App from './App.jsx';
import RouteEx from './RouteEx.jsx';
import Home from './Home.jsx';
import About from './About.jsx';

// ReactDOM.render(<App />, document.getElementById('app'));
// ReactDOM.render(<RouteEx />, document.getElementById('app'));
ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {RouteEx}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
      </Route>
   </Router>
	
), document.getElementById('app'));

/*
setTimeout(() => {
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));
}, 10000);
*/