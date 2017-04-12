import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Home} from './Components/Home'
import {Users} from './Components/Users'

import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


ReactDOM.render(
    (
        <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/users" component={Users}/>
            </div>
        </Router>
    ),
  document.getElementById('root')
);
