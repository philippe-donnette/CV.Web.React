import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';
import Skills from '../../src/components/skills';
import Title from '../../src/components/header/title';
import Breadcrumb from '../../src/components/header/breadcrumb';

describe("src/components/skills.jsx", function() {
  
  let shallowResult; 

  beforeEach(() => {
    shallowResult = shallow(<Skills />);
  });
  
  it("renders correct component", () => {
    expect(Skills.prototype).to.not.be.null;    
  });

  it("renders Title component", () => {
    let titleComponent = shallowResult.find(Title);
    expect(titleComponent.length).to.be.equal(1);    
  });

  it("renders Breadcrumb component", () => {
    let component = shallowResult.find(Breadcrumb);
    expect(component.length).to.be.equal(1);    
  });

});