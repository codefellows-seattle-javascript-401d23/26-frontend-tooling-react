import cowsay from 'cowsay-browser';
import faker from 'faker';
import React from 'react';
import ReactDom from 'react-dom';
import '../style/main.scss';

class HeaderComponent extends React.Component {
  render() {
    // Zachary - this line returns JSX
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
      message: 'Gregor is really REALLY COOL!',
      secretState: 'Keep it quiet, keep it safe',
      content: 'a',
      wordCount: 1,
    };
    this.handleContentMessage = this.handleContentMessage.bind(this);
    this.setContent = this.setContent.bind(this);
  }

  handleContentMessage(value) {
    this.setState(() => {
      return {
        content: faker.random.words(value),
      };
    });
  }

  setContent(e) {
    const { value } = e.target;
    console.log(e.target);
    this.setState(() => {
      return {
        wordCount: value,
      };
    });
  }

  render() {
    // Zachary - line 38 is rendering the results of a MAP
    //  - line 39 is rendering the individual name
    return (
          <div>
            <HeaderComponent/>
        <pre> { cowsay.say({ text: this.state.content }) }</pre>
              <button onClick={() => this.handleContentMessage(this.state.wordCount) }> Click Me Human! </button>
              <select onChange={ this.setContent }>
                <option value= { 2 }> 2 words </option>
                <option value= { 10 }> 10 words </option>
                <option value= { 20 }> 20 words </option>
              </select>
              </div>
    );
  }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);

