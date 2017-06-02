import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { TrainingsContainer } from '../../../src/components/qualifications/trainings-container';
import TrainingItem from '../../../src/components/qualifications/training-item';
import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';

describe("src/components/qualifications/trainings-container.jsx", function() {
  
  let shallowResult, getTrainingsSpy, trainings, initialState, store, actions; 

  describe('Main Tests', () => {

      beforeEach(() => {
            getTrainingsSpy = sinon.spy(); 
            trainings = [
                  { id: 1, name: 'training-1' },
                  { id: 2, name: 'training-2' }
            ];
            actions = { getTrainings: getTrainingsSpy }
            initialState = { trainings: [] };
            store = configureMockStore()(initialState);
            shallowResult = shallow(<TrainingsContainer store={store} actions={actions} trainings={trainings} />);
      });

      afterEach(() => {
      });

      it("renders correct component", () => {
            expect(TrainingsContainer.prototype).to.not.be.null;    
      });

      it("renders as many TrainingItem components as trainings props length", () => {
            expect(shallowResult.find(TrainingItem).length).to.be.equal(trainings.length);    
      });

      it("calls getTrainings", () => {
            expect(getTrainingsSpy.calledOnce).to.be.equal(true);
      });
  });

});