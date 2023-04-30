import React, { Component } from 'react';

class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            programming: "C/C++",
            webDev: "HTML,CSS,Js",
            frame: "Reactjs,Nodejs"
        }
    }
    render() {
        return (
            <div>
                <h1>Skill:-</h1>
                <ul>
                    <li>{this.state.programming}</li>
                    <li>{this.state.webDev}</li>
                    <li>{this.state.frame}</li>
                </ul>
            </div>
        );
    }
}

export default Skill;