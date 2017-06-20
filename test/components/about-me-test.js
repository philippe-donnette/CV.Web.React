import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import AboutMe from '../../src/components/about-me';
import PageHeader from '../../src/components/header/page-header';
import ImageProfile from '../../src/components/about/image-profile';
import sinon from 'sinon';

describe("src/components/about-me.jsx", function() {
  
  let shallowResult; 

  beforeEach(() => {
    shallowResult = shallow(<AboutMe />);
  });
  
  it("renders correct component", () => {
    expect(AboutMe.prototype).to.not.be.null;    
  });

  it("renders PageHeader component", () => {
    let component = shallowResult.find(PageHeader);
    expect(component.length).to.be.equal(1);    
  });

  it("renders ImageProfile component", () => {
    let component = shallowResult.find(ImageProfile);
    expect(component.length).to.be.equal(1);    
  });

  
});