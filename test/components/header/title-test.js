import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Title from '../../../src/components/header/title';

describe("src/components/header/title.jsx", function() {
  
  let shallowResult, props, title; 

  beforeEach(() => {
    title = 'some-title-goes-here';
    props = { iconClass: 'some-icon-class' };
    shallowResult = shallow(<Title {...props}>{title}</Title>);
  });
  
  it("renders correct component", () => {
    expect(Title.prototype).to.not.be.null;    
  });

  it("displays an <i> tag with className of iconClass prop", () => {
    expect(shallowResult.find('i').props().className).to.be.equal(props.iconClass);    
  });

  it("displays title in <h1> tag", () => {
    expect(shallowResult.find('h1').html()).to.contain(title);    
  });

});