import React, { Component, Fragment } from 'react';
import './App.css';
import Home from './components/Home'
import Rooms from './components/Room'
import SingleRoom from './components/SingleRoom'
import Error from './components/Error'
import {  Route, Switch } from "react-router-dom";

class App extends Component {
  render(){
  return (
<Fragment>
  <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms" component={Rooms} />
      <Route exact  path="/rooms/:slug" component={SingleRoom} />
      <Route  component={Error} />

    </Switch>
</Fragment>

  );
}}

export default App;
