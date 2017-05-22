import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import Header from '../Header';

describe('<Header />', () => {
  it('renders <h1 /> with a nested <Link> pointing to the root', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find(Link).prop('to')).toBe('/');
  });
});
