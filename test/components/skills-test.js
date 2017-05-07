import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';
import Skills from '../../src/components/skills';

describe("src/components/skills.jsx", function() {
  
  let shallowResult; 

  beforeEach(() => {
    shallowResult = shallow(<Skills />);
  });
  
  it("renders correct component", () => {
    expect(Skills.prototype).to.not.be.null;    
  });

});