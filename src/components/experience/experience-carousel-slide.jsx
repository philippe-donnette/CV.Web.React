import React, { Component } from 'react';
import moment from 'moment';
import TagCloud from '../tag-cloud/tag-cloud';

export class ExperienceCarouselSlide extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        let website = null;
        if (this.props.experience.websiteUrl != null) {
            website = (
                <a href={this.props.experience.websiteUrl} target="_blank" className="btn dn-btn-website btn-default" role="button">
                    <i className="fa fa-globe"></i> Website
                </a>
            );
        }

        const htmlDescription = { __html: this.props.experience.description.replace(/.\/images\/experience\/clients\//g, './assets/') };

        return (
            <div className={this.props.active ? 'active item' : 'item'}>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div className="text-center">
                        <h2 className="dn-experience-h2" alt={this.props.experience.companyName} title={this.props.experience.companyName}>
                            {this.props.experience.companyName}
                        </h2>
                    </div>
                    <div className="text-center">
                        <img 
                            src={'./assets/' + this.props.experience.imageUrl} 
                            className={'img-thumbnail img-circle dn-img-thumbnail-' + this.props.classNameSuffix} 
                            alt={this.props.experience.companyName + ' logo'} 
                            title={this.props.experience.companyName + ' logo'} 
                        />
                    </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 text-center">
                            <h3 className="dn-experience-h3" alt={this.props.experience.roleTitle} title={this.props.experience.roleTitle}>
                                <i className="fa fa-black-tie"></i> {this.props.experience.roleTitle}
                            </h3>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 text-center">
                            <h4 className="dn-h4 dn-experience-h4">
                                <i className="fa fa-calendar"></i> {moment(this.props.experience.startDate).format('MMM YYYY')} - {this.props.experience.endDate == null ? 'Present' : moment(this.props.experience.endDate).format('MMM YYYY')} <i className="fa fa-calendar"></i>
                            </h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 dn-experience-description" dangerouslySetInnerHTML={htmlDescription}>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-right">
                    {website}
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <hr className="dn-star-light dn-experience-star-light" />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <TagCloud 
                        items={this.props.experience.skills} 
                        isInContainer={true} 
                        modalId="skill-modal-experience" 
                        onTagClicked={this.props.onSkillClicked.bind(this)} 
                    />
                </div>
            </div>
        );
    }
}

export default ExperienceCarouselSlide;