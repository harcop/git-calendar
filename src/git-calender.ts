import {isToday, addDays, subtractDays, lessThanToday} from './helpers'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', "Jul", "Aug", 'Sep', 'Oct', 'Nov', 'Dec']

class MonthShape {
  weekArray: string[][] = [];
  name: string
  constructor(name: string) {
    this.name = name
  }
  get weeksLength() {
    return this.weekArray.length
  }
}

type SetMonthObjProps = {
  clientDate: Date;
  monthContainers: any[],
}

type MonthElementsProp = {
  [key: string]: MonthShape
}

export function setMonthObj ({clientDate, monthContainers}: SetMonthObjProps) {
  const monthElements: MonthElementsProp = {}
  const tempMonth = [...months]

  let isFullYear = monthContainers.length === 12
  const startMonth = isFullYear ? 1 : clientDate.getMonth() + 1

  if(!isFullYear) {
    tempMonth.push(...tempMonth.splice(0,startMonth-1), tempMonth[0])
  }

  for(let i = 0; i < tempMonth.length; i++) {
    const month = tempMonth[i]
    monthElements[`${month}-${i}`] =  new MonthShape(month)
    monthElements[`${month}-${i}`].weekArray = monthContainers[i]
  }

  return monthElements
}

export function sortDaysIntoTable(monthElements: MonthElementsProp) {
  let tableHeaders = [''] // init with empty space for the week column
  let tableElements: string[][] = [
    ['Sun'],['Mon'],['Tue'],['Wed'],['Thur'],['Fri'],['Sat']
  ];
  for(const monthObj in monthElements) {
    const month = monthElements[monthObj]
    const weekArray = month.weekArray
    tableHeaders.push(`${month.name}#${month.weeksLength}`)
    for(const week of weekArray) {
      for(let j = 0; j < week.length; j++) {
        tableElements[j].push(week[j])
      }
    }
  }

  return {
    tableHeaders,
    tableElements
  }
}

type RenderTableProp = {
  clientDate: Date,
  whichYear: number,
  isFullYear: boolean,
  isTodayChecked: boolean,
}

export function renderTable({clientDate, whichYear = 2022, isTodayChecked=false, isFullYear=false}: RenderTableProp) {
  const monthContainers = fillMonth({clientDate, whichYear, isTodayChecked, isFullYear})

  const monthElements = setMonthObj({clientDate, monthContainers})

  return sortDaysIntoTable(monthElements)
}

type FillMonthProp = {
  clientDate: Date,
  whichYear: number,
  isFullYear?: boolean,
  isTodayChecked?: boolean,
  isTest?: boolean
}

// it should show Jan - Dec if fullYear and no extra year
// it should show Mar - Mar if not fullYear from last year to current year for only current year
// it should show fullYear for any other year even if fullYear is false

// 2023, isFullYear = JAN - DEC - 12
// 2023, !isFullYear = MAR - MAR - 13

// 2022, isFullYear = JAN - DEC - 12
// 2022, !isFullYear = JAN - DEC - 12

export function fillMonth({clientDate, whichYear, isFullYear, isTodayChecked, isTest}: FillMonthProp): Array<any> {
  // Because of timezone difference btw the server and the client, it's better to use the client date since we want to display the calander based on the client date

  let currentDate = clientDate

  let currentYear = currentDate.getFullYear();
  let isCurrentYear = currentYear === whichYear

  if(!isCurrentYear) {
    isFullYear = true
  }

  let month_month = !isFullYear

  let startFromYear = `${isFullYear ? whichYear : whichYear - 1}, 01, 01`
  
  if(!isFullYear) {
    // start month-month from current date
    startFromYear = `${isFullYear ? whichYear : whichYear - 1}, ${currentDate.getMonth() + 1}, ${currentDate.getDate()}`
  }

  let container = []

  let date = new Date(startFromYear)

  let dayNumber = date.getDay()

  if(dayNumber > 0 && !isFullYear) {
    // it should start from sunday if week didn't start from sunday
    date = subtractDays(date, dayNumber)
  } 

  let month = date.getMonth()
  
  let i = 0;

  let totalMonths = 11

  // can only show month-month(Mar-Mar) for only current year 
  if(month_month) {
    totalMonths += 1;
  }
  
  let monthContainer = []

  while(i <= totalMonths) {
    let entryMonth = month
    let entryYear = date.getFullYear()
    dayNumber = date.getDay()
    let weekArray = new Array(7).fill(0)
    let innerBreak = false;
    while(dayNumber < 7) {

      if(entryYear !== date.getFullYear() && isFullYear) {
        innerBreak = true
        break;
      }

      let todayDate = date
      const dayOfMonth = date.getDate()

      let paintMe = 0;

      if(!isTest) {
        if(isToday(date, clientDate)) {
          if(isTodayChecked) {
            paintMe = 1
          }
        }else if(lessThanToday(todayDate, clientDate)) {
          paintMe = Math.floor(Math.random() * 9) + 1
        }
      }

      weekArray[dayNumber] = `${date.toDateString()}#${dayOfMonth}#${paintMe}`

      if(isToday(date, clientDate) && month_month) {
        innerBreak = true
        break;
      }

      dayNumber++
      date = addDays(date, 1); 
    }

    month = date.getMonth()
    monthContainer.push(weekArray)

    if(innerBreak) {
      container.push(monthContainer)
      break;
    }

    if(entryMonth !== month){
      i++
      container.push(monthContainer)
      monthContainer = []
    }
  }
  return container
}
