import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../redux/actions/index';
import CarouselIndicators from '../carousel/carousel-indicators';
import ExperienceCarouselSlide from './experience-carousel-slide';

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

        let carouselIndicators = null, carouselLeftControl = null, carouselRightControl = null, slides = [], i = 0;
        if (this.props.experiences !== null && this.props.experiences.length > 0) {
            carouselIndicators = (
                <CarouselIndicators 
                    length={this.props.experiences.length} 
                    onChange={this.onIndicatorChange.bind(this)}
                    selected={this.state.selected} 
                    items={this.props.experiences}
                />
            );
            carouselLeftControl = (
                <a role="button" href="#myCarousel" className="left dn-experience-control" data-slide="prev">
                    <span aria-hidden="true" className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">previous</span>
                </a>
            );
            carouselRightControl = (
                <a role="button" href="#myCarousel" className="right dn-experience-control" data-slide="next">
                    <span aria-hidden="true" className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">next</span>
                </a>
            );
        }

        for (i = 0; i < this.props.experiences.length; i++) {
            slides.push(
                <ExperienceCarouselSlide 
                    key={this.props.experiences[i].id} 
                    experience={this.props.experiences[i]} 
                    active={this.state.selected === null ? (i === 0 ? true : false) : this.state.selected === this.props.experiences[i].id}
                    classNameSuffix={i % 2 === 0 ? 'even' : 'odd'} 
                />
            );
        }

        return (
            <div id="myCarousel" className="carousel" data-ride="carousel">

                {carouselIndicators}

                <div className="dn-experience-inner">
                    {slides}
                </div>

                {carouselLeftControl}
                {carouselRightControl}
                
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