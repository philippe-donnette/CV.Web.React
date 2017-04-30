import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <h1>Header Goes Here</h1>
                    <ul className="list-inline">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                    </ul>
                </div>
            </div>            
        );
    }
}

export default Header;