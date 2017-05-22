import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import store from '../store';
import Router from '../Router';
import App from '../';

jest.mock('react-dom');

beforeEach(() => {
  render.mockImplementation(() => jest.fn());
});

describe('<App />', () => {
  it('renders <Provider /> passing the store', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Provider).prop('store')).toEqual(store);
  });

  it('renders <Router />', () => {
    render.mockImplementation(() => jest.fn());
    const wrapper = shallow(<App />);
    expect(wrapper.find(Router).exists()).toBe(true);
  });
});
