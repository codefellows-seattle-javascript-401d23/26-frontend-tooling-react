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
          <h1>Hello World</h1>
        </header>
    );
        //  Above IS NOT html it's JSX!!!!!
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter:0,
      message: 'Yay!  I am in React',
      secretState: 'I will never be displayed',
    };
    this.handleCounterIncrement = this.handleCounterIncrement.bind(this);
    this.handleCounterDecrement = this.handleCounterDecrement.bind(this);
    // NOT DONE ---------------------------------------
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
   // NOT DONE-------------------------------------

  }

  render() {
    return(
        <div>
          <HeaderComponent/>
          <h2>More stuff...</h2>
          <p> this is a RANDOM NUMBER { MATH.random() } </p>
          <p> Here is a message from the developer: {this.state.message}</p>
          <ul>
            {
              ['Josh', 'Lacey', 'Aston'].map(content => <li key = { content }> { content }</li>)
            }
          </ul>
          <p>The Value of my counter is { this.state.counter } </p>
          <button onClick={ this.handleCounterIncrement}> Increment Counter </button>
          <button onClick={ this.handleCounterDecrement}> Increment Counter </button>
          <input type='number' value = {this.state.counter}/>
        </div>
    )
  }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
