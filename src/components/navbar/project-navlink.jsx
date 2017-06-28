import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ProjectNavLink extends Component {
    render() {
        return (
            <li className="navlink-wrapper">
                <NavLink 
                    exact 
                    to={{ pathname: `/projects/${this.props.project.name}/${this.props.project.id}`, query: { id: this.props.project.id, name: this.props.project.name } }}
                    onClick={this.props.onClick.bind(this)}
                >
                    {this.props.project.name}
                </NavLink>
            </li>            
        );
    }
}

export default ProjectNavLink;