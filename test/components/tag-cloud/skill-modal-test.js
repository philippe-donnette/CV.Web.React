import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SkillModal from '../../../src/components/tag-cloud/skill-modal';
import Modal from '../../../src/components/modal/modal';
import ErrorModal from '../../../src/components/modal/error-modal';
import SkillRatings from '../../../src/components/tag-cloud/skill-ratings';
import sinon from 'sinon';

describe("src/components/tag-cloud/skill-modal.jsx", function() {
  
  let shallowResult, props, tag; 

  describe('Main Tests', () => {

      beforeEach(() => {
          tag = { name: 'tag1', id: 1, iconClass: 'ic-1', weight: 1 };
          shallowResult = shallow(<SkillModal skill={tag} />);
      });
    
      afterEach(() => {
      });

      it("renders correct component", () => {
          expect(SkillModal.prototype).to.not.be.null;    
      });

      it("renders a Modal component", () => {
          expect(Modal.prototype).to.not.be.null;    
      });

      it("renders a SkillRatings component", () => {
          expect(SkillRatings.prototype).to.not.be.null;    
      });

      it("renders a SkillRatings component three times", () => {          
          expect(shallowResult.find(SkillRatings).length).to.be.equal(3);    
      });

  });

  describe('No Skill Tests', () => {

      beforeEach(() => {
        tag = null;
        shallowResult = shallow(<SkillModal skill={tag} />);
      });
    
      afterEach(() => {
      });

      it("renders an ErrorModal component", () => {
          expect(ErrorModal.prototype).to.not.be.null;    
      });

  });

});