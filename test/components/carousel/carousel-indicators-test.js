import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CarouselIndicators from '../../../src/components/carousel/carousel-indicators';
import sinon from 'sinon';

describe("src/components/carousel/carousel-indicators.jsx", function() {
  
  let shallowResult, items, selected, onChangeSpy; 

  describe('Main Tests', () => {

      beforeEach(() => {
          onChangeSpy = sinon.spy();
          items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
          selected = 3;
          shallowResult = shallow(<CarouselIndicators selected={selected} items={items} onChange={onChangeSpy} />);
      });
    
      afterEach(() => {
      });

      it("renders correct component", () => {
          expect(CarouselIndicators.prototype).to.not.be.null;    
      });

      it("should have as many li tag as items", () => {
        let tags = shallowResult.find('li');
        expect(tags.length).to.be.equal(items.length);
      });

  });

});