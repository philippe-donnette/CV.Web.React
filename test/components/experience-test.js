import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Experience from '../../src/components/experience';
import ExperienceCarousel from '../../src/components/experience/experience-carousel';
import PageHeader from '../../src/components/header/page-header';
import sinon from 'sinon';

describe("src/components/experience.jsx", function() {
  
  let shallowResult; 

  beforeEach(() => {
    shallowResult = shallow(<Experience />);
  });
  
  it("renders correct component", () => {
    expect(Experience.prototype).to.not.be.null;    
  });

  it("renders PageHeader component", () => {
    let component = shallowResult.find(PageHeader);
    expect(component.length).to.be.equal(1);    
  });

  it("renders ExperienceCarousel component", () => {
    let component = shallowResult.find(ExperienceCarousel);
    expect(component.length).to.be.equal(1);    
  });

  
});