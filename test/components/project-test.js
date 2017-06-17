import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Project } from '../../src/components/project';
import PageHeader from '../../src/components/header/page-header';
import ProjectView from '../../src/components/projects/project-view';
import ErrorNotFound from '../../src/components/error/error-not-found';
import sinon from 'sinon';
import SkillModal from '../../src/components/tag-cloud/skill-modal';

describe("src/components/project.jsx", function() {
  
  let shallowResult, match, project, openSkillStub; 

  describe("Tests with projects not null", function() {

    beforeEach(() => {
      openSkillStub = sinon.stub(Project.prototype, 'openSkill').callsFake((skill) => { return skill; });
      match = { params: { id: 1, name: 'ghostproject' } };
      project = { id: 1, name: 'ghostproject' };
      shallowResult = shallow(<Project match={match} project={project} />);
    });

    afterEach(() => {
      Project.prototype.openSkill.restore();
    });
    
    it("renders correct component", () => {
      expect(Project.prototype).to.not.be.null;    
    });

    it("renders PageHeader component", () => {
      let component = shallowResult.find(PageHeader);
      expect(component.length).to.be.equal(1);    
    });

    it("does not render ErrorNotFound component", () => {
      let component = shallowResult.find(ErrorNotFound);
      expect(component.length).to.be.equal(0);    
    });

    it("should render ProjectView component", () => {
      let component = shallowResult.find(ProjectView);
      expect(component.length).to.be.equal(1);    
    });

    it("should call openSkill when onSkillClicked has been called", () => {
      let component = shallowResult.find(ProjectView);
      component.simulate('skillClicked', { id: 1, name: 'sk1' });
      expect(openSkillStub.calledOnce).to.be.true;
      expect(openSkillStub.args[0][0].id).to.be.equal(1);
      expect(openSkillStub.args[0][0].name).to.be.equal('sk1');    
    });

    it("should have a SkillModal component with modalId skill-modal-project", () => {
      let component = shallowResult.find(SkillModal);
      expect(component.length).to.be.equal(1);
      expect(component.props().modalId).to.be.equal('skill-modal-project');
    });

    it("should update skill in SkillModal component when skill state is updated", () => {
      expect(shallowResult.state('skill')).to.be.null;
      let component = shallowResult.find(SkillModal);
      expect(component.props().skill).to.be.null;
      shallowResult.setState({ skill: { id: 45, name: 'iron fist' } });
      expect(shallowResult.state('skill')).to.not.be.null;
      component = shallowResult.find(SkillModal);
      expect(shallowResult.state('skill').id).to.be.equal(component.props().skill.id);
      expect(shallowResult.state('skill').name).to.be.equal(component.props().skill.name);
    });

  });

  describe("Tests with projects null", function() {

    beforeEach(() => {
      match = { params: { id: 1, name: 'ghostproject' } };
      project = null;
      shallowResult = shallow(<Project match={match} project={project} />);
    });
    
    it("renders correct component", () => {
      expect(Project.prototype).to.not.be.null;    
    });

    it("does not render PageHeader component", () => {
      let component = shallowResult.find(PageHeader);
      expect(component.length).to.be.equal(0);    
    });

    it("renders ErrorNotFound component", () => {
      let component = shallowResult.find(ErrorNotFound);
      expect(component.length).to.be.equal(1);    
    });

    it("should not render ProjectView component", () => {
      let component = shallowResult.find(ProjectView);
      expect(component.length).to.be.equal(0);    
    });

    it("should not have a SkillModal component", () => {
      let component = shallowResult.find(SkillModal);
      expect(component.length).to.be.equal(0);
    });

  });
  
});