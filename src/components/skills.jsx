import React, { Component } from 'react';
import PageHeader from './header/page-header';

class Skills extends Component {
    render() {
        let breadcrumbItems = [
            { iconClass: 'fa fa-home', title: 'Home', path: '/' }
        ];

        return (
            <div>
                <PageHeader iconClass="glyphicon glyphicon-wrench" breadcrumbItems={breadcrumbItems}>Skills</PageHeader>
            </div>
        );
    }
}

export default Skills;