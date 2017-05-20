import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import PageHeader from '../../../src/components/header/page-header';
import Title from '../../../src/components/header/title';
import Breadcrumb from '../../../src/components/header/breadcrumb';

describe("src/components/header/page-header.jsx", function() {
  
  let shallowResult, props, breadcrumbItems, title; 

  beforeEach(() => {
    breadcrumbItems = [
        { iconClass: 'fa fa-home', title: 'Home', path: '/' }
    ];
    props = { breadcrumbItems: breadcrumbItems, iconClass: 'some-icon-class' };
    shallowResult = shallow(<PageHeader {...props}>{title}</PageHeader>);
  });
  
  it("renders correct component", () => {
    expect(PageHeader.prototype).to.not.be.null;    
  });

  it("renders Title component", () => {
    let titleComponent = shallowResult.find(Title);
    expect(titleComponent.length).to.be.equal(1);    
    expect(titleComponent.props().iconClass).to.be.equal(props.iconClass);
    expect(titleComponent.props().children).to.be.equal(title);    
  });

  it("renders Breadcrumb component", () => {
    let component = shallowResult.find(Breadcrumb);
    expect(component.length).to.be.equal(1);    
    expect(component.props().iconClass).to.be.equal(props.iconClass);
    expect(component.props().items).to.be.equal(props.breadcrumbItems);    
  });

});