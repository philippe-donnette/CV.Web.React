import React, { Component } from 'react';
import PageHeader from './header/page-header';
import TagCloud from './tag-cloud/tag-cloud';
import SkillModal from './tag-cloud/skill-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions/index';

export class Skills extends Component {
    
    constructor(props) {
        super(props);
        this.state = { skill: null };
    }

    componentWillMount() {
        this.props.actions.getSkills();
    }

    openSkill(skill) {
         this.setState(
            { skill: skill }, 
            () => { 
                $('#skill-modal-main').modal('show');
            }
        );
     }

    render() {
        let breadcrumbItems = [
            { iconClass: 'fa fa-home', title: 'Home', path: '/' }
        ];

        return (
            <div>
                <PageHeader iconClass="glyphicon glyphicon-wrench" breadcrumbItems={breadcrumbItems}>Skills</PageHeader>
                <div className="dn-skills-container">
                    <TagCloud 
                        items={this.props.skills} 
                        isInContainer={false} 
                        modalId="skill-modal-main" 
                        onTagClicked={this.openSkill.bind(this)} 
                    />
                </div>
                <SkillModal skill={this.state.skill} modalId="skill-modal-main" />
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