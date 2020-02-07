import React, {Component} from 'react';
import logo from './logo.svg';
import history from '../src/website/views/history';
import {Switch,Route,Redirect} from 'react-router-dom'
import {Router} from "react-router-dom";
import './App.css';
import FrontPage from "./website/views/Pages/FrontPage";
import WebPage from "./website/views/WebPage";


class App extends Component {

    render() {
  return (
    <div className="App">
      <div className="App-header">

          <Router history={history}>
            <Route exact path="/" component={FrontPage} />
          </Router>

      </div>
    </div>
  )
    }
}

export default App;
