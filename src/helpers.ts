export function isToday(date: Date, clientDate: Date = new Date()) {
  return date.toDateString() === clientDate.toDateString()
}

export function addDays(date: Date, days: number) {
  let result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function subtractDays(date: Date, days: number) {
  let result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
}

export function subtractYears(date: Date, years: number) {
  let result = new Date(date);
  result.setFullYear(result.getFullYear() - years);
  return result;
}

export function addYears(date: Date, years: number) {
  let result = new Date(date);
  result.setFullYear(result.getFullYear() + years);
  return result;
}

export function lessThanToday(date: Date, clientDate: Date = new Date()) {
  return clientDate >= date
}

export function greaterThanToday(date: Date, clientDate: Date = new Date()) {
  return date >= clientDate
}
