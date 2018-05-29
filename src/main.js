'use strict';

import cowsay from 'cowsay-browser';
import faker from 'faker';
import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Generate Cowsay Lorem</h1>
      </header>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'Click the button!',
      cowType: 'default',
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }
  handleButtonClick() {
    this.setState(() => {
      return { content: `${faker.commerce.product()} ${faker.commerce.product()}` };
    });
  }

  handleSelectChange(e) {
    const type = e.target.value;
    this.setState(() => {
      return { cowType: type };
    });
  }

  render() {
    return (
      <div>
        <Header/>
        <pre>{ cowsay.think({ text: this.state.content, f: this.state.cowType }) }</pre>
        <button onClick={ this.handleButtonClick }>CLICK ME</button>
        <select onChange={ this.handleSelectChange }>
          <option>--Change Animal Type--</option>
          <option value="dragon">Dragon</option>
          <option value="turtle">Turtle</option>
          <option value="stegosaurus">Fancy Stegosaurus</option>
          <option value="meow">Tiger</option>
        </select>
      </div>
    );
  }
}

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App/>, root);
