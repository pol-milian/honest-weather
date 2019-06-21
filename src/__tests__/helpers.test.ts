import { convertTemp, getDate } from '../utils/helpers'

describe('convertTemp Function', () => {
  it('correctly converts and rounds the temperature', () => {
    expect(convertTemp('273.15')).toEqual(0);
    expect(convertTemp('20')).toEqual(-253);
    expect(convertTemp('0')).toEqual(-273);
    expect(convertTemp('400')).toEqual(127);
    expect(convertTemp('-45')).toEqual(-318);
  });
})

describe('getDate Function', () => {
  it('correctly returns the date', () => {
    expect(getDate(1561085291)).toEqual(`Friday, June 21`)
    expect(getDate(946684800)).toEqual(`Saturday, Jan 1`)
    expect(getDate(946944000)).toEqual(`Tuesday, Jan 4`)

  });
})