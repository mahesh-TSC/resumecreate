import React, { Component } from 'react';

class Education extends Component {
    constructor(props){
        super(props);
        this.state={
            Cname:"Poornima Group Of Colleges",
            Dname:"Btech",
            branch:"computer science and engineering",
            pyear:2023,
            cgpa:9.34

        }
    }
    render() {
        return (
            <div>
                <h1>Education Details</h1>
                <p><b>College Name:</b> {this.state.Cname}</p> 
                <p><b>Degree:</b> {this.state.Dname}</p> 
                <p><b>Branch:</b> {this.state.branch}</p> 
                <p><b>Passing Year:</b> {this.state.pyear}</p> 
                <p><b>Cgpa:</b> {this.state.cgpa}</p> 
            </div>
        );
    }
}

export default Education;