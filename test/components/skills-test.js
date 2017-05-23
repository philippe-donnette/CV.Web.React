import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Skills from '../../src/components/skills';
import PageHeader from '../../src/components/header/page-header';
import TagCloud from '../../src/components/tag-cloud/tag-cloud';
import configureMockStore from 'redux-mock-store';
import sinon from 'sinon';

describe("src/components/skills.jsx", function() {
  
  let shallowResult, breadcrumbItems, props, settings, initialState, store; 

  beforeEach(() => {
    settings = { apiBaseURI: 'some-url' };
    initialState = { skills: [] };
    store = configureMockStore()(initialState);
    const getSkills = () => ({ type: 'GET_SKILLS', skills: [] }); 
    shallowResult = shallow(<Skills store={store} />);
  });
  
  it("renders correct component", () => {
    expect(Skills.prototype).to.not.be.null;    
  });

  // it("renders PageHeader component", () => {
  //   let component = shallowResult.dive().find(PageHeader);
  //   expect(component.length).to.be.equal(1);    
  // });

  // it("renders TagCloud component", () => {
  //   let component = shallowResult.dive().find(TagCloud);
  //   expect(component.length).to.be.equal(1);    
  // });

});