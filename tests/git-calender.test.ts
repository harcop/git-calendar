import test from 'ava';
import { lessThanToday, subtractDays, addDays, isToday, fillMonth, addYears, subtractYears } from '../src/git-calender';

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

test('should return only the days of the year in array container if it is full year and if year is not the current year', t => {
  let whichYear = 2021;
  let isTest = true;
  const expected = [
  [
    [ 0, 0, 0, 0, 0, 'Fri Jan 01 2021#1#0', 'Sat Jan 02 2021#2#0' ],
    [
      'Sun Jan 03 2021#3#0',
      'Mon Jan 04 2021#4#0',
      'Tue Jan 05 2021#5#0',
      'Wed Jan 06 2021#6#0',
      'Thu Jan 07 2021#7#0',
      'Fri Jan 08 2021#8#0',
      'Sat Jan 09 2021#9#0'
    ],
    [
      'Sun Jan 10 2021#10#0',
      'Mon Jan 11 2021#11#0',
      'Tue Jan 12 2021#12#0',
      'Wed Jan 13 2021#13#0',
      'Thu Jan 14 2021#14#0',
      'Fri Jan 15 2021#15#0',
      'Sat Jan 16 2021#16#0'
    ],
    [
      'Sun Jan 17 2021#17#0',
      'Mon Jan 18 2021#18#0',
      'Tue Jan 19 2021#19#0',
      'Wed Jan 20 2021#20#0',
      'Thu Jan 21 2021#21#0',
      'Fri Jan 22 2021#22#0',
      'Sat Jan 23 2021#23#0'
    ],
    [
      'Sun Jan 24 2021#24#0',
      'Mon Jan 25 2021#25#0',
      'Tue Jan 26 2021#26#0',
      'Wed Jan 27 2021#27#0',
      'Thu Jan 28 2021#28#0',
      'Fri Jan 29 2021#29#0',
      'Sat Jan 30 2021#30#0'
    ],
    [
      'Sun Jan 31 2021#31#0',
      'Mon Feb 01 2021#1#0',
      'Tue Feb 02 2021#2#0',
      'Wed Feb 03 2021#3#0',
      'Thu Feb 04 2021#4#0',
      'Fri Feb 05 2021#5#0',
      'Sat Feb 06 2021#6#0'
    ]
  ],
  [
    [
      'Sun Feb 07 2021#7#0',
      'Mon Feb 08 2021#8#0',
      'Tue Feb 09 2021#9#0',
      'Wed Feb 10 2021#10#0',
      'Thu Feb 11 2021#11#0',
      'Fri Feb 12 2021#12#0',
      'Sat Feb 13 2021#13#0'
    ],
    [
      'Sun Feb 14 2021#14#0',
      'Mon Feb 15 2021#15#0',
      'Tue Feb 16 2021#16#0',
      'Wed Feb 17 2021#17#0',
      'Thu Feb 18 2021#18#0',
      'Fri Feb 19 2021#19#0',
      'Sat Feb 20 2021#20#0'
    ],
    [
      'Sun Feb 21 2021#21#0',
      'Mon Feb 22 2021#22#0',
      'Tue Feb 23 2021#23#0',
      'Wed Feb 24 2021#24#0',
      'Thu Feb 25 2021#25#0',
      'Fri Feb 26 2021#26#0',
      'Sat Feb 27 2021#27#0'
    ],
    [
      'Sun Feb 28 2021#28#0',
      'Mon Mar 01 2021#1#0',
      'Tue Mar 02 2021#2#0',
      'Wed Mar 03 2021#3#0',
      'Thu Mar 04 2021#4#0',
      'Fri Mar 05 2021#5#0',
      'Sat Mar 06 2021#6#0'
    ]
  ],
  [
    [
      'Sun Mar 07 2021#7#0',
      'Mon Mar 08 2021#8#0',
      'Tue Mar 09 2021#9#0',
      'Wed Mar 10 2021#10#0',
      'Thu Mar 11 2021#11#0',
      'Fri Mar 12 2021#12#0',
      'Sat Mar 13 2021#13#0'
    ],
    [
      'Sun Mar 14 2021#14#0',
      'Mon Mar 15 2021#15#0',
      'Tue Mar 16 2021#16#0',
      'Wed Mar 17 2021#17#0',
      'Thu Mar 18 2021#18#0',
      'Fri Mar 19 2021#19#0',
      'Sat Mar 20 2021#20#0'
    ],
    [
      'Sun Mar 21 2021#21#0',
      'Mon Mar 22 2021#22#0',
      'Tue Mar 23 2021#23#0',
      'Wed Mar 24 2021#24#0',
      'Thu Mar 25 2021#25#0',
      'Fri Mar 26 2021#26#0',
      'Sat Mar 27 2021#27#0'
    ],
    [
      'Sun Mar 28 2021#28#0',
      'Mon Mar 29 2021#29#0',
      'Tue Mar 30 2021#30#0',
      'Wed Mar 31 2021#31#0',
      'Thu Apr 01 2021#1#0',
      'Fri Apr 02 2021#2#0',
      'Sat Apr 03 2021#3#0'
    ]
  ],
  [
    [
      'Sun Apr 04 2021#4#0',
      'Mon Apr 05 2021#5#0',
      'Tue Apr 06 2021#6#0',
      'Wed Apr 07 2021#7#0',
      'Thu Apr 08 2021#8#0',
      'Fri Apr 09 2021#9#0',
      'Sat Apr 10 2021#10#0'
    ],
    [
      'Sun Apr 11 2021#11#0',
      'Mon Apr 12 2021#12#0',
      'Tue Apr 13 2021#13#0',
      'Wed Apr 14 2021#14#0',
      'Thu Apr 15 2021#15#0',
      'Fri Apr 16 2021#16#0',
      'Sat Apr 17 2021#17#0'
    ],
    [
      'Sun Apr 18 2021#18#0',
      'Mon Apr 19 2021#19#0',
      'Tue Apr 20 2021#20#0',
      'Wed Apr 21 2021#21#0',
      'Thu Apr 22 2021#22#0',
      'Fri Apr 23 2021#23#0',
      'Sat Apr 24 2021#24#0'
    ],
    [
      'Sun Apr 25 2021#25#0',
      'Mon Apr 26 2021#26#0',
      'Tue Apr 27 2021#27#0',
      'Wed Apr 28 2021#28#0',
      'Thu Apr 29 2021#29#0',
      'Fri Apr 30 2021#30#0',
      'Sat May 01 2021#1#0'
    ]
  ],
  [
    [
      'Sun May 02 2021#2#0',
      'Mon May 03 2021#3#0',
      'Tue May 04 2021#4#0',
      'Wed May 05 2021#5#0',
      'Thu May 06 2021#6#0',
      'Fri May 07 2021#7#0',
      'Sat May 08 2021#8#0'
    ],
    [
      'Sun May 09 2021#9#0',
      'Mon May 10 2021#10#0',
      'Tue May 11 2021#11#0',
      'Wed May 12 2021#12#0',
      'Thu May 13 2021#13#0',
      'Fri May 14 2021#14#0',
      'Sat May 15 2021#15#0'
    ],
    [
      'Sun May 16 2021#16#0',
      'Mon May 17 2021#17#0',
      'Tue May 18 2021#18#0',
      'Wed May 19 2021#19#0',
      'Thu May 20 2021#20#0',
      'Fri May 21 2021#21#0',
      'Sat May 22 2021#22#0'
    ],
    [
      'Sun May 23 2021#23#0',
      'Mon May 24 2021#24#0',
      'Tue May 25 2021#25#0',
      'Wed May 26 2021#26#0',
      'Thu May 27 2021#27#0',
      'Fri May 28 2021#28#0',
      'Sat May 29 2021#29#0'
    ],
    [
      'Sun May 30 2021#30#0',
      'Mon May 31 2021#31#0',
      'Tue Jun 01 2021#1#0',
      'Wed Jun 02 2021#2#0',
      'Thu Jun 03 2021#3#0',
      'Fri Jun 04 2021#4#0',
      'Sat Jun 05 2021#5#0'
    ]
  ],
  [
    [
      'Sun Jun 06 2021#6#0',
      'Mon Jun 07 2021#7#0',
      'Tue Jun 08 2021#8#0',
      'Wed Jun 09 2021#9#0',
      'Thu Jun 10 2021#10#0',
      'Fri Jun 11 2021#11#0',
      'Sat Jun 12 2021#12#0'
    ],
    [
      'Sun Jun 13 2021#13#0',
      'Mon Jun 14 2021#14#0',
      'Tue Jun 15 2021#15#0',
      'Wed Jun 16 2021#16#0',
      'Thu Jun 17 2021#17#0',
      'Fri Jun 18 2021#18#0',
      'Sat Jun 19 2021#19#0'
    ],
    [
      'Sun Jun 20 2021#20#0',
      'Mon Jun 21 2021#21#0',
      'Tue Jun 22 2021#22#0',
      'Wed Jun 23 2021#23#0',
      'Thu Jun 24 2021#24#0',
      'Fri Jun 25 2021#25#0',
      'Sat Jun 26 2021#26#0'
    ],
    [
      'Sun Jun 27 2021#27#0',
      'Mon Jun 28 2021#28#0',
      'Tue Jun 29 2021#29#0',
      'Wed Jun 30 2021#30#0',
      'Thu Jul 01 2021#1#0',
      'Fri Jul 02 2021#2#0',
      'Sat Jul 03 2021#3#0'
    ]
  ],
  [
    [
      'Sun Jul 04 2021#4#0',
      'Mon Jul 05 2021#5#0',
      'Tue Jul 06 2021#6#0',
      'Wed Jul 07 2021#7#0',
      'Thu Jul 08 2021#8#0',
      'Fri Jul 09 2021#9#0',
      'Sat Jul 10 2021#10#0'
    ],
    [
      'Sun Jul 11 2021#11#0',
      'Mon Jul 12 2021#12#0',
      'Tue Jul 13 2021#13#0',
      'Wed Jul 14 2021#14#0',
      'Thu Jul 15 2021#15#0',
      'Fri Jul 16 2021#16#0',
      'Sat Jul 17 2021#17#0'
    ],
    [
      'Sun Jul 18 2021#18#0',
      'Mon Jul 19 2021#19#0',
      'Tue Jul 20 2021#20#0',
      'Wed Jul 21 2021#21#0',
      'Thu Jul 22 2021#22#0',
      'Fri Jul 23 2021#23#0',
      'Sat Jul 24 2021#24#0'
    ],
    [
      'Sun Jul 25 2021#25#0',
      'Mon Jul 26 2021#26#0',
      'Tue Jul 27 2021#27#0',
      'Wed Jul 28 2021#28#0',
      'Thu Jul 29 2021#29#0',
      'Fri Jul 30 2021#30#0',
      'Sat Jul 31 2021#31#0'
    ]
  ],
  [
    [
      'Sun Aug 01 2021#1#0',
      'Mon Aug 02 2021#2#0',
      'Tue Aug 03 2021#3#0',
      'Wed Aug 04 2021#4#0',
      'Thu Aug 05 2021#5#0',
      'Fri Aug 06 2021#6#0',
      'Sat Aug 07 2021#7#0'
    ],
    [
      'Sun Aug 08 2021#8#0',
      'Mon Aug 09 2021#9#0',
      'Tue Aug 10 2021#10#0',
      'Wed Aug 11 2021#11#0',
      'Thu Aug 12 2021#12#0',
      'Fri Aug 13 2021#13#0',
      'Sat Aug 14 2021#14#0'
    ],
    [
      'Sun Aug 15 2021#15#0',
      'Mon Aug 16 2021#16#0',
      'Tue Aug 17 2021#17#0',
      'Wed Aug 18 2021#18#0',
      'Thu Aug 19 2021#19#0',
      'Fri Aug 20 2021#20#0',
      'Sat Aug 21 2021#21#0'
    ],
    [
      'Sun Aug 22 2021#22#0',
      'Mon Aug 23 2021#23#0',
      'Tue Aug 24 2021#24#0',
      'Wed Aug 25 2021#25#0',
      'Thu Aug 26 2021#26#0',
      'Fri Aug 27 2021#27#0',
      'Sat Aug 28 2021#28#0'
    ],
    [
      'Sun Aug 29 2021#29#0',
      'Mon Aug 30 2021#30#0',
      'Tue Aug 31 2021#31#0',
      'Wed Sep 01 2021#1#0',
      'Thu Sep 02 2021#2#0',
      'Fri Sep 03 2021#3#0',
      'Sat Sep 04 2021#4#0'
    ]
  ],
  [
    [
      'Sun Sep 05 2021#5#0',
      'Mon Sep 06 2021#6#0',
      'Tue Sep 07 2021#7#0',
      'Wed Sep 08 2021#8#0',
      'Thu Sep 09 2021#9#0',
      'Fri Sep 10 2021#10#0',
      'Sat Sep 11 2021#11#0'
    ],
    [
      'Sun Sep 12 2021#12#0',
      'Mon Sep 13 2021#13#0',
      'Tue Sep 14 2021#14#0',
      'Wed Sep 15 2021#15#0',
      'Thu Sep 16 2021#16#0',
      'Fri Sep 17 2021#17#0',
      'Sat Sep 18 2021#18#0'
    ],
    [
      'Sun Sep 19 2021#19#0',
      'Mon Sep 20 2021#20#0',
      'Tue Sep 21 2021#21#0',
      'Wed Sep 22 2021#22#0',
      'Thu Sep 23 2021#23#0',
      'Fri Sep 24 2021#24#0',
      'Sat Sep 25 2021#25#0'
    ],
    [
      'Sun Sep 26 2021#26#0',
      'Mon Sep 27 2021#27#0',
      'Tue Sep 28 2021#28#0',
      'Wed Sep 29 2021#29#0',
      'Thu Sep 30 2021#30#0',
      'Fri Oct 01 2021#1#0',
      'Sat Oct 02 2021#2#0'
    ]
  ],
  [
    [
      'Sun Oct 03 2021#3#0',
      'Mon Oct 04 2021#4#0',
      'Tue Oct 05 2021#5#0',
      'Wed Oct 06 2021#6#0',
      'Thu Oct 07 2021#7#0',
      'Fri Oct 08 2021#8#0',
      'Sat Oct 09 2021#9#0'
    ],
    [
      'Sun Oct 10 2021#10#0',
      'Mon Oct 11 2021#11#0',
      'Tue Oct 12 2021#12#0',
      'Wed Oct 13 2021#13#0',
      'Thu Oct 14 2021#14#0',
      'Fri Oct 15 2021#15#0',
      'Sat Oct 16 2021#16#0'
    ],
    [
      'Sun Oct 17 2021#17#0',
      'Mon Oct 18 2021#18#0',
      'Tue Oct 19 2021#19#0',
      'Wed Oct 20 2021#20#0',
      'Thu Oct 21 2021#21#0',
      'Fri Oct 22 2021#22#0',
      'Sat Oct 23 2021#23#0'
    ],
    [
      'Sun Oct 24 2021#24#0',
      'Mon Oct 25 2021#25#0',
      'Tue Oct 26 2021#26#0',
      'Wed Oct 27 2021#27#0',
      'Thu Oct 28 2021#28#0',
      'Fri Oct 29 2021#29#0',
      'Sat Oct 30 2021#30#0'
    ],
    [
      'Sun Oct 31 2021#31#0',
      'Mon Nov 01 2021#1#0',
      'Tue Nov 02 2021#2#0',
      'Wed Nov 03 2021#3#0',
      'Thu Nov 04 2021#4#0',
      'Fri Nov 05 2021#5#0',
      'Sat Nov 06 2021#6#0'
    ]
  ],
  [
    [
      'Sun Nov 07 2021#7#0',
      'Mon Nov 08 2021#8#0',
      'Tue Nov 09 2021#9#0',
      'Wed Nov 10 2021#10#0',
      'Thu Nov 11 2021#11#0',
      'Fri Nov 12 2021#12#0',
      'Sat Nov 13 2021#13#0'
    ],
    [
      'Sun Nov 14 2021#14#0',
      'Mon Nov 15 2021#15#0',
      'Tue Nov 16 2021#16#0',
      'Wed Nov 17 2021#17#0',
      'Thu Nov 18 2021#18#0',
      'Fri Nov 19 2021#19#0',
      'Sat Nov 20 2021#20#0'
    ],
    [
      'Sun Nov 21 2021#21#0',
      'Mon Nov 22 2021#22#0',
      'Tue Nov 23 2021#23#0',
      'Wed Nov 24 2021#24#0',
      'Thu Nov 25 2021#25#0',
      'Fri Nov 26 2021#26#0',
      'Sat Nov 27 2021#27#0'
    ],
    [
      'Sun Nov 28 2021#28#0',
      'Mon Nov 29 2021#29#0',
      'Tue Nov 30 2021#30#0',
      'Wed Dec 01 2021#1#0',
      'Thu Dec 02 2021#2#0',
      'Fri Dec 03 2021#3#0',
      'Sat Dec 04 2021#4#0'
    ]
  ],
  [
    [
      'Sun Dec 05 2021#5#0',
      'Mon Dec 06 2021#6#0',
      'Tue Dec 07 2021#7#0',
      'Wed Dec 08 2021#8#0',
      'Thu Dec 09 2021#9#0',
      'Fri Dec 10 2021#10#0',
      'Sat Dec 11 2021#11#0'
    ],
    [
      'Sun Dec 12 2021#12#0',
      'Mon Dec 13 2021#13#0',
      'Tue Dec 14 2021#14#0',
      'Wed Dec 15 2021#15#0',
      'Thu Dec 16 2021#16#0',
      'Fri Dec 17 2021#17#0',
      'Sat Dec 18 2021#18#0'
    ],
    [
      'Sun Dec 19 2021#19#0',
      'Mon Dec 20 2021#20#0',
      'Tue Dec 21 2021#21#0',
      'Wed Dec 22 2021#22#0',
      'Thu Dec 23 2021#23#0',
      'Fri Dec 24 2021#24#0',
      'Sat Dec 25 2021#25#0'
    ],
    [
      'Sun Dec 26 2021#26#0',
      'Mon Dec 27 2021#27#0',
      'Tue Dec 28 2021#28#0',
      'Wed Dec 29 2021#29#0',
      'Thu Dec 30 2021#30#0',
      'Fri Dec 31 2021#31#0',
      0
    ]
  ]
]
  t.deepEqual(fillMonth({whichYear, isFullYear:true, isTest}), expected)
  t.deepEqual(fillMonth({whichYear, isFullYear: false, isTest}), expected)
})

test('should return month to month days', t => {
  let now = new Date()
  let whichYear = now.getFullYear();

  let date = new Date(`${whichYear}, ${now.getMonth() + 1}, ${now.getDate()}`)
  let subYear = subtractYears(date, 1);

  let isTest = true;
  const containers = fillMonth({whichYear, isTest})
  const firstMonthContainer = containers[0];
  const firstWeekContainer = firstMonthContainer[0];

  const expectedLastYearToday = `${subYear.toDateString()}#${subYear.getDate()}#0`
  const expectedCurrentYearToday = `${date.toDateString()}#${date.getDate()}#0`

  const lastMonthContainer = containers[containers.length - 1];
  const lastWeekContainer = lastMonthContainer[lastMonthContainer.length - 1];

  t.deepEqual(firstWeekContainer.includes(expectedLastYearToday), true)
  t.deepEqual(lastWeekContainer.includes(expectedCurrentYearToday), true)
})

test('should return days in array container and today is checked if isTodayChecked is true', t => {
  let todayDate = new Date();
  let whichYear = todayDate.getFullYear()
  let isTodayChecked = true;

  const expectedToday = `${todayDate.toDateString()}#${new Date().getDate()}#1`

  const containers = fillMonth({whichYear, isTodayChecked})
  const lastMonthContainer = containers[containers.length - 1];
  const lastWeekContainer = lastMonthContainer[lastMonthContainer.length - 1]

  t.is(lastWeekContainer.includes(expectedToday), true)
})
