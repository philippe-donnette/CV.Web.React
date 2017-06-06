import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Project } from '../../src/components/project';
import PageHeader from '../../src/components/header/page-header';
import sinon from 'sinon';

describe("src/components/project.jsx", function() {
  
  let shallowResult, match, project; 

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

  
});