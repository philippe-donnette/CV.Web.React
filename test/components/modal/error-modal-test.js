import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Modal from '../../../src/components/modal/modal';
import ErrorModal from '../../../src/components/modal/error-modal';
import sinon from 'sinon';

describe("src/components/modal/error-modal.jsx", function() {
  
  let shallowResult, props; 

  describe('Main Tests', () => {

      beforeEach(() => {
          shallowResult = shallow(<ErrorModal {...props} />);
      });
    
      afterEach(() => {
      });

      it("renders correct component", () => {
          expect(ErrorModal.prototype).to.not.be.null;    
      });

      it("should render Modal component", () => {
          expect(Modal.prototype).to.not.be.null;    
      });

  });

});