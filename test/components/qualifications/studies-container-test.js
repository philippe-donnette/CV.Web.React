import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import StudiesContainer from '../../../src/components/qualifications/studies-container';
import sinon from 'sinon';

describe("src/components/qualifications/studies-container.jsx", function() {
  
  let shallowResult; 

  describe('Main Tests', () => {

      beforeEach(() => {
            shallowResult = shallow(<StudiesContainer />);
      });

      afterEach(() => {
      });

      it("renders correct component", () => {
            expect(StudiesContainer.prototype).to.not.be.null;    
      });
  });

});