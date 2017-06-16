import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ProjectThumbnail from '../../../src/components/projects/project-thumbnail'; 
import { Link } from 'react-router-dom';

describe("src/components/projects/project-thumbnail.jsx", function() {
  
  let shallowResult, project; 

  describe("Main Tests", () => {

    beforeEach(() => {
      project = { id: 1, name: 'proj1' };
      shallowResult = shallow(<ProjectThumbnail project={project} />);
    });
    
    afterEach(() => {
    });

    it("renders correct component", () => {
      expect(ProjectThumbnail.prototype).to.not.be.null;    
    });

    it("should render an image matching project primaryImage", () => {
      let component = shallowResult.find('img');
      expect(component.props().src).to.be.equal(`./assets/${project.primaryImage}`);    
    });

    it("should render a Link component to project details page", () => {
      let component = shallowResult.find(Link).findWhere(x => {
        return (typeof x.props().children !== 'undefined') && x.props().children.length === 2 && x.props().children[1].includes('More');
      });
      expect(component.props().to).to.be.equal(`/projects/${project.name}/${project.id}`);    
    });

  });

});