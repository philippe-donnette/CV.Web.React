import React, { Component } from 'react';
import PageHeader from './header/page-header';

class Projects extends Component {
    render() {
        let breadcrumbItems = [
            { iconClass: 'fa fa-home', title: 'Home', path: '/' }
        ];

        return (
            <div>
                <PageHeader iconClass="fa fa-suitcase" breadcrumbItems={breadcrumbItems}>Projects</PageHeader>
            </div>
        );
    }
}

export default Projects;