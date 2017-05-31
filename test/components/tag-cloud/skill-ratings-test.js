import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SkillRatings from '../../../src/components/tag-cloud/skill-ratings';
import sinon from 'sinon';

describe("src/components/tag-cloud/skill-ratings.jsx", function() {
  
  let shallowResult, props, getRatingsSpy; 

  describe('Main Tests', () => {

      beforeEach(() => {
            props = { rating: 7, max: 10 };
            getRatingsSpy = sinon.spy(SkillRatings.prototype, 'getRatings');
            shallowResult = shallow(<SkillRatings {...props} />);
      });

      afterEach(() => {
            SkillRatings.prototype.getRatings.restore();
      });

      it("renders correct component", () => {
            expect(SkillRatings.prototype).to.not.be.null;    
      });
      
      it("should call getRatings", () => {
            expect(getRatingsSpy.withArgs(props.rating, props.max).calledOnce).to.be.equal(true);    
      });

      it("should call getRatings for the second times when props changed", () => {
            expect(getRatingsSpy.withArgs(props.rating, props.max).calledOnce).to.be.equal(true);    
            shallowResult.setProps({ rating: 3, max: 8 });
            expect(getRatingsSpy.calledTwice).to.be.equal(true);    
            expect(getRatingsSpy.secondCall.args[0]).to.be.equal(3);
            expect(getRatingsSpy.secondCall.args[1]).to.be.equal(8);
      });

      it("should match i tags occurences with max prop", () => {
            expect(shallowResult.find('i').length).to.be.equal(props.max);
      });

      it("should match fa-star className occurences with rating prop", () => {
            expect(shallowResult.find('i').findWhere(x => x.props().className === 'fa fa-2x dn-star fa-star').length).to.be.equal(props.rating);
      });

      it("should match fa-star-o className occurences with diff between max prop and rating prop", () => {
            expect(shallowResult.find('i').findWhere(x => x.props().className === 'fa fa-2x dn-star fa-star-o').length).to.be.equal(props.max - props.rating);
      });

  });

});