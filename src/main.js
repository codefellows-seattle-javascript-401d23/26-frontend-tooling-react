import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';

import '../style/main.scss';

class HeaderComponent extends React.Component {
  render() {
    // this returns how the component will look like by using JSX.
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
      secretState: 'I will never be displayed',
    };
    this.cowMessage = this.cowMessage.bind(this);
    this.setCounter = this.setCounter.bind(this);
  }


  cowMessage() {
    this.setState((previousState) => {
      return {
        counter: cowsay.say({ text: faker.lorem.words(5) }),
      };
    });
  }

  setCounter(e) {
    const { value } = e.target;
    this.setState(() => {
      return {
        counter: value,
      };
    });
  }

  render() {
    return (
        <div>
          <HeaderComponent/>
          <pre> { this.state.counter } </pre>
          <button onClick={ this.cowMessage}> Click Me </button>
        </div>
    );
  }
}


const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
