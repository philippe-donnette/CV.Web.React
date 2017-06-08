import React, { Component } from 'react';
import PageHeader from './header/page-header';
import ExperienceCarousel from './experience/experience-carousel';

class Experience extends Component {
    render() {
        let breadcrumbItems = [
            { iconClass: 'fa fa-home', title: 'Home', path: '/' }
        ];

        return (
            <div>
                <PageHeader iconClass="fa fa-lightbulb-o" breadcrumbItems={breadcrumbItems}>Experience</PageHeader>
                <ExperienceCarousel />
            </div>
        );
    }
}

export default Experience;