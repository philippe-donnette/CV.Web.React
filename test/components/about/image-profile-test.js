import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ImageProfile from '../../../src/components/about/image-profile';
import sinon from 'sinon';

describe("src/components/about/image-profile.jsx", function() {
  
  let shallowResult; 

  describe('Main Tests', () => {

      beforeEach(() => {
          shallowResult = shallow(<ImageProfile />);
      });
    
      afterEach(() => {
      });

      it("renders correct component", () => {
          expect(ImageProfile.prototype).to.not.be.null;    
      });
      
  });

});