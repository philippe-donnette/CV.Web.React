import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';
import Skills from '../../src/components/skills';
import Title from '../../src/components/header/title';

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

});