import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Projects from '../../src/components/projects';
import PageHeader from '../../src/components/header/page-header';
import sinon from 'sinon';

describe("src/components/projects.jsx", function() {
  
  let shallowResult; 

  beforeEach(() => {
    shallowResult = shallow(<Projects />);
  });
  
  it("renders correct component", () => {
    expect(Projects.prototype).to.not.be.null;    
  });

  it("renders PageHeader component", () => {
    let component = shallowResult.find(PageHeader);
    expect(component.length).to.be.equal(1);    
  });

  
});