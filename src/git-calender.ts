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
  startMonth: number;
  monthContainers: any[],
  isFullYear: boolean
}

type MonthElementsProp = {
  [key: string]: MonthShape
}

export function setMonthObj ({startMonth, monthContainers, isFullYear=false}: SetMonthObjProps) {
  const monthElements: MonthElementsProp = {}
  const tempMonth = [...months]
  if(!isFullYear) {
    tempMonth.push(...tempMonth.splice(0,startMonth-1), tempMonth[0])
  }
  console.log(tempMonth)
  for(let i = 0; i < tempMonth.length; i++) {
    const month = tempMonth[i]
    monthElements[`${month}-${i}`] =  new MonthShape(month)
    monthElements[`${month}-${i}`].weekArray = monthContainers[i]
  }
  return monthElements
}

type SortDaysIntoTableProp = {
  startFrom: string;
  isFullYear: boolean
  isTodayChecked: boolean,
}

// export function sortDaysIntoTable({startFrom = '2022, 01, 01', isTodayChecked=false, isFullYear=false}: SortDaysIntoTableProp) {
//   const startMonth = Number(startFrom.split(',')[1])
//   const monthContainers = fillMonth({startFrom, isTodayChecked, isFullYear})
//   const monthElements = setMonthObj({startMonth, monthContainers, isFullYear})
//   let tableHeaders = []
//   let tableElements: string[][] = [
//     [],[],[],[],[],[],[]
//   ];
//   for(const monthObj in monthElements) {
//     const month = monthElements[monthObj]
//     console.log(month.name, monthObj)
//     const weekArray = month.weekArray
//     tableHeaders.push(`${month.name}#${month.weeksLength}`)
//     for(const week of weekArray) {
//       for(let j = 0; j < week.length; j++) {
//         tableElements[j].push(week[j])
//       }
//     }
//   }
//   return {
//     tableHeaders,
//     tableElements
//   }
// }

type FillMonthProp = {
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

export function fillMonth({whichYear, isFullYear, isTodayChecked, isTest}: FillMonthProp): Array<any> {
  let currentDate = new Date()
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
        if(isToday(date)) {
          if(isTodayChecked) {
            paintMe = 1
          }
        }else if(lessThanToday(todayDate)) {
          paintMe = Math.floor(Math.random() * 9) + 1
        }
      }

      weekArray[dayNumber] = `${date.toDateString()}#${dayOfMonth}#${paintMe}`

      if(isToday(date) && month_month) {
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

export function isToday(date: Date) {
  return date.toDateString() === new Date().toDateString()
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

export function lessThanToday(date: Date) {
  return new Date() >= date
}

export function greaterThanToday(date: Date) {
  return date >= new Date()
}

// sortDaysIntoTable({startFrom: '2023, 01, 01', isTodayChecked: false, isFullYear: true})
// console.log(fillMonth({whichYear:2023, isFullYear:false, isTodayChecked:false}));


// it should show Jan - Dec if fullYear and no extra year
// it should show Mar - Mar if not fullYear from last year to current year
// it should show fullYear for any other year even if fullYear is false
