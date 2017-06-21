import React, { Component } from 'react';

class ProfileDescription extends Component {
    render() {
        const htmlDescription = { __html: this.props.description };

        return (
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 well dn-well-about" dangerouslySetInnerHTML={htmlDescription}>
                </div>
            </div>
        );
    }
}

export default ProfileDescription;