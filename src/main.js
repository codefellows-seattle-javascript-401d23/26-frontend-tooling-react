'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { say } from 'cowsay';
import faker from 'faker';
import '../style/main.scss';

class HeaderComponent extends React.Component {
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
      content: say({ text : 'cow incoming' }),
      secretState: 'I am a secret',
    };
    this.handleCowClick = this.handleCowClick.bind(this);
  }
  
  handleCowClick() {
    this.setState({
      content: say({ text : faker.lorem.words(3) }),
    })
  }
  
  render() {
    return (
      <div>
        <HeaderComponent/>
        <button onClick={ this.handleCowClick }> Random Cow Speech Creator </button>
        <pre> { this.state.content } </pre>
      </div>
    );
  }
}


const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
