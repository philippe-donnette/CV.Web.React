import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ProjectList from '../../../src/components/projects/project-list'; 
import ProjectThumbnail from '../../../src/components/projects/project-thumbnail';

describe("src/components/projects/project-list.jsx", function() {
  
  let shallowResult, projects; 

  describe("Main Tests", () => {

    beforeEach(() => {
      projects = [
        { id: 1, name: 'proj1' },
        { id: 2, name: 'proj2' },
        { id: 3, name: 'proj3' }
      ];
      shallowResult = shallow(<ProjectList projects={projects} />);
    });
    
    afterEach(() => {
    });

    it("renders correct component", () => {
      expect(ProjectList.prototype).to.not.be.null;    
    });

    it("renders as many ProjectThumbnail components as projects", () => {
      let components = shallowResult.find(ProjectThumbnail);
      expect(components.length).to.be.equal(projects.length);    
    });

    

  });

});