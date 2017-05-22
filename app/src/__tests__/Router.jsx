import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import Component from '../Router';
import Header from '../Header';

describe('<Router />', () => {
  it('renders <Header />', () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('renders React Router <BrowserRouter />', () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.find(BrowserRouter).exists()).toBe(true);
  });
});
