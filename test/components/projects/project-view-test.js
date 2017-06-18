import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ProjectView from '../../../src/components/projects/project-view'; 
import TagCloud from '../../../src/components/tag-cloud/tag-cloud';

describe("src/components/projects/project-view.jsx", function() {
  
  let shallowResult, project, skills, onSkillClickedSpy; 

  describe("Main Tests", () => {

    beforeEach(() => {
      onSkillClickedSpy = sinon.spy();
      skills = [
        { id: 1, name: 'sk1' },
        { id: 2, name: 'sk2' },
        { id: 3, name: 'sk3' },
        { id: 4, name: 'sk4' }
      ];
      project = { id: 1, name: 'proj1', primaryImage: 'some-image.png', description: 'This is a great description', skills: skills };
      shallowResult = shallow(<ProjectView project={project} onSkillClicked={onSkillClickedSpy} />);
    });
    
    afterEach(() => {
    });

    it("renders correct component", () => {
      expect(ProjectView.prototype).to.not.be.null;    
    });

    it("should have an image with primaryImage", () => {
      let image = shallowResult.find('img');
      expect(image.props().src).to.be.equal(`./assets/${project.primaryImage}`);    
    });

    it("should display description in a div", () => {
      let description = shallowResult.find('div').findWhere(x => {
        return (typeof x.props().dangerouslySetInnerHTML !== 'undefined') && x.props().dangerouslySetInnerHTML.__html === project.description;
      });
      expect(description.length).to.be.equal(1);
    });

    it("should have a TagCloud component", () => {
      let component = shallowResult.find(TagCloud);
      expect(component.length).to.be.equal(1);
      expect(component.props().modalId).to.be.equal('skill-modal-project');    
      expect(component.props().isInContainer).to.be.equal(true);    
    });

    it("should call onSkillClicked props when onTagClicked has been called", () => {
      let component = shallowResult.find(TagCloud);
      component.simulate('tagClicked');
      expect(onSkillClickedSpy.calledOnce).to.be.true;
    });

  });

});