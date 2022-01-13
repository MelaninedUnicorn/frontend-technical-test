import { timeago, monthDayYear, monthDayYearAtTime } from '../dates'

describe('DatesUtils', () => {
    const timestamp = new Date(1572840117245).getTime();
  it('should return  how long ago since now in french in a frendlier format', () => {
    const expected = "2 ans"

    expect(timeago(timestamp)).toEqual(expected)
  })
  it('should return the date, day and year in french in a frendlier format', () => {
    const expected = "lundi le 4 novembre, 2019"

    expect(monthDayYear(timestamp)).toEqual(expected)
  })
  it('should the the date, day, year and time in french in a frendlier format', () => {
    const expected = "lundi le 4 novembre, 2019 à 05:01 am"

    expect(monthDayYearAtTime(timestamp)).toEqual(expected)
  })
  
})