import React, { Component } from 'react';
import moment from 'moment';

class StudyItem extends Component {
    render() {
        let image = <i className="fa fa-image dn-fa-10x"></i>;
        if (this.props.study.imageUrl != null) {
            image = (<img src={'./assets/' + this.props.study.imageUrl} alt={this.props.study.schoolName} />);
        }
        let certificate = null;
        if (this.props.study.degreeFile != null) {
            certificate = (<a href={'./assets/' + this.props.study.degreeFile} target="_blank" className="btn dn-bt-secondary" role="button"><i className="fa fa-eye"></i> Certificate</a>);
        }
        let website = null;
        if (this.props.study.websiteUrl != null) {
            website = (<a href={this.props.study.websiteUrl} target="_blank" className="btn dn-bt-primary" role="button"><i className="fa fa-globe"></i> Website</a>);
        }
        const htmlDescription = { __html: this.props.study.description };

        return (
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="thumbnail text-center dn-study">
                    {image}
                    <hr className="dn-star-light dn-study-star-light" /> 
                    <div className="caption text-left">
                        <h3 className="dn-study-h3">{this.props.study.subject}</h3>
                        <h4 className="dn-study-h4">{this.props.study.schoolName}</h4>
                        <p>{this.props.study.city}, {this.props.study.country}</p>
                        <p>
                            <i className="fa fa-calendar"></i> { moment(this.props.study.startDate).format('MMM YYYY') } - { moment(this.props.study.endDate).format('MMM YYYY') } 
                        </p>
                        <hr className="dn-star-light dn-study-star-light" />
                        <p dangerouslySetInnerHTML={htmlDescription}></p>
                        <p>
                            {certificate}
                            {website}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudyItem;