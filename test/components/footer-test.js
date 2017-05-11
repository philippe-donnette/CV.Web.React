import React from 'react';
import { expect } from 'chai';
import Footer from '../../src/components/footer';
import { shallow } from 'enzyme';

describe("src/components/footer.jsx", function() {
  
  let wrapper, shallowResult, person; 

  beforeEach(() => {
    person = {
      firstname: 'Philippe',
      lastname: 'Donnette',
      occupation: 'Full Stack Web Developer'
    };
    shallowResult = shallow(<Footer fullName={person.firstname + ' ' + person.lastname} role={person.occupation} />);
  });
  
  it("renders correct component", () => {
    expect(Footer.prototype).to.not.be.null;    
  });

  it("contains current year", () => {
    expect(shallowResult.html()).to.contains((new Date()).getFullYear());
  });
  
  it("contains prop fullName in html", () => {
    expect(shallowResult.html()).to.contains(person.firstname + ' ' + person.lastname);
  });

  it("contains prop role in html", () => {
    expect(shallowResult.html()).to.contains(person.occupation);
  });

});