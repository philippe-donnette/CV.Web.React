import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SkillModal from '../../../src/components/tag-cloud/skill-modal';
import sinon from 'sinon';

describe("src/components/tag-cloud/skill-modal.jsx", function() {
  
  let shallowResult, props, tag; 

  tag = { name: 'tag1', id: 1, iconClass: 'ic-1', weight: 1 };

  describe('Main Tests', () => {

      beforeEach(() => {
          shallowResult = shallow(<SkillModal skill={tag} />);
      });
    
      afterEach(() => {
      });

      it("renders correct component", () => {
          expect(SkillModal.prototype).to.not.be.null;    
      });

  });

});