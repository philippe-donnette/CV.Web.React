import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';
import ProjectNavLink from '../../../src/components/navbar/project-navlink';
import sinon from 'sinon';

describe("src/components/navbar/project-navlink.jsx", function() {
  
  let wrapper, shallowResult, project, spyOnClick; 

  beforeEach(() => {
    spyOnClick = sinon.spy();
    project = { id: 'A1', name: 'ProjectA' };
    shallowResult = shallow(<ProjectNavLink project={project} onClick={spyOnClick} />);
  });
  
  it("renders correct component", () => {
    expect(ProjectNavLink.prototype).to.not.be.null;    
  });

  it("contains a NavLink component", () => {
    expect(shallowResult.find(NavLink).length).to.be.equal(1);
  });
  
  it("contains correct passed prop for NavLink", () => {
    let navLink = shallowResult.find(NavLink).props().to;
    expect(navLink.pathname).to.be.equal(`/projects/${project.name}/${project.id}`);
    expect(navLink.query.id).to.be.equal(project.id);
    expect(navLink.query.name).to.be.equal(project.name);
  });

  it("matches NavLink text with project name", () => {
    let navLinkText = shallowResult.find(NavLink).props().children;
    expect(navLinkText).to.be.equal(project.name);
  });

  it("should call onClick props function on NavLink onClick event called", () => {
    let component = shallowResult.find(NavLink);
    component.simulate('click');
    expect(spyOnClick.calledOnce).to.be.true;
  });

});