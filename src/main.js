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
            selectedAnimal: SQUIRREL,
        };
    }
    handleButtonPush(){
        this.setState((previousState)=>{
            return{
                content:Cowsay.think({
                    text:Faker.name.firstName(),
                    cow:selectedAnimal,
                    eyes:'pp',
                    tongue:'; ;',
                }),
            };
        });
    }

    render() {
        return(
            <div>
                <HeaderComponent/>
                <body>
                    {
                        state.content
                    }
                </body>
                <button onClick={this.handleButtonPush}>click me for new content</button>
                <ol class='vertical-menu'>
                <li><button onClick={selectedAnimal=SQUIRREL}>Talk with the Squirrel</button></li>
                <li><button onClick={selectedAnimal=COW}>Talk with the Cow</button></li>
                <li><button onClick={selectedAnimal=DRAGON}>Talk with the Dragon</button></li>
                <li><button onClick={selectedAnimal=KOALA}>Talk with the Koala</button></li>
                </ol>
                <pre></pre>
            </div>
        );
    }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<app/>,rootNode);