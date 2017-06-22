import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FlipCard from '../../../src/components/about/flip-card';
import ProfileCards from '../../../src/components/about/profile-cards';
import sinon from 'sinon';

describe("src/components/about/profile-cards.jsx", function() {
  
  let shallowResult, cards; 

  describe('Main Tests', () => {

      beforeEach(() => {
        cards = [{ id: 1 }, { id: 2 }, { id: 3 }];
        shallowResult = shallow(<ProfileCards cards={cards} />);
      });
    
      afterEach(() => {
      });

      it("renders correct component", () => {
        expect(ProfileCards.prototype).to.not.be.null;    
      });

      it("should display as many FlipCard components as cards prop length", () => {
        let components = shallowResult.find(FlipCard);
        expect(components.length).to.be.equal(cards.length);
      });
  });

});