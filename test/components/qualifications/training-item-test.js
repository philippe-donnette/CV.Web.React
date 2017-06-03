import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TrainingItem from '../../../src/components/qualifications/training-item';
import sinon from 'sinon';

describe("src/components/qualifications/training-item.jsx", function() {
  
  let shallowResult, training; 

  describe('Main Tests', () => {

      beforeEach(() => {
            training = { id: 1, name: 'training-1', imageUrl: 'some-image.png', certificateFile: 'degree.pdf', websiteUrl: 'http://somewhere' };
            shallowResult = shallow(<TrainingItem training={training} />);
      });

      afterEach(() => {
      });

      it("renders correct component", () => {
            expect(TrainingItem.prototype).to.not.be.null;    
      });

      it("should render image", () => {
            let images = shallowResult.find('img');
            expect(images.node.props.src).to.contain(training.imageUrl);    
      });

      it("should render certificate link", () => {
            let link = shallowResult.find('a').nodes.filter(x => { return x.props.href.includes(training.certificateFile); });
            expect(link.length).to.be.equal(1);    
      });

      it("should render website link", () => {
            let link = shallowResult.find('a').nodes.filter(x => { return x.props.href.includes(training.websiteUrl); });
            expect(link.length).to.be.equal(1);    
      });
  });

  describe('Tests with null for imageUrl, certificateFile, websiteUrl', () => {

      beforeEach(() => {
            training = { id: 1, name: 'training-1', imageUrl: null, certificateFile: null, websiteUrl: null };
            shallowResult = shallow(<TrainingItem training={training} />);
      });

      afterEach(() => {
      });

      it("should not render image", () => {
            let images = shallowResult.find('img');
            expect(images.length).to.be.equal(0);    
      });

      it("should not render certificate link", () => {
            let link = shallowResult.find('a').findWhere(x => x.props().href.includes(training.certificateFile));
            expect(link.length).to.be.equal(0);    
      });

      it("should not render website link", () => {
            let link = shallowResult.find('a').findWhere(x => x.props().href.includes(training.websiteUrl));
            expect(link.length).to.be.equal(0);    
      });
  });

});