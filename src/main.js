import React from 'react';
import ReactDom from 'react-dom';

import '../style/main.scss';


class HeaderComponent extends React.Component {
  render() {
    return(
      <header>
        <h1>Hello World from Jennifer</h1>
      </header>
    );
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      message: 'Darwin is super cool.',
      secretState: 'I will never be displayed',
    };
    this.handleCounterIncrement = this.handleCounterIncrement.bind(this);
    this.handleCounterDecrement = this.handleCounterDecrement.bind(this);
    this.setCounter = this.setCounter.bind(this);
  }

  handleCounterIncrement() {
    this.setState((previousState) => {
      return {
        counter: previousState.counter + 1,
      };
    });
  }

  handleCounterDecrement() {
    this.setState((previousState) => {
      return {
        counter: previousState.counter - 1,
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
        <h2> Hey, I am an h2.</h2>
        <p> Hey! This is a random number: { Math.random } </p>,
        <p>Here is a message from the developer: {this.state.message}</p>
        <ul>{
          ['Darwin', 'Cocoa', 'Conker'].map(content => <li key={content}> { content }</li>)
        }
        </ul>
        <p> The value of my counter is { this.state.counter }</p>
        <button onClick={this.handCounterIncrement}>Increment Counter</button>
        <button onClick={this.handCounterDecrement}>Decrement Counter</button>
        <input type='number' onChange={this.setCounter} value={this.state.counter}/>
      </div>
    );
  }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
