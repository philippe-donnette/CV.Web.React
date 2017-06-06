import React, { Component } from 'react';
import PageHeader from './header/page-header';

class AboutMe extends Component {
    render() {
        let breadcrumbItems = [
            { iconClass: 'fa fa-home', title: 'Home', path: '/' }
        ];

        return (
            <div>
                <PageHeader iconClass="fa fa-user" breadcrumbItems={breadcrumbItems}>About Me</PageHeader>
            </div>
        );
    }
}

export default AboutMe;