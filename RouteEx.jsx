import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

class RouteEx extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to={'/home'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default RouteEx;