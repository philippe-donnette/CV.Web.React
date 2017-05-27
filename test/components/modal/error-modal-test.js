import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Modal from '../../../src/components/modal/modal';
import ErrorModal from '../../../src/components/modal/error-modal';
import sinon from 'sinon';

describe("src/components/modal/error-modal.jsx", function() {
  
  let shallowResult, props, content; 

  describe('Main Tests', () => {

      beforeEach(() => {
            content = 'A sample error details';
            shallowResult = shallow(<ErrorModal {...props}>{content}</ErrorModal>);
      });
    
      afterEach(() => {
      });

      it("renders correct component", () => {
          expect(ErrorModal.prototype).to.not.be.null;    
      });

      it("should render Modal component", () => {
          expect(Modal.prototype).to.not.be.null;    
      });

      it("should have content inside Modal tag", () => {
        let modal = shallowResult.find(Modal);
        expect(modal.props().children).to.be.equal(content);
      });

  });

});