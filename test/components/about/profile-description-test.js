import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ProfileDescription from '../../../src/components/about/profile-description';
import sinon from 'sinon';

describe("src/components/about/profile-description.jsx", function() {
  
  let shallowResult, description; 

  describe('Main Tests', () => {

      beforeEach(() => {
        description = 'some description text goes here';
        shallowResult = shallow(<ProfileDescription description={description} />);
      });
    
      afterEach(() => {
      });

      it("renders correct component", () => {
        expect(ProfileDescription.prototype).to.not.be.null;    
      });

      it("should display description in a div", () => {
        let desc = shallowResult.find('div').findWhere(x => {
            return (typeof x.props().dangerouslySetInnerHTML !== 'undefined') && x.props().dangerouslySetInnerHTML.__html === description;
        });
        expect(desc.length).to.be.equal(1);
      });

  });

});