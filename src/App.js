import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import Login from './login/login.js';
import Home from './home/home.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    let isloggedIn = {login:false};

  }

  submitHandler=(status)=>{
    console.log('HHHHHHH',status);

    if(status == true){
      console.log('can login');
     this.state.login = true;
     console.log(this.state.login)
    }
    else{
      console.log('dont')
    }
  }

  render() {
    return (
          <div className="App">
          <Login onSuccess={this.submitHandler.bind(this)} />
          </div>

    );
  }
}

export default App;
