import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../redux/actions/index';
import CarouselIndicators from '../carousel/carousel-indicators';
import ExperienceCarouselSlide from './experience-carousel-slide';
import SkillModal from '../tag-cloud/skill-modal';
import $ from 'jquery';

export class ExperienceCarousel extends Component {
    
    constructor(props) {
        super(props);
        this.state = { selected: 0, skill: null };
    }

    componentWillMount() {
        this.props.actions.getExperiences();
    }
    
    onIndicatorChange(index) {
        this.setState({ selected: index });
    }

    onCarouselControlChange(incrementValue) {
         let newValue = this.updateSelected(this.state.selected, incrementValue, this.props.experiences.length);
         this.setState({ selected: newValue });
     }

     updateSelected(selected, incrementValue, experiencesLength) {
         let value = selected + (incrementValue);
         if (value === -1) {
            value = experiencesLength - 1;
         }
         if (value > experiencesLength - 1) {
             value = 0;
         }
         return value;
     }

     openSkill(skill) {
         this.setState(
            { skill: skill }, 
            () => { 
                $('#skill-modal-experience').modal('show');
            }
        );
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
                <a role="button" href="#myCarousel" className="left dn-experience-control" data-slide="prev" onClick={this.onCarouselControlChange.bind(this, -1)}>
                    <span aria-hidden="true" className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">previous</span>
                </a>
            );
            carouselRightControl = (
                <a role="button" href="#myCarousel" className="right dn-experience-control" data-slide="next" onClick={this.onCarouselControlChange.bind(this, 1)}>
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
                    active={this.state.selected === i}
                    classNameSuffix={i % 2 === 0 ? 'even' : 'odd'} 
                    onSkillClicked={this.openSkill.bind(this)}
                />
            );
        }

        return (
            <div id="myCarousel" className="carousel" data-ride="carousel" data-interval="false">

                {carouselIndicators}

                <div className="dn-experience-inner">
                    {slides}
                </div>

                {carouselLeftControl}
                {carouselRightControl}
                
                <SkillModal skill={this.state.skill} modalId="skill-modal-experience" />

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