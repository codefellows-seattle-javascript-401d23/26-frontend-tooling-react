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
      content: cowsay.think({ text: faker.lorem.words(3) }),
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState(() => {
      return { content: cowsay.think({ text: faker.lorem.words(3) }) };
    });
  }

  render() {
    return (
      <div>
        <Header/>
        <pre>{ this.state.content }</pre>
        <button onClick={ this.handleButtonClick }>CLICK ME</button>
      </div>
    );
  }
}

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App/>, root);
