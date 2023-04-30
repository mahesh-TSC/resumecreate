import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "malhotramahesh2003@gmail.com",
            linked: "https://www.linkedin.com/in/mahesh-kumar-prajapat-484852192/",
            github: "https://www.github.com/mahesh-TSC/",
        }
    }
    render() {
        return (
            <div>
                <h1>Social Links</h1>
                <div className='identity'>
                    <p><b>Email: </b> {this.state.email}</p>
                    <p><b>LinkedIn: </b> {this.state.linked}</p>
                    <p><b>GitHub: </b> {this.state.github}</p>
                </div>
            </div>
        );
    }
}

export default About;