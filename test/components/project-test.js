import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Project } from '../../src/components/project';
import PageHeader from '../../src/components/header/page-header';
import ErrorNotFound from '../../src/components/error/error-not-found';
import sinon from 'sinon';

describe("src/components/project.jsx", function() {
  
  let shallowResult, match, project; 

  describe("Tests with projects not null", function() {

    beforeEach(() => {
      match = { params: { id: 1, name: 'ghostproject' } };
      project = { id: 1, name: 'ghostproject' };
      shallowResult = shallow(<Project match={match} project={project} />);
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

  });
  
});