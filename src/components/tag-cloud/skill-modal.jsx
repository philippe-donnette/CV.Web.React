import React, { Component } from 'react';
import ErrorModal from '../modal/error-modal';
import Modal from '../modal/modal';
import SkillRatings from './skill-ratings';
import SkillVersions from './skill-versions';

class SkillModal extends Component {
    render() {
        console.log('REFRESH SKILL MODAL');
        if (typeof this.props.skill !== 'undefined' && this.props.skill !== null) {
            const htmlDescription = { __html: this.props.skill.description };
            return (
                <Modal 
                    modalId={this.props.modalId} 
                    title={this.props.skill.name} 
                    titleIconClass={this.props.skill.iconClass}
                >    
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <ul className="list-unstyled">
                                <li>Experience: <SkillRatings max={10} rating={this.props.skill.experienceRating} /></li>
                                <li>Usage: <SkillRatings max={10} rating={this.props.skill.usageRating} /></li>
                                <li>Interest: <SkillRatings max={10} rating={this.props.skill.interestRating} /></li>
                                <li>Version: <SkillVersions versions={this.props.skill.versions} /></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-right">
                            <i className={'dn-icons-10x ' + this.props.skill.iconClass}></i>
                        </div>
                    </div>
                    <div className="well" dangerouslySetInnerHTML={htmlDescription}>
                    </div>
                </Modal>
            );
        } else {
            return (
                <ErrorModal modalId={this.props.modalId} title="Error">Skill not found</ErrorModal>
            );
        }
    }
}

export default SkillModal;