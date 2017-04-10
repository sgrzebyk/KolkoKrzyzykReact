import React, { Component } from 'react';
import './App.css';
import {Router, browserHistory} from 'react-router';
import Routes from './Routes/index'

class App extends Component {
  render() {
//TOdO RUTOWANIE:  {/*https://css-tricks.com/learning-react-router/*/}
    return (
        <Router>
            <Route path="/" component={Home} />
            <Route path="/users" component={Users} />

        <Router/>

    );
  }
}

export default App;


<Route path="/" component={App} />