import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import TagCloud from '../../../src/components/tag-cloud/tag-cloud'; 
import ExperienceCarouselSlide from '../../../src/components/experience/experience-carousel-slide'; 

describe("src/components/experience/experience-carousel-slide.jsx", function() {
  
  let shallowResult, props, experience, onSkillClickedSpy, skills, imagePath; 

  describe("Main Tests", () => {

    beforeEach(() => {
      imagePath = './images/experience/clients/';
      onSkillClickedSpy = sinon.spy();
      skills = [
        { id: 1, name: 'skill-1' },
        { id: 2, name: 'skill-2' }
      ];
      experience = { id: 1, name: 'exp1', skills: skills, description: 'some description stuff goes here ' + imagePath, websiteUrl: 'some-url' };
      props = { active: true, experience: experience, onSkillClicked: onSkillClickedSpy };
      shallowResult = shallow(<ExperienceCarouselSlide {...props} />);
    });
    
    afterEach(() => {
    });

    it("renders correct component", () => {
      expect(ExperienceCarouselSlide.prototype).to.not.be.null;    
    });

    it("renders TagCloud component", () => {
      expect(TagCloud.prototype).to.not.be.null;
      let component = shallowResult.find(TagCloud);
      expect(component.length).to.be.equal(1);    
      expect(component.props().isInContainer).to.be.true;
      expect(component.props().modalId).to.be.equal('skill-modal-experience');    
    });

    it("should have TagCloud component number of items matching number of experience skills", () => {
      let component = shallowResult.find(TagCloud);
      expect(component.props().items.length).to.be.equal(experience.skills.length);    
    });

    it("should call onSkillClicked when onTagClicked event is fired", () => {
      let component = shallowResult.find(TagCloud);
      component.simulate('tagClicked');
      expect(onSkillClickedSpy.calledOnce).to.be.true;    
    });

    it("should display a tag with link to experience website", () => {
      let tag = shallowResult.find('a').findWhere(x => x.props().href === experience.websiteUrl);
      expect(tag.length).to.be.equal(1);    
    });

    it("should replace image path in description with assets path", () => {
      expect(experience.description).to.contains(imagePath);
      expect(experience.description).to.not.contains('./assets/');
      let tag = shallowResult.find('div').findWhere(x => { 
        return (typeof x.props().className !== 'undefined') && x.props().className.includes('dn-experience-description');
      });
      expect(tag.props().dangerouslySetInnerHTML.__html).to.not.contains(imagePath);    
      expect(tag.props().dangerouslySetInnerHTML.__html).to.contains('./assets/');    
    });

    it("should display div tag with className active", () => {
      let tag = shallowResult.find('div').findWhere(x => { 
        return (typeof x.props().className !== 'undefined') && x.props().className.includes('active');
      });
      expect(tag.length).to.be.equal(1);    
    });

  });

  describe("Test with active false websiteUrl null", () => {

    beforeEach(() => {
      onSkillClickedSpy = sinon.spy();
      skills = [
        { id: 1, name: 'skill-1' },
        { id: 2, name: 'skill-2' }
      ];
      experience = { id: 1, name: 'exp1', skills: skills, description: 'some description stuff goes here ' + imagePath, websiteUrl: null };
      props = { active: false, experience: experience, onSkillClicked: onSkillClickedSpy };
      shallowResult = shallow(<ExperienceCarouselSlide {...props} />);
    });
    
    afterEach(() => {
    });

    it("renders correct component", () => {
      expect(ExperienceCarouselSlide.prototype).to.not.be.null;    
    });

    it("should not display div tag with className active", () => {
      let tag = shallowResult.find('div').findWhere(x => { 
        return (typeof x.props().className !== 'undefined') && x.props().className.includes('active');
      });
      expect(tag.length).to.be.equal(0);    
    });

    it("should not display a tag with link to experience website", () => {
      let tag = shallowResult.find('a').findWhere(x => x.props().href === experience.websiteUrl);
      expect(tag.length).to.be.equal(0);    
    });

  });

});