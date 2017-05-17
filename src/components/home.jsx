import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions/index';

export class Home extends Component {
    render() {

        let profileImage, homeImage;
        if (typeof this.props.person.primaryImage !== 'undefined') {
            profileImage = <img src={'./assets/' + this.props.person.primaryImage} className="dn-img-thumbnail img-circle center-block" />;
        }
        if (typeof this.props.person.homeImage !== 'undefined') {
            homeImage = <img src={'./assets/' + this.props.person.homeImage} className="img-responsive center-block" />;
        }

        return (
            <div className="row dn-intro">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 dn-intro-pic">
                    {profileImage}
                    <div className="dn-intro-text">
                        <span className="dn-name">{this.props.person.occupation}</span>
                        <hr className="dn-star-light" />
                        <span className="dn-skills">{this.props.person.occupationMotto}</span>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 dn-intro-tag">
                    {homeImage}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);