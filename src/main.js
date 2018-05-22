import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import cowsay from 'cowsay-browser';
import './style/main.scss';

class Header extends React.Component {
  render() {
    return (<header>
      <h1>Generate Cowsay Lorem</h1>
    </header>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: cowsay.say({ text: `${faker.lorem.words(3)}` }),
    };
    this.handleCowsayMessage = this.handleCowsayMessage.bind(this);
  }

  handleCowsayMessage() {
    this.setState(() => {
      return {
        content: cowsay.say({ text: `${faker.lorem.words(3)}` }),
      };
    });
  }

  render() {
    return (
      <div>
        <Header/>
        <button onClick = { this.handleCowsayMessage }> click me </button>
        <pre> { this.state.content } </pre>
      </div>
    );
  }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
