import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ProjectNavLink extends Component {
    render() {
        return (
            <li>
                <NavLink to={{ pathname: '/projects', query: { id: this.props.project.id, name: this.props.project.name } }}>{this.props.project.name}</NavLink>
            </li>            
        );
    }
}

export default ProjectNavLink;