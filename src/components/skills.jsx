import React, { Component } from 'react';
import PageHeader from './header/page-header';
import TagCloud from './tag-cloud/tag-cloud';
import SkillService from '../services/skill-service';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions/index';

class Skills extends Component {
    
    componentWillMount() {
        this.props.actions.getSkills();
    }

    render() {
        let breadcrumbItems = [
            { iconClass: 'fa fa-home', title: 'Home', path: '/' }
        ];

        return (
            <div>
                <PageHeader iconClass="glyphicon glyphicon-wrench" breadcrumbItems={breadcrumbItems}>Skills</PageHeader>
                <div className="dn-skills-container">
                    <TagCloud items={this.props.skills} isInContainer={false}></TagCloud>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        skills: state.skills
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills);