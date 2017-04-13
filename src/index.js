import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Home} from './Components/Home'
import {Profile} from './Components/Profile'
import {NavDrawer} from './Components/NavDrawer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'



import {BrowserRouter as Router, Link, Route, browserHistory} from 'react-router-dom';
injectTapEventPlugin();

ReactDOM.render(
    (
            <MuiThemeProvider>
                <div>
                <NavDrawer/>
                    <main>
                    <Router history={browserHistory}>
                        <div>
                            <Route exact path="/" component={Home}/>
                            <Route path="/profile" component={Profile}/>
                        </div>
                    </Router>
                </main>
                </div>
            </MuiThemeProvider>
    ),
    document.getElementById('root')
);
