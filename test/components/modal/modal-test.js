import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Modal from '../../../src/components/modal/modal';
import sinon from 'sinon';

describe("src/components/modal/modal.jsx", function() {
  
  let shallowResult, props, children; 

  describe('Main Tests', () => {

      beforeEach(() => {
          props = { modalId: 'some-id', titleIconClass: 'ic-1', title: 'some title goes here' };
          children = <div>This is some content</div>;
          shallowResult = shallow(<Modal {...props} />);
      });
    
      afterEach(() => {
      });

      it("renders correct component", () => {
          expect(Modal.prototype).to.not.be.null;    
      });

      it("should render div matching id with modalId prop", () => {
          expect(shallowResult.find('div').findWhere(x => x.props().id === props.modalId).length).to.be.equal(1);    
      });

      it("should render h2 matching with title prop", () => {
          expect(shallowResult.find('h2').props().children[2]).to.contain(props.title);    
      });

      it("should render h2 containing i tag matching className with titleIconClass prop", () => {
          expect(shallowResult.find('h2').props().children[0].props.className).to.contain(props.titleIconClass);    
      });

    //   it("should render children prop in div with class panel-body", () => {
    //       expect(shallowResult.find('div').findWhere(x => x.props().className === 'panel-body').node.props.children).to.be.equal(children);    
    //   }); + TEST a tag with data-dismiss + fix eslint $ issue

  });

});