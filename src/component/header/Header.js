import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Intro</li>
                        <li>About</li>
                        <li>Education</li>
                        <li>Skills</li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;