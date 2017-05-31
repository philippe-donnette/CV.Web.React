import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SkillVersions from '../../../src/components/tag-cloud/skill-versions';
import sinon from 'sinon';

describe("src/components/tag-cloud/skill-versions.jsx", function() {
  
  let shallowResult, props; 

  describe('Main Tests', () => {

      beforeEach(() => {
            props = { versions: ['v1', 'v2', 'v3'] };
            shallowResult = shallow(<SkillVersions {...props} />);
      });

      afterEach(() => {
      });

      it("renders correct component", () => {
            expect(SkillVersions.prototype).to.not.be.null;    
      });

      it("should update dom when props changed", () => {
            expect(shallowResult.find('li').length).to.be.equal(props.versions.length);
            let newVersions = ['va', 'vb'];
            shallowResult.setProps({ versions: newVersions });
            expect(shallowResult.find('li').length).to.be.equal(newVersions.length);
      });

      it("should match li tags occurences with versions length prop", () => {
            expect(shallowResult.find('li').length).to.be.equal(props.versions.length);
      });

  });

});