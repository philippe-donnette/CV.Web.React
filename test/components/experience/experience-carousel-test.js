import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { ExperienceCarousel } from '../../../src/components/experience/experience-carousel';
import sinon from 'sinon';
import SkillModal from '../../../src/components/tag-cloud/skill-modal'; 
import CarouselIndicators from '../../../src/components/carousel/carousel-indicators'; 
import ExperienceCarouselSlide from '../../../src/components/experience/experience-carousel-slide'; 

describe("src/components/experience/experience-carousel.jsx", function() {
  
  let shallowResult, actions, experiences, skills, onCarouselControlChangeStub, openSkillStub; 

  beforeEach(() => {
    openSkillStub = sinon.stub(ExperienceCarousel.prototype, 'openSkill').callsFake((something) => { return null; });
    onCarouselControlChangeStub = sinon.stub(ExperienceCarousel.prototype, 'onCarouselControlChange').callsFake((inc) => { return inc; });
    actions = {
      getExperiences: sinon.spy()
    };
    skills = [
      { id: 1, name: 'skill-1' },
      { id: 2, name: 'skill-2' }
    ];
    experiences = [
      { id: 1, name: 'exp1', skills: skills },
      { id: 2, name: 'exp2', skills: [...skills[0]] },
      { id: 3, name: 'exp3', skills: [...skills[1]] }
    ];
    shallowResult = shallow(<ExperienceCarousel actions={actions} experiences={experiences} />);
  });
  
  afterEach(() => {
    ExperienceCarousel.prototype.onCarouselControlChange.restore();
    ExperienceCarousel.prototype.openSkill.restore();
  });

  it("renders correct component", () => {
    expect(ExperienceCarousel.prototype).to.not.be.null;    
  });

  it("renders SkillModal component", () => {
    expect(SkillModal.prototype).to.not.be.null;
    let component = shallowResult.find(SkillModal);
    expect(component.length).to.be.equal(1);    
    expect(component.props().modalId).to.be.equal('skill-modal-experience');        
  });

  it("getExperiences to have been called", () => {
    expect(actions.getExperiences.calledOnce).to.be.true;
  });

  it("SkillModal skill to change when skill state change", () => {
    shallowResult.setState({ skill: skills[1] });
    let component = shallowResult.find(SkillModal);    
    expect(component.props().skill).to.not.be.null;
    expect(component.props().skill.name).to.be.equal(skills[1].name);
    expect(component.props().skill.id).to.be.equal(skills[1].id);
  });

  it("renders CarouselIndicators component with length prop matching number of experiences", () => {
    let component = shallowResult.find(CarouselIndicators);
    expect(component.length).to.be.equal(1);    
    expect(component.props().length).to.be.equal(experiences.length);    
  });

  it("should have a div with id myCarousel", () => {
    let div = shallowResult.find('div').findWhere(x => x.props().id === 'myCarousel');
    expect(div.length).to.be.equal(1);    
  });

  it("should have a previous nav button", () => {
    let a = shallowResult.find('a').findWhere(x => x.props()['data-slide'] === 'prev');
    expect(a.length).to.be.equal(1);    
    expect(a.props().href).to.be.equal('#myCarousel');
  });

  it("should have a next nav button", () => {
    let a = shallowResult.find('a').findWhere(x => x.props()['data-slide'] === 'next');
    expect(a.length).to.be.equal(1);    
    expect(a.props().href).to.be.equal('#myCarousel');
  });

  it("should call onCarouselControlChange with -1 when click on previous nav button", () => {
    let a = shallowResult.find('a').findWhere(x => x.props()['data-slide'] === 'prev');
    a.simulate('click');
    expect(onCarouselControlChangeStub.withArgs(-1).calledOnce).to.be.true;    
  });

  it("should call onCarouselControlChange with 1 when click on next nav button", () => {
    let a = shallowResult.find('a').findWhere(x => x.props()['data-slide'] === 'next');
    a.simulate('click');
    expect(onCarouselControlChangeStub.withArgs(1).calledOnce).to.be.true;    
  });

  it("should update selected prop on CarouselIndicators component when state selected change", () => {
    shallowResult.setState({ selected: 23 });
    let component = shallowResult.find(CarouselIndicators);
    expect(component.props().selected).to.be.equal(23);
  });

  it("should increment selected when updateSelected is called", () => {
    expect(ExperienceCarousel.prototype.updateSelected(1, 1, 3)).to.be.equal(2);
  });

  it("should decrement selected when updateSelected is called", () => {
    expect(ExperienceCarousel.prototype.updateSelected(1, -1, 3)).to.be.equal(0);
  });

  it("should set selected back to 0 when updateSelected is called", () => {
    expect(ExperienceCarousel.prototype.updateSelected(2, 1, 3)).to.be.equal(0);
  });

  it("should set selected back to 2 when updateSelected is called", () => {
    expect(ExperienceCarousel.prototype.updateSelected(0, -1, 3)).to.be.equal(2);
  });

  it("should render as many ExperienceCarouselSlide component as prop experiences length", () => {
    let component = shallowResult.find(ExperienceCarouselSlide);
    expect(component.length).to.be.equal(experiences.length);    
  });

  it("should have only one active ExperienceCarouselSlide component", () => {
    let component = shallowResult.find(ExperienceCarouselSlide).findWhere(x => x.props().active === true);
    expect(component.length).to.be.equal(1);    
  });

  it("should have active ExperienceCarouselSlide component matched with selected state", () => {
    shallowResult.setState({ selected: 2 });
    let component = shallowResult.find(ExperienceCarouselSlide).findWhere(x => x.props().active === true);
    expect(component.props().experience.name).to.be.equal(experiences[2].name);
  });

  it("should call openSkill when ExperienceCarouselSlide component onSkillClicked is called", () => {
    let component = shallowResult.find(ExperienceCarouselSlide).findWhere(x => x.props().active === true);
    component.simulate('skillClicked');
    expect(openSkillStub.calledOnce).to.be.true;
  });

});