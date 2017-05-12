import React from 'react';
import { expect } from 'chai';
import Home from '../../src/components/home';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

describe("src/components/home.jsx", function() {
  
  let store, shallowResult, person;

  beforeEach(() => {
    person = {
      occupationMotto: 'some motto goes here',
      primaryImage: 'some-image.png',
      occupation: 'something I do',
      homeImage: 'some-home-image.png'
    };
    let initialState = { person: person };
    store = configureMockStore()(initialState);
    shallowResult = shallow(<Home store={store} />);
  });
  
  it("renders correct component", () => {
    expect(Home.prototype).to.not.be.null;
  });

  it("contains person occupation in html", () => {
    expect(shallowResult.html()).to.contains(person.occupation);
  });

  it("contains person occupationMotto in html", () => {
    expect(shallowResult.html()).to.contains(person.occupationMotto);
  });

  it("displays person profile image", () => {
    let imageFound = shallowResult.dive().find('img').findWhere(x => x.props().src.indexOf(person.primaryImage) !== -1).length === 1;
    expect(imageFound).to.be.equal(true);
  });

  it("displays home image", () => {
    let imageFound = shallowResult.dive().find('img').findWhere(x => x.props().src.indexOf(person.homeImage) !== -1).length === 1;
    expect(imageFound).to.be.equal(true);
  });

});