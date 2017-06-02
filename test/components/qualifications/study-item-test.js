import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import StudyItem from '../../../src/components/qualifications/study-item';
import sinon from 'sinon';

describe("src/components/qualifications/study-item.jsx", function() {
  
  let shallowResult, study; 

  describe('Main Tests', () => {

      beforeEach(() => {
            study = { id: 1, name: 'study-1', imageUrl: 'some-image.png', degreeFile: 'degree.pdf', websiteUrl: 'http://somewhere' };
            shallowResult = shallow(<StudyItem study={study} />);
      });

      afterEach(() => {
      });

      it("renders correct component", () => {
            expect(StudyItem.prototype).to.not.be.null;    
      });

      it("should render image", () => {
            let images = shallowResult.find('img');
            expect(images.node.props.src).to.contain(study.imageUrl);    
      });

      it("should render certificate link", () => {
            let link = shallowResult.find('a').nodes.filter(x => { return x.props.href.includes(study.degreeFile); });
            expect(link.length).to.be.equal(1);    
      });

      it("should render website link", () => {
            let link = shallowResult.find('a').nodes.filter(x => { return x.props.href.includes(study.websiteUrl); });
            expect(link.length).to.be.equal(1);    
      });
  });

  describe('Tests with null for imageUrl, degreeFile, websiteUrl', () => {

      beforeEach(() => {
            study = { id: 1, name: 'study-1', imageUrl: null, degreeFile: null, websiteUrl: null };
            shallowResult = shallow(<StudyItem study={study} />);
      });

      afterEach(() => {
      });

      it("should not render image", () => {
            let images = shallowResult.find('img');
            expect(images.length).to.be.equal(0);    
      });

      it("should not render certificate link", () => {
            let link = shallowResult.find('a').findWhere(x => x.props().href.includes(study.degreeFile));
            expect(link.length).to.be.equal(0);    
      });

      it("should not render website link", () => {
            let link = shallowResult.find('a').findWhere(x => x.props().href.includes(study.websiteUrl));
            expect(link.length).to.be.equal(0);    
      });
  });

});