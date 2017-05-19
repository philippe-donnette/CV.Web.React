import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Breadcrumb from '../../../src/components/header/breadcrumb';
import { Link } from 'react-router-dom';

describe("src/components/header/breadcrumb.jsx", function() {
  
  let shallowResult, props, title, items; 

  beforeEach(() => {
    title = 'Skills';
    items = [
        { iconClass: 'ic-1', title: 'title-1', path: 'lk-1' },
        { iconClass: 'ic-2', title: 'title-2', path: 'lk-2' }
    ];
    props = { iconClass: 'glyphicon glyphicon-wrench', items: items };
    shallowResult = shallow(<Breadcrumb {...props}>{title}</Breadcrumb>);
  });

  it("renders correct component", () => {
    expect(Breadcrumb.prototype).to.not.be.null;    
  });

  it("renders as many Link components as the number of items in props", () => {
    expect(shallowResult.find(Link).length).to.be.equal(props.items.length);    
  });

  it("matches link paths with items in props", () => {
    let links = shallowResult.find(Link).reduce((links, c) => {
        links[c.props().children[2]] = c.props().to;
        return links;
    }, {});
    items.map((item) => {
        expect(item.path).to.be.equal(links[item.title]);
    });    
  });

  it("matches link icons with items in props", () => {
    let links = shallowResult.find(Link).reduce((links, c) => {
        links[c.props().children[2]] = c.props().children[0].props.className;
        return links;
    }, {});
    items.map((item) => {
        expect(item.iconClass).to.be.equal(links[item.title]);
    });    
  });

  it('has an active li matching iconClass props', () => {
    let activeLi = shallowResult.find('li').findWhere(x => x.props().className === 'active');
    expect(activeLi.length).to.be.equal(1);
    expect(activeLi.html()).to.contain(props.iconClass);
  });

  it('has an active li matching content (title) wrapped in Breadcrumb component', () => {
    let activeLi = shallowResult.find('li').findWhere(x => x.props().className === 'active');
    expect(activeLi.length).to.be.equal(1);
    expect(activeLi.html()).to.contain(title);
  });

});  