import React, { Component } from 'react';
import PageHeader from './header/page-header';
import ProjectView from './projects/project-view';
import ErrorNotFound from './error/error-not-found';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions/index';
import SkillModal from './tag-cloud/skill-modal';
import $ from 'jquery';

export class Project extends Component {
    
    constructor(props) {
        super(props);
        this.state = { skill: null };
    }

    componentWillMount() {
        if (this.props.project !== null) {
            this.props.actions.getProjectSkills(this.props.project.id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.project !== null && this.props.project.id !== nextProps.project.id) {
            this.props.actions.getProjectSkills(nextProps.project.id);
        }
    }

    openSkill(skill) {
        this.setState(
            { skill: skill }, 
            () => { 
                $('#skill-modal-project').modal('show');
            }
        );
    }

    render() {
        let breadcrumbItems = [
            { iconClass: 'fa fa-home', title: 'Home', path: '/' },
            { iconClass: 'fa fa-suitcase', title: 'Projects', path: '/projects' }
        ];

        if (this.props.project === null) {
            return (<ErrorNotFound>Project could not be found</ErrorNotFound>);
        }

        return (
            <div>
                <PageHeader iconClass="fa fa-suitcase" breadcrumbItems={breadcrumbItems}>{this.props.project.name}</PageHeader>
                <ProjectView 
                    project={this.props.project} 
                    onSkillClicked={this.openSkill.bind(this)} 
                    skills={this.props.skills}
                />
                <SkillModal skill={this.state.skill} modalId="skill-modal-project" />
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
        project: project,
        skills: state.skills
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);