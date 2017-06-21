import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { AboutMe } from '../../src/components/about-me';
import PageHeader from '../../src/components/header/page-header';
import ImageProfile from '../../src/components/about/image-profile';
import ProfileDescription from '../../src/components/about/profile-description';
import ProfileCards from '../../src/components/about/profile-cards';
import sinon from 'sinon';

describe("src/components/about-me.jsx", function() {
  
  let shallowResult, person, cards, actions; 

  beforeEach(() => {
    actions = {
      getCards: sinon.spy()
    };
    person = { description: 'here goes some description' };
    cards = [];
    shallowResult = shallow(<AboutMe person={person} cards={cards} actions={actions} />);
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

  it("renders ProfileDescription component", () => {
    let component = shallowResult.find(ProfileDescription);
    expect(component.length).to.be.equal(1);    
  });

  it("renders ProfileCards component", () => {
    let component = shallowResult.find(ProfileCards);
    expect(component.length).to.be.equal(1);    
  });

  it("should have called getCards when componentDidMount", () => {    
    expect(actions.getCards.calledOnce).to.be.true;    
  });
  
});