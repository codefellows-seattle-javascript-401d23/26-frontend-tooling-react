import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';

import '../style/main.scss';

// The headerComponent is called on line 51 when this page is rendered.
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

// this creates the App Component
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // this create a property on the state (this is not functional at this time!!!!!!!!!!!!!!!!!)
      content: cowsay.say({ text: faker.lorem.words(5) }),
      secretState: 'I will never be displayed',
    };
    // binding this
    this.content = this.content.bind(this);
  }

  // this creates the cowsay cow with a new message
  content() {
    this.setState(() => {
      return {
        content: cowsay.say({ text: faker.lorem.words(5) }),
      };
    });
  }

  // below is the event listener that changes the state.
  setCow(e) {
    const { value } = e.target;
    this.setState(() => {
      return {
        cow: value,
      };
    });
  }
  // Below is how the app changes the state of the cow.
  render() {
    return (
        <div>
          <HeaderComponent/>
          <pre> { this.state.content } </pre>
          <button onClick = { this.content }> Click Me </button>
        </div>
    );
  }
}

// below create the div element, appends a child, React renders the App Component
const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
