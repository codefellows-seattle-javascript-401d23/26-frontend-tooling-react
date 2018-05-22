import React from 'react';
import ReactDom from 'react-dom';
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
  render() {
    return (
      <div>
        <Header/>
      </div>
    );
  }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
