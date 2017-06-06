import React, { Component } from 'react';
import PageHeader from './header/page-header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions/index';

export class Project extends Component {
    render() {
        let breadcrumbItems = [
            { iconClass: 'fa fa-home', title: 'Home', path: '/' },
            { iconClass: 'fa fa-suitcase', title: 'Projects', path: '/projects' }
        ];

        if (this.props.project === null) {
            return (<div>Project could not be found</div>);
        }

        return (
            <div>
                <PageHeader iconClass="fa fa-suitcase" breadcrumbItems={breadcrumbItems}>{this.props.project.name}</PageHeader>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    let matches = state.projects.filter(x => { 
        return x.id == ownProps.match.params.id; 
    });
    let project = null;
    if (matches.length === 1) {
        project = matches[0];
    }
    return {
        project: project
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);