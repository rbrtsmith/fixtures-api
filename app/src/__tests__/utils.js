import { getItem } from '../utils';

describe('getItem', () => {
  it('returns the first item with a matching id', () => {
    const list = [
      { id: '123' },
      { id: 'abc' },
      { id: 'zyx' },
      { id: 'aaa' }
    ];
    const expected = { id: 'zyx' };
    expect(getItem(list, 'zyx')).toEqual(expected);
  });

  it('returns "undefined" if no match', () => {
    const list = [{ id: '123' }];
    expect(getItem(list, 'zyx')).toEqual(undefined);
  });
});
