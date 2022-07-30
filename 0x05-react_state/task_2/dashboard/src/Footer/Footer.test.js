import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});


const wrapper = shallow(<Footer/>)
describe('Footer component', () => {
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the text “Copyright”', () => {
    expect(wrapper.find('p').text()).toContain("Copyright");
  })
})