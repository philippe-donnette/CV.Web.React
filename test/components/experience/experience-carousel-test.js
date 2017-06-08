import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { ExperienceCarousel } from '../../../src/components/experience/experience-carousel';
import sinon from 'sinon';

describe("src/components/experience/experience-carousel.jsx", function() {
  
  let shallowResult, actions, expeiences; 

  beforeEach(() => {
    actions = {
      getExperiences: sinon.spy()
    };
    expeiences = [];
    shallowResult = shallow(<ExperienceCarousel actions={actions} experiences={expeiences} />);
  });
  
  it("renders correct component", () => {
    expect(ExperienceCarousel.prototype).to.not.be.null;    
  });

});