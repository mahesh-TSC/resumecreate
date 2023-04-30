import React, { Component } from 'react';
import { Intro,Greet, About, Education, Skill } from "./component"
import Header from './component/header/Header';
import "./App.css"
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Mahesh",
            counter: 0
        }
        this.incre = this.incre.bind(this);
        this.decre = this.decre.bind(this)
    };
    incre() {
        let { counter } = this.state;
        if (counter < 5) {
            counter++;
        }
        this.setState({ counter })
    }
    decre() {
        let { counter } = this.state;
        if (counter > 0) {
            counter--;
        }
        this.setState({ counter })
    }
    render() {
        return (
            <div>
                <header><Header/></header>
                {this.state.counter === 0 && (<div><h1>Hey Guys!! How are u </h1>
                    <h1>******************Welcome******************</h1>
                    <h1>This is my Portfolio</h1>
                    <h2>Please press Next</h2>
                    <h1>👇👇👇👇</h1></div>)}
                    
                <div className='identity'>
                    {this.state.counter === 1 && <Greet />}
                    {this.state.counter === 2 && <Intro />}
                    {this.state.counter === 3 && <About />}
                    {this.state.counter === 4 && <Education />}
                    {this.state.counter === 5 && <Skill />}
                    <div className='btn'>
                        {this.state.counter !== 0 && <button onClick={this.decre}>Prev</button>}
                        <button onClick={this.incre}>Next</button>
                    </div>
                </div>
                <footer>
                    <p>Copyright &copy; All Rights Reserved.</p>
                </footer>
            </div>
        );
    }
}

export default App;