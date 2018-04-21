import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import ReflectionList from '../ReflectionList/ReflectionList';
import ReflectionForm from '../ReflectionForm/ReflectionForm'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Oh, the places you've been</h1>
            <h4><i>Reflection Board</i></h4>
          </header>
          <ul>
            <li>
              <Link to='/'>Post Reflection</Link>
            </li>
            <li>
              <Link to='/past'>View Past Reflections</Link>
            </li>
          </ul>
          <br/>
          <Route exact path='/' component={ReflectionForm} />
          <Route path='/past' component={RelfectionList} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(App);
