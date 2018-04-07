import React, { Component } from 'react';
import Input from '../Input/Input.js';
import './login.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email : "Email",
      password : "Password"
    }
    console.log(props)
  }

  nameChange = (e) => {
    let newState={...this.state};
    newState[`${e.target.name}`] = e.target.value;
    console.log(newState);
    this.setState(newState);
  }

  buttonClick = (e,email) =>{
    if(this.state.email == 'demo@email.com' && this.state.password == '123456'){
      this.props.onSuccess(true);
    } else{
      this.props.onSuccess(false);
    }
    console.log(this.props.onSuccess)
  }


  render() {
    return (
      <div className="loginApp">
        <header className="App-header">   </header>
          <h1 className="App-title">Login</h1>
          <div className="input-wrap">
            <input placeholder="Email" onChange={this.nameChange}  name={'email'} value={this.state.email} />
           </div>
          <div className="input-wrap">
            <input placeholder="Password" type="password" name={'password'} value={this.state.password} onChange={this.nameChange} />
          </div>

          <button className="btn btn-primary" onClick={this.buttonClick.bind(this)}> Submit </button>
      </div>

    );
  }
}

export default Login;
