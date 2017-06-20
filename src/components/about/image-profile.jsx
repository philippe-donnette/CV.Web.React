import React, { Component } from 'react';

class ImageProfile extends Component {
    render() {
        return (
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 dn-about-me">
                <img src="./assets/me-xs.png" className="img-responsive visible-xs center-block" />
                <img src="./assets/me-sm.png" className="img-responsive visible-sm center-block" />
                <img src="./assets/me-lg.png" className="img-responsive visible-md center-block" />
                <img src="./assets/me-lg.png" className="img-responsive visible-lg center-block" />
            </div>
        );
    }
}

export default ImageProfile;