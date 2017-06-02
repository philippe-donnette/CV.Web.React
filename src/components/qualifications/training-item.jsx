import React, { Component } from 'react';
import moment from 'moment';

class TrainingItem extends Component {
    render() {
        let image = <i className="fa fa-image fa-2x"></i>;
        if (this.props.training.imageUrl != null) {
            image = (<img src={'./assets/' + this.props.training.imageUrl} alt={this.props.training.provider} className="img-circle dn-training-icon" />);
        }
        let certificate = null;
        if (this.props.training.certificateFile != null) {
            certificate = (<a href={'./assets/' + this.props.training.certificateFile} target="_blank" className="btn dn-bt-secondary" role="button"><i className="fa fa-eye"></i> Certificate</a>);
        }
        let website = null;
        if (this.props.training.websiteUrl != null) {
            website = (<a href={this.props.training.websiteUrl} target="_blank" className="btn dn-bt-primary" role="button"><i className="fa fa-globe"></i> Website</a>);
        }
        const htmlDescription = { __html: this.props.training.description };

        return (
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="panel dn-training-panel">
                    <div className="panel-heading dn-no-marpad-bottom">
                        <ul className="list-inline dn-no-marpad-bottom">
                            <li>
                                {image}
                            </li>
                            <li>
                                <h3 className="dn-training-h3">{this.props.training.provider}</h3>
                            </li>
                        </ul>
                    </div>
                    <div className="panel-body dn-no-marpad-top">
                        <hr className="dn-star-light dn-training-star-light" />
                        <h4 className="dn-training-h4">{this.props.training.subject}</h4>
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

export default TrainingItem;