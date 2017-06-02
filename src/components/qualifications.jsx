import React, { Component } from 'react';
import PageHeader from './header/page-header';
import StudiesContainer from './qualifications/studies-container';
import TrainingsContainer from './qualifications/trainings-container';

class Qualifications extends Component {
    render() {
        let breadcrumbItems = [
            { iconClass: 'fa fa-home', title: 'Home', path: '/' }
        ];

        return (
            <div>
                <PageHeader iconClass="glyphicon glyphicon-education" breadcrumbItems={breadcrumbItems}>Qualifications</PageHeader>
                <StudiesContainer />
                <TrainingsContainer />
            </div>
        );
    }
}

export default Qualifications;