import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TagCloud from '../../../src/components/tag-cloud/tag-cloud';

describe("src/components/tag-cloud/tag-cloud.jsx", function() {
  
  let shallowResult, props, tags; 

  tags = [
    { name: 'tag1', id: 1, iconClass: 'ic-1' },
    { name: 'tag2', id: 2, iconClass: 'ic-2' },
    { name: 'tag3', id: 3, iconClass: 'ic-3' },
    { name: 'tag4', id: 4, iconClass: 'ic-4' }
  ];

  describe('Main Tests', () => {

      beforeEach(() => {
          shallowResult = shallow(<TagCloud isInContainer={false} items={tags} />);
      });
    
      it("renders correct component", () => {
          expect(TagCloud.prototype).to.not.be.null;    
      });

      it("renders ul without class well", () => {
          let ul = shallowResult.find('ul');
          expect(ul.props().className).to.not.contain('well');    
      });

      it("renders ul without class dn-tag-well", () => {
          let ul = shallowResult.find('ul');
          expect(ul.props().className).to.not.contain('dn-tag-well');    
      });

  });

  describe('isInContainer props to true Tests', () => {

      beforeEach(() => {
          shallowResult = shallow(<TagCloud isInContainer={true} items={tags} />);
      });
      
      it("renders ul with class well", () => {
          let ul = shallowResult.find('ul');
          expect(ul.props().className).to.contain('well');    
      });

      it("renders ul with class dn-tag-well", () => {
          let ul = shallowResult.find('ul');
          expect(ul.props().className).to.contain('dn-tag-well');    
      });

  });

});