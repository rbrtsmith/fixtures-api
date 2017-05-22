import nock from 'nock';
import { fetchAreas, fetchAreasRequest } from '../areas';

describe('fetchAreas', () => {
  it('dispatches fetchAreasRequest action', async () => {
    nock('http://localhost:9000')
      .get('/areas')
      .reply(200, { body: { areas: [{ id: '1' }] } });

    const dispatch = jest.fn();
    await fetchAreas()(dispatch);
    expect(dispatch).toBeCalledWith(fetchAreasRequest());
  });
});
