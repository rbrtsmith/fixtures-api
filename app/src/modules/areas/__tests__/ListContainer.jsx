import React from 'react';
import { shallow, mount } from 'enzyme';

import { fetchAreas } from '../../../store/actions/areas';

import { ListContainer } from '../ListContainer';
import List from '../List';

jest.mock('../../../store/actions/areas');

describe('<ListContainer />', () => {
  it('renders List passing the areas', () => {
    const areas = { loading: true };
    const props = { areas, fetchAreas };
    const wrapper = shallow(<ListContainer {...props} />);
    expect(wrapper.find(List).prop('areas')).toEqual(areas);
  });

  it('calls "fetchAreas" action when mounts', () => {
    fetchAreas.mockImplementation(() => jest.fn());
    const areas = { loading: true };
    const props = { areas, fetchAreas };
    mount(<ListContainer {...props} />);
    expect(fetchAreas).toBeCalled();
  });
});
