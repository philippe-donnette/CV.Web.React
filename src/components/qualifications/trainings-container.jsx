import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../redux/actions/index';
import TrainingItem from './training-item';

export class TrainingsContainer extends Component {
    
    componentWillMount() {
        this.props.actions.getTrainings();
    }
    
    render() {
        return (
            <div className="row dn-trainings well dn-well-training">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h2 className="dn-training-h2">Training</h2>
                    </div>
                </div>
                {
                    this.props.trainings.map((item) => {
                        return (<TrainingItem key={item.id} training={item} />);
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        trainings: state.trainings
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainingsContainer);