import React from 'react';
import ReactDom from 'react-dom';
import { say } from 'cowsay-browser';
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
      content: say({ text: faker.lorem.words(3) }),
    };
    this.cowSpeak = this.cowSpeak.bind(this);
  }

  cowSpeak() {
    const text = say({ text: faker.lorem.words(3) });
    this.setState(() => {
      return {
        content: text,
      };
    });
  }

  render() {
    return (
      <div>
        <HeaderComponent/>
        <p><pre>{ this.state.content }</pre></p>
        <button onClick={ this.cowSpeak }> Click Me! </button>
      </div>
    );
  }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
