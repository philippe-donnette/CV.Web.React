import React, { Component } from 'react';
import PageHeader from './header/page-header';
import ImageProfile from './about/image-profile';
import ProfileDescription from './about/profile-description';
import ProfileCards from './about/profile-cards';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions/index';

export class AboutMe extends Component {
    
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.actions.getCards();
    }
    
    componentWillReceiveProps(nextProps) {
        if (this.props.cards !== null && this.props.cards.length !== nextProps.cards.length) {
            this.props.actions.getCards();
        }
    }

    render() {
        let breadcrumbItems = [
            { iconClass: 'fa fa-home', title: 'Home', path: '/' }
        ];

        return (
            <div>
                <PageHeader iconClass="fa fa-user" breadcrumbItems={breadcrumbItems}>About Me</PageHeader>
                <div className="row">
                    <ImageProfile />
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                        <ProfileDescription description={this.props.person.aboutText} />
                        <ProfileCards cards={this.props.cards} />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        person: state.person,
        cards: state.cards
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);