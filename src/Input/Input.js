import React, { Component } from 'react';
import './input.css';

class Input extends Component {
  render() {
    return (
      <div className="input-wrap">
        <input name={this.props.name}  type={this.props.value} placeholder={this.props.value}/>
      </div>
    );
  }
}

export default Input;
