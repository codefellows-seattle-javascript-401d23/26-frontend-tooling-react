import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';

import '../style/main.scss';


class HeaderComponent extends React.Component {
  render() {
    return (
      <header>
        <h1>Hello Cow</h1>
      </header>
    );
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      picture: this.animalTalk(),
    };
    this.animalTalk = this.animalTalk.bind(this);
    this.handleAnimalTalk = this.handleAnimalTalk.bind(this);
  }

  animalTalk() {
    return cowsay.say({
      text: faker.random.words(3),
      e: '@@',
    });
  }
  handleAnimalTalk() {
    this.setState(() => {
      return {
        picture: this.animalTalk(),
      };
    });
  }

  render() {
    return (
      <div>
        <HeaderComponent/>
        <p>
          <pre>{this.state.picture}</pre>
          <button onClick={this.handleAnimalTalk}>Click Me</button>
        </p>
      </div>
    );
  }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
