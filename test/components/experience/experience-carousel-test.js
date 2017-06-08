import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ExperienceCarousel from '../../../src/components/experience/experience-carousel';
import sinon from 'sinon';

describe("src/components/experience/experience-carousel.jsx", function() {
  
  let shallowResult; 

  beforeEach(() => {
    shallowResult = shallow(<ExperienceCarousel />);
  });
  
  it("renders correct component", () => {
    expect(ExperienceCarousel.prototype).to.not.be.null;    
  });

});