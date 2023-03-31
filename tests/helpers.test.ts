import test from 'ava';
import { lessThanToday, subtractDays, addDays, isToday, addYears, subtractYears } from '../src/helpers';

test('should return true if date is less than today', t => {
  let todayDate = new Date('2022, 01, 01')
  t.is(lessThanToday(todayDate), true)
})

test('should return false if date is not less than today', t => {
  let todayDate = new Date('2024, 01, 01')
  t.is(lessThanToday(todayDate), false)
})

test('should subtract 1 day from date', t => {
  let date = new Date('2024, 01, 02')
  let expectedDate = new Date('2024, 01, 01')
  t.deepEqual(subtractDays(date, 1), expectedDate)
})

test('should subtract 1 year from date', t => {
  let date = new Date('2024, 01, 01')
  let expectedDate = new Date('2023, 01, 01')
  t.deepEqual(subtractYears(date, 1), expectedDate)
})

test('should add 1 year from date', t => {
  let date = new Date('2024, 01, 01')
  let expectedDate = new Date('2025, 01, 01')
  t.deepEqual(addYears(date, 1), expectedDate)
})

test('should add 1 day from date', t => {
  let date = new Date('2024, 01, 02')
  let expectedDate = new Date('2024, 01, 03')
  t.deepEqual(addDays(date, 1), expectedDate)
})

test('should return true if date is today', t => {
  let date = new Date()
  t.deepEqual(isToday(date), true)
})

test('should return false if date is not today', t => {
  let date = new Date('2022, 01, 01')
  t.deepEqual(isToday(date), false)
})
