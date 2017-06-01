import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import StudyItem from '../../../src/components/qualifications/study-item';
import sinon from 'sinon';

describe("src/components/qualifications/study-item.jsx", function() {
  
  let shallowResult, study; 

  describe('Main Tests', () => {

      beforeEach(() => {
            study = { id: 1, name: 'study-1' };
            shallowResult = shallow(<StudyItem study={study} />);
      });

      afterEach(() => {
      });

      it("renders correct component", () => {
            expect(StudyItem.prototype).to.not.be.null;    
      });

  });

});