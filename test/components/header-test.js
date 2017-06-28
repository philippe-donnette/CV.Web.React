import React from 'react';
import { expect } from 'chai';
import { Header } from '../../src/components/header';
import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';
import ProjectNavLink from '../../src/components/navbar/project-navlink';
import sinon from 'sinon';

describe("src/components/header.jsx", function() {
  
  let wrapper, shallowResult, projects, githubUrl, linkedinUrl, location, stubNavLinkClicked; 

  beforeEach(() => {
    stubNavLinkClicked = sinon.stub(Header.prototype, 'navLinkClicked').callsFake(x => {
      return null;
    });
    githubUrl = 'http://some-githuburl-passed-in-props';
    linkedinUrl = 'http://some-linkedinurl-passed-in-props';
    projects = [
        { id: 'A1', name: 'ProjectA' },
        { id: 'B2', name: 'ProjectB' },
        { id: 'C3', name: 'ProjectC' }
    ];
    location = { pathname: '/abcd' };
    shallowResult = shallow(<Header location={location} projects={projects} githubUrl={githubUrl} linkedinUrl={linkedinUrl} />);
  });
  
  afterEach(() => {
    Header.prototype.navLinkClicked.restore();
  });

  it("renders correct component", () => {
    expect(Header.prototype).to.not.be.null;    
  });

  it("contains correct passed prop for each top level NavLinks", () => {
    let navLinks = [];
    shallowResult.find(NavLink).forEach((value) => {
        navLinks[value.props().to] = value.props().children[1].trim();
    });
    expect(navLinks['/']).to.be.equal('Home');
    expect(navLinks['/skills']).to.be.equal('Skills');
    expect(navLinks['/qualifications-training']).to.be.equal('Qualifications');
    expect(navLinks['/experience']).to.be.equal('Experience');
    expect(navLinks['/about']).to.be.equal('About Me');
  });
  
  it("contains correct passed prop for Projects NavLink", () => {
    let navLink = null;
    shallowResult.find(NavLink).forEach((value) => {
        if(value.props().to === '/projects') {
            navLink = value;
        }
    });
    expect(navLink.props().to).to.be.equal('/projects');
    expect(navLink.props().children.trim()).to.be.equal('View All');
  });

  it("matches Projects with ProjectNavLink components", () => {
    let projectNavLinks = [];
    shallowResult.find(ProjectNavLink).forEach((value) => {
        projectNavLinks[value.props().project.id] = value.props().project.name;
    });
    projects.forEach((value) => {
        expect(projectNavLinks[value.id]).to.be.equal(value.name);
    });
  });

  it("matches social links with props", () => {
    const links = shallowResult.find('a').reduce((links, link) => {
      if(link.props().children[1] != undefined) {
        links[link.props().children[1].trim()] = link.props().href;
      }
      return links;
    }, {});

    expect(links['Github']).to.be.equal(githubUrl);
    expect(links['Linkedin']).to.be.equal(linkedinUrl);
    expect(links['Projects']).to.be.equal('#');
  });

  it("should not have projects href tag with active className", () => {
    let link = shallowResult.find('a').findWhere(x => { 
      if (typeof x.props().children !== 'undefined' && x.props().children !== null) {
        return x.props().children.length === 3 && x.props().children[1] === ' Projects ';
      }
    });
    expect(link.props().className).to.not.contain('active');
  });

  it("should have project a href tag with active className", () => {
    shallowResult.setProps({ location: { pathname: '/projects/anythingelse' } });
    let link = shallowResult.find('a').findWhere(x => { 
      if (typeof x.props().children !== 'undefined' && x.props().children !== null) {
        return x.props().children.length === 3 && x.props().children[1] === ' Projects ';
      }
    });
    expect(link.props().className).to.contain('active');
  });

  it("should call navLinkClicked when clicking on any ProjectNavLink components", () => {
    shallowResult.find(ProjectNavLink).forEach((component) => {
      stubNavLinkClicked.reset();
      component.simulate('click');
      expect(stubNavLinkClicked.calledOnce).to.be.true;
    });
  });

  it("should call navLinkClicked when clicking on any NavLink components", () => {
    shallowResult.find(NavLink).findWhere(x => typeof x.props().onClick !== 'undefined').forEach((component) => {
      stubNavLinkClicked.reset();
      component.simulate('click');
      expect(stubNavLinkClicked.calledOnce).to.be.true;
    });
  });

});