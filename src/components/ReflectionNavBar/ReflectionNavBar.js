import React, { Component } from "react";
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import {Link, Route } from 'react-router-dom';
import ReflectionList from '../ReflectionList/ReflectionList';
import ReflectionForm from '../ReflectionForm/ReflectionForm'
 

class ReflectionNavBar extends Component {
    state = {
        selectedTab: '',
    }

    handleTabClick = (event, value) => {
        this.setState({ selectedTab: value });
    }

render(){
    return (
        <AppBar>
            <header className="App-header">
                <h1 className="App-title">Oh, the places you've been</h1>
                <h4><i>Reflection Board</i></h4>
            </header>
            <Tabs centered >
                <Tab label='Post Reflection' component={Link} to='/form'/>
                <Tab label='View Past Reflections' component={Link} to='/'/>
            </Tabs>
            <Route path='/form' component={ReflectionForm} />
            <Route exact path='/' component={ReflectionList} />
        </AppBar>
    );//end return
};//end render
};//end class ReflectionNavBar


export default ReflectionNavBar;