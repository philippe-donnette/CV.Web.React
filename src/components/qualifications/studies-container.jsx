import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../redux/actions/index';
import StudyItem from './study-item';

export class StudiesContainer extends Component {
    
    componentWillMount() {
        this.props.actions.getStudies();
    }
    
    render() {
        return (
            <div className="row dn-qualifications well">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h2>Studies</h2>
                    </div>
                </div>
                {
                    this.props.studies.map((item) => {
                        return (<StudyItem key={item.id} study={item} />);
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        studies: state.studies
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudiesContainer);