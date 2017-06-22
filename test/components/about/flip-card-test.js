import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FlipCard from '../../../src/components/about/flip-card';
import sinon from 'sinon';

describe("src/components/about/flip-card.jsx", function() {
  
  let shallowResult, card; 

  describe('Main Tests', () => {

      beforeEach(() => {
        card = { rotate: 'x', caption: 'caption', captionIconClass: 'icon-cap', textFront: 'text front', imageFrontUrl: 'front.png', textBack: 'text back', imageBackUrl: 'back.png' };
        shallowResult = shallow(<FlipCard card={card} />);
      });
    
      afterEach(() => {
      });

      it("renders correct component", () => {
        expect(FlipCard.prototype).to.not.be.null;    
      });

      it("should display front text in a p tag", () => {
        let text = shallowResult.find('p').findWhere(x => {
            return (typeof x.props().dangerouslySetInnerHTML !== 'undefined') && x.props().dangerouslySetInnerHTML.__html === card.textFront;
        });
        expect(text.length).to.be.equal(1);
      });

      it("should display back text in a p tag", () => {
        let text = shallowResult.find('p').findWhere(x => {
            return (typeof x.props().dangerouslySetInnerHTML !== 'undefined') && x.props().dangerouslySetInnerHTML.__html === card.textBack;
        });
        expect(text.length).to.be.equal(1);
      });

      it("should display a front image", () => {
        let image = shallowResult.find('img').findWhere(x => {
            return x.props().src === `./assets/${card.imageFrontUrl}`;
        });
        expect(image.length).to.be.equal(1);
      });

      it("should display a back image", () => {
        let image = shallowResult.find('img').findWhere(x => {
            return x.props().src === `./assets/${card.imageBackUrl}`;
        });
        expect(image.length).to.be.equal(1);
      });

      it("should display a div matching class for dn-flipcard-card", () => {
        let div = shallowResult.find('div').findWhere(x => {
            return x.props().className === `dn-flipcard-card dn-flipcard-shadow dn-flipcard-card-rotate-${card.rotate}`;
        });
        expect(div.length).to.be.equal(1);
      });

      it("should display a div matching class for dn-flipcard-container", () => {
        let div = shallowResult.find('div').findWhere(x => {
            return x.props().className === `dn-flipcard-container dn-flipcard-container-rotate-${card.rotate}`;
        });
        expect(div.length).to.be.equal(1);
      });

      it("should display an icon with class matching captionIconClass", () => {
        let icon = shallowResult.find('i').findWhere(x => {
            return x.props().className === card.captionIconClass;
        });
        expect(icon.length).to.be.equal(1);
      });

      it("should display a caption matching caption prop", () => {
        let div = shallowResult.find('div').findWhere(x => {
            return x.props().className === 'dn-flipcard-caption';
        });
        expect(div.props().children).to.contain(card.caption);
      });

  });

  describe('Tests with null values', () => {

      beforeEach(() => {
        card = { rotate: 'x', caption: 'caption', captionIconClass: 'icon-cap', textFront: null, imageFrontUrl: null, textBack: null, imageBackUrl: null };
        shallowResult = shallow(<FlipCard card={card} />);
      });
    
      afterEach(() => {
      });

      it("renders correct component", () => {
        expect(FlipCard.prototype).to.not.be.null;    
      });

      it("should not display front text in a p tag", () => {
        let text = shallowResult.find('p').findWhere(x => {
            return (typeof x.props().dangerouslySetInnerHTML !== 'undefined') && x.props().dangerouslySetInnerHTML.__html === card.textFront;
        });
        expect(text.length).to.be.equal(0);
      });

      it("should not display back text in a p tag", () => {
        let text = shallowResult.find('p').findWhere(x => {
            return (typeof x.props().dangerouslySetInnerHTML !== 'undefined') && x.props().dangerouslySetInnerHTML.__html === card.textBack;
        });
        expect(text.length).to.be.equal(0);
      });

      it("should not display a front image", () => {
        let image = shallowResult.find('img').findWhere(x => {
            return x.props().src === `./assets/${card.imageFrontUrl}`;
        });
        expect(image.length).to.be.equal(0);
      });

      it("should not display a back image", () => {
        let image = shallowResult.find('img').findWhere(x => {
            return x.props().src === `./assets/${card.imageBackUrl}`;
        });
        expect(image.length).to.be.equal(0);
      });

      it("should display a div matching class for dn-flipcard-card", () => {
        let div = shallowResult.find('div').findWhere(x => {
            return x.props().className === `dn-flipcard-card dn-flipcard-shadow dn-flipcard-card-rotate-${card.rotate}`;
        });
        expect(div.length).to.be.equal(1);
      });

  });

});