import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ImageGallery from '../../../src/components/gallery/image-gallery'; 
import ErrorNotFound from '../../../src/components/error/error-not-found'; 

describe("src/components/gallery/image-gallery.jsx", function() {
  
  let shallowResult, images, onImageClickSpy; 

  describe("Main Tests", () => {

    beforeEach(() => {
      onImageClickSpy = sinon.spy();
      images = [
        { imageUrl: 'some-url1.png', name: 'img1' },
        { imageUrl: 'some-url2.png', name: 'img2' },
        { imageUrl: 'some-url3.png', name: 'img3' }
      ];
      shallowResult = shallow(<ImageGallery images={images} onImageClick={onImageClickSpy} />);
    });
    
    afterEach(() => {
    });

    it("renders correct component", () => {
      expect(ImageGallery.prototype).to.not.be.null;    
    });

    it("renders as many images as images props", () => {
      let imgs = shallowResult.find('img');
      expect(imgs.length).to.be.equal(images.length);    
    });

    it("should not have ErrorNotFound component", () => {
      let component = shallowResult.find(ErrorNotFound);
      expect(component.length).to.be.equal(0);    
    });

  });

  describe("Images undefined", () => {

    beforeEach(() => {
      onImageClickSpy = sinon.spy();
      images = undefined;
      shallowResult = shallow(<ImageGallery images={images} onImageClick={onImageClickSpy} />);
    });
    
    afterEach(() => {
    });

    it("renders correct component", () => {
      expect(ImageGallery.prototype).to.not.be.null;    
    });

    it("should not break when images is undefined", () => {
      expect(typeof images).to.be.equal('undefined');
    });

    it("should have ErrorNotFound component", () => {
      let component = shallowResult.find(ErrorNotFound);
      expect(component.length).to.be.equal(1);    
    });

  });

  describe("Images null", () => {

    beforeEach(() => {
      onImageClickSpy = sinon.spy();
      images = null;
      shallowResult = shallow(<ImageGallery images={images} onImageClick={onImageClickSpy} />);
    });
    
    afterEach(() => {
    });

    it("renders correct component", () => {
      expect(ImageGallery.prototype).to.not.be.null;    
    });

    it("should not break when images is null", () => {
      expect(images).to.be.equal(null);
    });

    it("should have ErrorNotFound component", () => {
      let component = shallowResult.find(ErrorNotFound);
      expect(component.length).to.be.equal(1);    
    });

  });

});