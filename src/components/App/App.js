import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from 'react-redux';
import ReflectionNavBar from '../ReflectionNavBar/ReflectionNavBar'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ReflectionNavBar />
        </div>
      </Router>
    );//end return
  };//end render 
};//end App Class

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(App);
