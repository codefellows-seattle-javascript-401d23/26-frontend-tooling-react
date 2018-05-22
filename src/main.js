'use strict';

import cowsay from 'cowsay-browser';
import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import '../style/main.scss';

class Header extends React.Component {
  render() {
    return (
      <h1>MooooSay</h1>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: faker.lorem.words(4),
      cowChar: 'cow',
      say: 'What Should I Say?',
    };
    this.handleCow = this.handleCow.bind(this);
    this.handleCowChar = this.handleCowChar.bind(this);
    this.handleCowSay = this.handleCowSay.bind(this);
  }

  handleCow() {
    this.setState({
      message: faker.lorem.words(4),
    });
  }

  handleCowChar(event) {
    this.setState({
      cowChar: event.target.value,
    });
  }

  handleCowSay(event) {
    this.setState({ say: event.target.value });
  }

  render() {
    return (
      <div>
        <Header/>
        <pre>{cowsay.say({ text: this.state.message, f: this.state.cowChar, e: 'O<' })}</pre>
        <select onChange = {this.handleCowChar}>
          <option value='cow'>Cow</option>
          <option value='stegosaurus'>Stegosaurus</option>
          <option value='dragon'>Dragon</option>          
          <option value='cheese'>Cheese</option>          
          <option value='kitty'>Kitty</option>          
          <option value='koala'>Koala</option>          
          <option value='sheep'>Sheep</option>          
          <option value='skeleton'>Skeleton</option>          
          <option value='moose'>Moose</option>          
          <option value='flaming-sheep'>Flaming Sheep</option>          
          <option value='daemon'>Daemon</option>          
          <option value='eyes'>Eyes</option>          
        </select>

        <form>
          <label>
            What does the CowSay?:
            <textarea value={this.state.say} onChange={this.handleCowSay} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button onClick = {this.handleCow}>What does the Random CowSay?</button>
      </div>
    );
  }
}
const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
