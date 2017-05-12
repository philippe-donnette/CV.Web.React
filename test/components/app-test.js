import React from 'react';
import { expect } from 'chai';
import { App } from '../../src/components/app';
import Home from '../../src/components/home';
import Header from '../../src/components/header';
import Footer from '../../src/components/footer';
import Skills from '../../src/components/skills';
import { Route } from 'react-router';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ReactTestUtils from 'react-dom/test-utils';
import sinon from 'sinon';
import { shallow } from 'enzyme';

describe("src/components/app.jsx", function() {
  
  describe("Test with ReactTestUtils", function() {
  
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
      
      let initialState = {
        projects: []
      };
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

  describe("Test with Shallow Rendering", function() {
  
    let store, actions, projects, person, getProjectsSpy, getPersonSpy, shallowResult;

    beforeEach(() => {
      getPersonSpy = sinon.spy();
      getProjectsSpy = sinon.spy();
      person = { gitHubUrl: 'some-github-url', linkedinUrl: 'some-linkedin-url', occupation: 'some role', firstname: 'Barry', lastname: 'Allen' };
      projects = [{id: 1, name: 'ProjectA'}, {id: 2, name: 'ProjectB'}];
      actions = {
        getProjects: getProjectsSpy,
        getPerson: getPersonSpy
      };
      
      var initialState = {
        projects: []
      }
      store = configureMockStore()(initialState);

      shallowResult = shallow(<App store={store} actions={actions} projects={projects} person={person} />);
    });
    
    afterEach(() => {
    });

    it("renders correct component", () => {
      expect(App.prototype).to.not.be.null;
    });

    it("renders a Header component", () => {
      expect(shallowResult.find(Header).length).to.be.equal(1);
      expect(shallowResult.find(Header).props().fullName).to.be.equal(person.firstname + ' ' + person.lastname);
      expect(shallowResult.find(Header).props().githubUrl).to.be.equal(person.gitHubUrl);
      expect(shallowResult.find(Header).props().linkedinUrl).to.be.equal(person.linkedinUrl);
      expect(shallowResult.find(Header).props().projects).to.be.equal(projects);
    });

    it("renders a Footer component", () => {
      expect(shallowResult.find(Footer).length).to.be.equal(1);
      expect(shallowResult.find(Footer).props().fullName).to.be.equal(person.firstname + ' ' + person.lastname);
      expect(shallowResult.find(Footer).props().role).to.be.equal(person.occupation);
    });

    it("calls getProjects", () => {
      expect(getProjectsSpy.calledOnce).to.be.equal(true);
    });

    it("calls getPerson", () => {
      expect(getPersonSpy.calledOnce).to.be.equal(true);
    });

  });

});