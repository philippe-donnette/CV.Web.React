import React, { Component } from 'react';
import PageHeader from './header/page-header';
import ProjectList from './projects/project-list';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions/index';

export class Projects extends Component {
    render() {
        let breadcrumbItems = [
            { iconClass: 'fa fa-home', title: 'Home', path: '/' }
        ];

        return (
            <div>
                <PageHeader iconClass="fa fa-suitcase" breadcrumbItems={breadcrumbItems}>Projects</PageHeader>
                <ProjectList projects={this.props.projects} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        projects: state.projects
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);