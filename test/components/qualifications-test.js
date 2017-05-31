import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Qualifications from '../../src/components/qualifications';
import PageHeader from '../../src/components/header/page-header';
import StudiesContainer from '../../src/components/qualifications/studies-container';
import sinon from 'sinon';

describe("src/components/qualifications.jsx", function() {
  
  let shallowResult; 

  beforeEach(() => {
    shallowResult = shallow(<Qualifications />);
  });
  
  it("renders correct component", () => {
    expect(Qualifications.prototype).to.not.be.null;    
  });

  it("renders PageHeader component", () => {
    let component = shallowResult.find(PageHeader);
    expect(component.length).to.be.equal(1);    
  });

  it("renders StudiesContainer component", () => {
    expect(StudiesContainer.prototype).to.not.be.null;    
  });

  it("renders PageHeader component with correct props", () => {
    let component = shallowResult.find(PageHeader);
    expect(component.props().breadcrumbItems.length).to.be.equal(1);    
    expect(component.props().breadcrumbItems[0].iconClass).to.be.equal('fa fa-home');
    expect(component.props().breadcrumbItems[0].title).to.be.equal('Home');
    expect(component.props().breadcrumbItems[0].path).to.be.equal('/');    
    expect(component.props().iconClass).to.be.equal('glyphicon glyphicon-education');
  });

});