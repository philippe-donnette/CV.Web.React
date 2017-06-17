import React, { Component } from 'react';
import TagCloud from '../tag-cloud/tag-cloud';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../redux/actions/index';

export class ProjectView extends Component {
    
    componentWillMount() {
        this.props.actions.getProjectSkills(this.props.project.id);
    }
    
    render() {
        const htmlDescription = { __html: this.props.project.description };
        return (
            <div className="row well dn-project-well">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 text-center">
                    <img 
                        src={`./assets/${this.props.project.primaryImage}`} 
                        className="img-responsive dn-img-main-project"
                        alt={this.props.project.name} title={this.props.project.name} 
                    />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12" dangerouslySetInnerHTML={htmlDescription}>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <hr className="dn-star-light dn-project-star-light" />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <TagCloud 
                        items={this.props.skills} 
                        isInContainer={true} 
                        modalId="skill-modal-project" 
                        onTagClicked={this.props.onSkillClicked.bind(this)} 
                    />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectView);