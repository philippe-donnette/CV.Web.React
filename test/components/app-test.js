import React from 'react';
import { expect } from 'chai';
import { App } from '../../src/components/app';
import Home from '../../src/components/home';
import Skills from '../../src/components/skills';
import { Route } from 'react-router';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ReactTestUtils from 'react-dom/test-utils';
import sinon from 'sinon';

describe("src/components/app.jsx", function() {
  
  let wrapper, store, actions, projects, person, getProjectsSpy, getPersonSpy;

  beforeEach(() => {
    getPersonSpy = sinon.spy();
    getProjectsSpy = sinon.spy();
    person = { gitHubUrl: 'some-github-url', linkedinUrl: 'some-linkedin-url' };
    projects = [{id: 1, name: 'ProjectA'}, {id: 2, name: 'ProjectB'}];
    actions = {
      getProjects: getProjectsSpy,
      getPerson: getPersonSpy
    };
    
    var initialState = {
      projects: []
    }
    store = configureMockStore()(initialState);

    wrapper = ReactTestUtils.renderIntoDocument(
      <Provider store={store}>
        <App actions={actions} projects={projects} person={person} />
      </Provider>
    );
  });
  
  afterEach(() => {
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

  it("calls getProjects", () => {
    expect(getProjectsSpy.calledOnce).to.be.equal(true);
  });

  it("calls getPerson", () => {
    expect(getPersonSpy.calledOnce).to.be.equal(true);
  });

});