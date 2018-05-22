import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';

import '../style/main.scss';


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
      <main>
      <div>
        <h1>Generate Cowsay Lorem</h1>
        <h2>A Silly Little App</h2>
        <p>
          <pre>{this.state.picture}</pre>
        </p>
        <button onClick={this.handleAnimalTalk}>Click Me</button>
      </div>
      </main>
    );
  }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
