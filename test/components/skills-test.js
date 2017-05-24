import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Skills } from '../../src/components/skills';
import PageHeader from '../../src/components/header/page-header';
import TagCloud from '../../src/components/tag-cloud/tag-cloud';
import configureMockStore from 'redux-mock-store';
import sinon from 'sinon';

describe("src/components/skills.jsx", function() {
  
  let shallowResult, initialState, store, getSkillsSpy, actions, skills; 

  beforeEach(() => {
    getSkillsSpy = sinon.spy(); 
    
    skills = [
      { id: 1, name: 'skill-1' },
      { id: 2, name: 'skill-2' }
    ];
    actions = { getSkills: getSkillsSpy }
    initialState = { skills: [] };
    store = configureMockStore()(initialState);
    shallowResult = shallow(<Skills store={store} actions={actions} skills={skills} />);
  });
  
  it("renders correct component", () => {
    expect(Skills.prototype).to.not.be.null;    
  });

  it("renders PageHeader component", () => {
    let component = shallowResult.find(PageHeader);
    expect(component.length).to.be.equal(1);    
  });

  it("renders PageHeader component with correct props", () => {
    let component = shallowResult.find(PageHeader);
    expect(component.props().breadcrumbItems.length).to.be.equal(1);    
    expect(component.props().breadcrumbItems[0].iconClass).to.be.equal('fa fa-home');
    expect(component.props().breadcrumbItems[0].title).to.be.equal('Home');
    expect(component.props().breadcrumbItems[0].path).to.be.equal('/');    
    expect(component.props().iconClass).to.be.equal('glyphicon glyphicon-wrench');
  });

  it("renders TagCloud component", () => {
    let component = shallowResult.find(TagCloud);
    expect(component.length).to.be.equal(1);    
  });

  it("renders TagCloud component with correct props", () => {
    let component = shallowResult.find(TagCloud);
    expect(component.props().isInContainer).to.be.false;    
  });

  it("calls getSkills", () => {
    expect(getSkillsSpy.calledOnce).to.be.equal(true);
  });

});