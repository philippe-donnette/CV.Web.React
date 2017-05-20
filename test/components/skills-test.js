import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Skills from '../../src/components/skills';
import PageHeader from '../../src/components/header/page-header';

describe("src/components/skills.jsx", function() {
  
  let shallowResult, breadcrumbItems, props; 

  beforeEach(() => {
    shallowResult = shallow(<Skills />);
  });
  
  it("renders correct component", () => {
    expect(Skills.prototype).to.not.be.null;    
  });

  it("renders PageHeader component", () => {
    let component = shallowResult.find(PageHeader);
    expect(component.length).to.be.equal(1);    
  });

});