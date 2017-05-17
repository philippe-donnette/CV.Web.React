import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';
import ProjectNavLink from '../../../src/components/navbar/project-navlink';

describe("src/components/navbar/project-navlink.jsx", function() {
  
  let wrapper, shallowResult, project; 

  beforeEach(() => {
    project = { id: 'A1', name: 'ProjectA' };
    shallowResult = shallow(<ProjectNavLink project={project} />);
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

});