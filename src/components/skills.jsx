import React, { Component } from 'react';
import PageHeader from './header/page-header';
import TagCloud from './tag-cloud/tag-cloud';
import SkillService from '../services/skill-service';
import { connect } from 'react-redux';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: []
        };
    }
    
    componentDidMount() {
        let skillService = new SkillService(this.props.settings.apiBaseURI);
        skillService.getSkills()
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({ skills: data });
            });
    }

    render() {
        let breadcrumbItems = [
            { iconClass: 'fa fa-home', title: 'Home', path: '/' }
        ];

        return (
            <div>
                <PageHeader iconClass="glyphicon glyphicon-wrench" breadcrumbItems={breadcrumbItems}>Skills</PageHeader>
                <div className="dn-skills-container">
                    <TagCloud items={this.state.skills} isInContainer={false}></TagCloud>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        settings: state.settings 
    };
}

export default connect(mapStateToProps)(Skills);