'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import Faker from 'faker';
import Cowsay from 'cowsay-browser';


import '../style/main.scss';

class HeaderComponent extends React.Component {
  render() {
    return (
      <header>
        <h1>GENERATE COWSAY LOREM</h1>
      </header>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: Cowsay.say({
        text: Faker.lorem.words(5),
        e: 'oO',
        T: 'U',
      }),
    };
    this.handleCowsayLorem = this.handleCowsayLorem.bind(this);
  }

  handleCowsayLorem() {
    this.setState(() => {
      return {
        content: Cowsay.say({
          text: Faker.lorem.words(5),
          e: 'oO',
          T: 'U',
        }),
      };
    });
  }

  render() {
    return (
      <div>
        <HeaderComponent/>
        <pre>{this.state.content}</pre>
        <button onClick={ this.handleCowsayLorem }> Click here for moooo cowsay! </button>
      </div>
    );
  }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
