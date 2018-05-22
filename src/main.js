'use strict';

import cowsay from 'cowsay-browser';
import faker from 'faker';
import React from 'react';
import ReactDom from 'react-dom';
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
      cowType: 'default',
      message: faker.lorem.words(5),
      secretState: 'I will never be displayed.',
    };
    this.handleCowsayGenerator = this.handleCowsayGenerator.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleCowsayGenerator() {
    this.setState({
      message: faker.lorem.words(5)
    });
  }

  handleChange(event) {
    this.setState({ cowType: event.target.value });
  }

  render() {
    return (
      <div>
        <HeaderComponent/>
        <pre>{ cowsay.say({ text: this.state.message, f: this.state.cowType }) }</pre>
        <button onClick={ this.handleCowsayGenerator }> click me </button>
        <select onChange={ this.handleChange }>
          <option value='cow'>cow</option>
          <option value='squirrel'>squirrel</option>
          <option value='dragon'>dragon</option>
          <option value='elephant'>elephant</option>
          <option value='doge'>doge</option>     
        </select>
      </div>
    );
  }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
