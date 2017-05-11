import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container dn-footer-container">
                    <p className="text-center">
                        {(new Date()).getFullYear()} <i className="fa fa-minus"></i> {this.props.fullName} <i className="fa fa-minus"></i> {this.props.role} <i className="fa fa-minus"></i> donola.net
                    </p>
                </div>            
            </footer>
        );
    }
}

export default Footer;