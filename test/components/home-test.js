import React from 'react';
import { expect } from 'chai';
import Home from '../../src/components/home';
import ReactTestUtils from 'react-dom/test-utils';
import ReactShallowRenderer from 'react-test-renderer/shallow';

describe("src/components/home.jsx", function() {
  
  let wrapper, shallow, shallowResult;

  beforeEach(() => {
    wrapper = ReactTestUtils.renderIntoDocument(<Home />);
    shallow = new ReactShallowRenderer(); 
    shallow.render(<Home />);
    shallowResult = shallow.getRenderOutput();
  });
  
  it("renders correct component", () => {
    expect(ReactTestUtils.isCompositeComponentWithType(wrapper, Home)).to.be.equal(true);
  });

  it("renders correct type", () => {
    expect(shallowResult.type).to.be.equal("div");
  });

  
});