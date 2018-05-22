import React from 'react';
import ReactDom from 'react-dom';
import Faker from 'faker';
import Cowsay from 'cowsay';

import '../style/main.scss';

class HeaderComponent extends React.Component{
    render(){
        return(
            <header>
                <h1>Generate Cowsay Lorem</h1>
            </header>
        );
    }
}

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            content: null,
        };
    }
    handleButtonPush(){
        this.setState((previousState)=>{
            return{
                content:Faker.name.firstName(),
            };
        });
    }

    render() {
        return(
            <div>
                <HeaderComponent/>
                <body>
                    {
                        content=>Cowsay.think({text:this.state.content})
                    }
                </body>
                <button onClick={this.handleButtonPush}>click me</button>
            </div>
        );
    }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<app/>,rootNode);