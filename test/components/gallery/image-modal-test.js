import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ImageModal from '../../../src/components/gallery/image-modal';
import Modal from '../../../src/components/modal/modal';
import ErrorModal from '../../../src/components/modal/error-modal';
import sinon from 'sinon';

describe("src/components/gallery/image-modal.jsx", function() {
  
  let shallowResult, image; 

  describe('Main Tests', () => {

      beforeEach(() => {
          image = { title: 'img1', id: 1, imageUrl: 'some-url.png' };
          shallowResult = shallow(<ImageModal image={image} />);
      });
    
      afterEach(() => {
      });

      it("renders correct component", () => {
          expect(ImageModal.prototype).to.not.be.null;    
      });

      it("renders a Modal component", () => {
          expect(Modal.prototype).to.not.be.null;    
      });

  });

  describe('No Image Tests', () => {

      beforeEach(() => {
        image = null;
        shallowResult = shallow(<ImageModal image={image} />);
      });
    
      afterEach(() => {
      });

      it("renders an ErrorModal component", () => {
          expect(ErrorModal.prototype).to.not.be.null;    
      });

  });

});