import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ErrorNotFound from '../../../src/components/error/error-not-found';
import sinon from 'sinon';

describe("src/components/error/error-not-found.jsx", function() {
  
  let shallowResult, content; 

  describe('Main Tests', () => {

      beforeEach(() => {
            content = 'Record could not be found';
            shallowResult = shallow(<ErrorNotFound>{content}</ErrorNotFound>);
      });
    
      afterEach(() => {
      });

      it("renders correct component", () => {
          expect(ErrorNotFound.prototype).to.not.be.null;    
      });

      it("should have content inside component", () => {
        expect(shallowResult.props().children).to.be.equal(content);
      });

  });

});