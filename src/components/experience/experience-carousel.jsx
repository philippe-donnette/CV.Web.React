import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../redux/actions/index';
import CarouselIndicators from '../carousel/carousel-indicators';

export class ExperienceCarousel extends Component {
    
    constructor(props) {
        super(props);
        this.state = { selected: null };
    }

    componentWillMount() {
        this.props.actions.getExperiences();
    }
    
    onIndicatorChange(id) {
        this.setState({ selected: id });
    }

    render() {

        let carouselIndicators = null;
        if (this.props.experiences !== null && this.props.experiences.length > 0) {
            carouselIndicators = (
                <CarouselIndicators 
                    length={this.props.experiences.length} 
                    onChange={this.onIndicatorChange.bind(this)}
                    selected={this.state.selected} 
                    items={this.props.experiences}
                />
            );
        }

        return (
            <div id="myCarousel" className="carousel" data-ride="carousel">

                {carouselIndicators}

                <div className="carousel-inner">
                    <div className="item active">
                        <img src="la.jpg" alt="Los Angeles" />
                    </div>

                    <div className="item">
                        <img src="chicago.jpg" alt="Chicago" />
                    </div>

                    <div className="item">
                        <img src="ny.jpg" alt="New York" />
                    </div>
                </div>

                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        experiences: state.experiences
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceCarousel);