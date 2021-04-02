import React, { Component } from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Login from '../Login';
import SignUp from '../SignUp';

class Routes extends Component {

  render() {
      return (
          <div>
                <BrowserRouter>
                  <Switch>
                    <Route exact path="/" component = {SignUp}/>
                    <Route path="/login" component = {Login}/>
                  </Switch> 
                </BrowserRouter>
          </div>         
      )
    }
}

export default Routes;
