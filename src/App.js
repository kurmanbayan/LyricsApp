import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import MainPage from './Main/MainPage'

function Add() {
  return <div> Add page </div>
}


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light text-light bg-faded">
            <a className="navbar-brand text-white" href="#">Online shop</a>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/" className="nav-link text-white"> Home </Link>
                </li>
                <li className="nav-item">
                  <Link to="/add" className="nav-link text-white"> Features </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Pricing</a>
                </li>
              </ul>
              <span className="navbar-text">
                <a className="text-white"> Login / Register </a>
              </span>
            </div>
          </nav>

          <Route exact path="/" component={MainPage} />
          <Route path="/add" component={Add} />
        </div>
      </Router>
    );
  }
}

export default App;
