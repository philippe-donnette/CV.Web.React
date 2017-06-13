import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TagCloud from '../../../src/components/tag-cloud/tag-cloud';
import SkillModal from '../../../src/components/tag-cloud/skill-modal';
import sinon from 'sinon';
import $ from 'jquery';

describe("src/components/tag-cloud/tag-cloud.jsx", function() {
  
  let shallowResult, props, tags, onTagClickedSpy; 

  tags = [
    { name: 'tag1', id: 1, iconClass: 'ic-1', weight: 1 },
    { name: 'tag2', id: 2, iconClass: 'ic-2', weight: 5 },
    { name: 'tag3', id: 3, iconClass: 'ic-3', weight: 3 },
    { name: 'tag4', id: 4, iconClass: 'ic-4', weight: 1 }
  ];

  describe('Main Tests', () => {

      beforeEach(() => {
            onTagClickedSpy = sinon.spy();
            shallowResult = shallow(<TagCloud isInContainer={false} items={tags} onTagClicked={onTagClickedSpy} />);
      });

      afterEach(() => {
      });

      it("renders correct component", () => {
          expect(TagCloud.prototype).to.not.be.null;    
      });

      it("renders a SkillModal component", () => {
          expect(SkillModal.prototype).to.not.be.null;    
      });

      it("renders ul without class well", () => {
          let ul = shallowResult.find('ul');
          expect(ul.props().className).to.not.contain('well');    
      });

      it("renders ul without class dn-tag-well", () => {
          let ul = shallowResult.find('ul');
          expect(ul.props().className).to.not.contain('dn-tag-well');    
      });

      it("matches number of li tag with tag length", () => {
          let li = shallowResult.find('li');
          expect(li.length).to.be.equal(tags.length);    
      });

      it("contains correct css", () => {
          let lis = shallowResult.find('li');
          lis.map((li) => {
              let tag = tags.filter((t) => { return t.name === li.find('span').props().children; })[0];
              expect(li.find('i').props().className).to.contain('dn-tag-icon-' + tag.weight);
              expect(li.find('i').props().className).to.contain(tag.iconClass);
              expect(li.find('span').props().className).to.contain('dn-tag-' + tag.weight);
          });
      });

      it("calls onTagClickedSpy function when click on a li", () => {
            shallowResult.find('li').node.props.onClick();
            expect(onTagClickedSpy.calledOnce).to.be.equal(true);
            expect(onTagClickedSpy.args[0][0].name).to.be.equal(tags[0].name);
            expect(onTagClickedSpy.args[0][0].id).to.be.equal(tags[0].id);
            expect(onTagClickedSpy.args[0][0].weight).to.be.equal(tags[0].weight);
      });

  });

  describe('isInContainer props to true Tests', () => {

      beforeEach(() => {
          onTagClickedSpy = sinon.spy();
          shallowResult = shallow(<TagCloud isInContainer={true} items={tags} onTagClicked={onTagClickedSpy} />);
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