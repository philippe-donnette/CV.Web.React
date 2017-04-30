import React from 'react';
import { expect } from 'chai';
import App from '../../src/components/app';
import Home from '../../src/components/home';
import Skills from '../../src/components/skills';
import { Route } from 'react-router';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ReactTestUtils from 'react-dom/test-utils';

describe("src/components/app.jsx", function() {
  
  let wrapper, store;

  beforeEach(() => {
    var initialState = {
      items: ['one']
    }
    store = configureMockStore()(initialState);

    wrapper = ReactTestUtils.renderIntoDocument(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  
  it("renders correct component", () => {
    expect(ReactTestUtils.isCompositeComponentWithType(wrapper, Provider)).to.be.equal(true);
  });

  it('renders correct routes', () => {
    let routes = ReactTestUtils.scryRenderedComponentsWithType(wrapper, Route);

    const pathMap = routes.reduce((pathMap, route) => {
      pathMap[route.props.path] = route.props.component;
      return pathMap;
    }, {});

    expect(pathMap['/']).to.be.equal(Home);
    expect(pathMap['/skills']).to.be.equal(Skills);
  });
});