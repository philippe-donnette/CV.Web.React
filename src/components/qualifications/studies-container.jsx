import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../redux/actions/index';

export class StudiesContainer extends Component {
    
    componentWillMount() {
        this.props.actions.getStudies();
    }
    
    render() {
        return (
            <div>
                {
                    this.props.studies.map((item) => {
                        return (<div key={item.id}>{item.schoolName}</div>);
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