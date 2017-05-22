import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import List from '../List';

describe('<List />', () => {
  it('displays a loading message when loading areas', () => {
    const areas = { loading: true };
    const wrapper = shallow(<List areas={areas} />);
    expect(wrapper.text()).toMatch('Loading areas');
  });

  it('displays an error message when error', () => {
    const areas = { error: true };
    const wrapper = shallow(<List areas={areas} />);
    expect(wrapper.text()).toMatch('Error Loading areas');
  });

  it('renders the list of areas with appropriate links', () => {
    const areas = {
      data: [
        { id: '1', name: 'UK' },
        { id: '2', name: 'FRA' }
      ]
    };
    const wrapper = shallow(<List areas={areas} />);
    expect(wrapper.find(Link).first().prop('to')).toBe('/areas/1/competitions');
    expect(wrapper.find(Link).last().prop('to')).toBe('/areas/2/competitions');
  });
});
