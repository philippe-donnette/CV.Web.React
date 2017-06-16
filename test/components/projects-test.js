import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Projects } from '../../src/components/projects';
import PageHeader from '../../src/components/header/page-header';
import sinon from 'sinon';
import ProjectList from '../../src/components/projects/project-list'; 

describe("src/components/projects.jsx", function() {
  
  let shallowResult, projects; 

  beforeEach(() => {
    projects = [
        { id: 1, name: 'proj1' },
        { id: 2, name: 'proj2' },
        { id: 3, name: 'proj3' }
      ];
    shallowResult = shallow(<Projects projects={projects} />);
  });
  
  it("renders correct component", () => {
    expect(Projects.prototype).to.not.be.null;    
  });

  it("renders PageHeader component", () => {
    let component = shallowResult.find(PageHeader);
    expect(component.length).to.be.equal(1);    
  });

  it("renders ProjectList component", () => {
    let component = shallowResult.find(ProjectList);
    expect(component.length).to.be.equal(1);    
  });

  
});