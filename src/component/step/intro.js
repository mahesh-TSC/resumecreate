import React, { Component } from 'react';

class intro extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Mahesh Kumar Prajapat",
            mobNo:9358570211,
            email:"malhotramahesh2003@gmail.com",
            place:"jaipur,Rajasthan",
            degi:"Software Engineer",
            orgname:"Tech Superiors consulting pvt. ltd.",
            location:"Gurgaon"
        }
    }
    render() {
        return (
            <div>
                <h1>Introduction</h1>
                <p><b>Name:</b> {this.state.name}</p> 
                <p><b>MobileNo.:</b> {this.state.mobNo}</p> 
                <p><b>Email:</b> {this.state.email}</p> 
                <p><b>Designation:</b> {this.state.degi}</p> 
                <p><b>Orgnization Name :</b> {this.state.orgname}</p> 
                <p><b>Location:</b> {this.state.location}</p> 
            </div>
        );
    }
}

export default intro;