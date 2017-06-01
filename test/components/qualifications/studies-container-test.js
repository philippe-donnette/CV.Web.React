import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { StudiesContainer } from '../../../src/components/qualifications/studies-container';
import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';

describe("src/components/qualifications/studies-container.jsx", function() {
  
  let shallowResult, getStudiesSpy, studies, initialState, store, actions; 

  describe('Main Tests', () => {

      beforeEach(() => {
            getStudiesSpy = sinon.spy(); 
            studies = [
                  { id: 1, name: 'study-1' },
                  { id: 2, name: 'study-2' }
            ];
            actions = { getStudies: getStudiesSpy }
            initialState = { studies: [] };
            store = configureMockStore()(initialState);
            shallowResult = shallow(<StudiesContainer store={store} actions={actions} studies={studies} />);
      });

      afterEach(() => {
      });

      it("renders correct component", () => {
            expect(StudiesContainer.prototype).to.not.be.null;    
      });

      it("calls getStudies", () => {
            expect(getStudiesSpy.calledOnce).to.be.equal(true);
      });
  });

});