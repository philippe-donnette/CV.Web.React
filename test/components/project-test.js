import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Project } from '../../src/components/project';
import PageHeader from '../../src/components/header/page-header';
import ProjectView from '../../src/components/projects/project-view';
import ErrorNotFound from '../../src/components/error/error-not-found';
import sinon from 'sinon';
import SkillModal from '../../src/components/tag-cloud/skill-modal';
import ImageGallery from '../../src/components/gallery/image-gallery';
import ImageModal from '../../src/components/gallery/image-modal';

describe("src/components/project.jsx", function() {
  
  let shallowResult, match, project, openSkillStub, actions, openImageStub; 

  describe("Tests with projects not null", function() {

    beforeEach(() => {
      actions = {
        getProjectSkills: sinon.spy(),
        getProjectImages: sinon.spy()
      };
      openSkillStub = sinon.stub(Project.prototype, 'openSkill').callsFake((skill) => { return skill; });
      openImageStub = sinon.stub(Project.prototype, 'openImage').callsFake((image) => { return image; });
      match = { params: { id: 1, name: 'ghostproject' } };
      project = { id: 1, name: 'ghostproject' };
      shallowResult = shallow(<Project actions={actions} match={match} project={project} />);
    });

    afterEach(() => {
      Project.prototype.openSkill.restore();
      Project.prototype.openImage.restore();
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

    it("should render ImageGallery component", () => {
      let component = shallowResult.find(ImageGallery);
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

    it("should call actions.getProjectSkills when project props change", () => {
      expect(shallowResult.find(ProjectView).props().project.id).to.be.equal(project.id);
      actions.getProjectSkills.reset();
      shallowResult.setProps({ project: { id: 543, name: 'CV' } });
      expect(shallowResult.find(ProjectView).props().project.id).to.be.equal(543);
      expect(actions.getProjectSkills.calledOnce).to.be.true;
    });

    it("should call openImage when onImageClick has been called", () => {
      let component = shallowResult.find(ImageGallery);
      component.simulate('imageClick', { id: 1, title: 'img1', imageUrl: 'img1.png' });
      expect(openImageStub.calledOnce).to.be.true;
      expect(openImageStub.args[0][0].id).to.be.equal(1);
      expect(openImageStub.args[0][0].title).to.be.equal('img1');    
    });

    it("should have a ImageModal component with modalId image-modal-project", () => {
      let component = shallowResult.find(ImageModal);
      expect(component.length).to.be.equal(1);
      expect(component.props().modalId).to.be.equal('image-modal-project');
    });

    it("should call actions.getProjectImages when project props change", () => {
      expect(shallowResult.find(ProjectView).props().project.id).to.be.equal(project.id);
      actions.getProjectImages.reset();
      shallowResult.setProps({ project: { id: 543, name: 'CV' } });
      expect(shallowResult.find(ProjectView).props().project.id).to.be.equal(543);
      expect(actions.getProjectImages.calledOnce).to.be.true;
    });

    it("should update image in ImageModal component when image state is updated", () => {
      expect(shallowResult.state('image')).to.be.null;
      let component = shallowResult.find(ImageModal);
      expect(component.props().image).to.be.null;
      shallowResult.setState({ image: { id: 89, title: 'img89' } });
      expect(shallowResult.state('image')).to.not.be.null;
      component = shallowResult.find(ImageModal);
      expect(shallowResult.state('image').id).to.be.equal(component.props().image.id);
      expect(shallowResult.state('image').title).to.be.equal(component.props().image.title);
    });

  });

  describe("Tests with projects null", function() {

    beforeEach(() => {
      actions = {
        getProjectSkills: sinon.spy()
      };
      match = { params: { id: 1, name: 'ghostproject' } };
      project = null;
      shallowResult = shallow(<Project actions={actions} match={match} project={project} />);
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