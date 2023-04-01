import test from 'ava';
import { fillMonth } from '../src/table';
import { subtractYears } from '../src/helpers';


test('should return only the days of the year in array container if it is full year and if year is not the current year', t => {
  let clientDate = new Date();
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
  const {container: fullYearContainers} = fillMonth({clientDate, whichYear, isFullYear: true, isTest})

  t.is(fullYearContainers.length, 12)
  t.deepEqual(fullYearContainers, expected)

  const {container: notFullYearContainers} = fillMonth({clientDate, whichYear, isFullYear: false, isTest})

  t.is(notFullYearContainers.length, 12)
  t.deepEqual(notFullYearContainers, expected)

  t.deepEqual(fullYearContainers, notFullYearContainers)
})

test('should return month to month for the month Apr 2023', t => {
  let clientDate = new Date('2023, 04, 01');
  let whichYear = 2023;
  let isTest = true;
  const expected = [
  [
    [
      'Sun Mar 27 2022#27#0',
      'Mon Mar 28 2022#28#0',
      'Tue Mar 29 2022#29#0',
      'Wed Mar 30 2022#30#0',
      'Thu Mar 31 2022#31#0',
      'Fri Apr 01 2022#1#0',
      'Sat Apr 02 2022#2#0'
    ],
    [
      'Sun Apr 03 2022#3#0',
      'Mon Apr 04 2022#4#0',
      'Tue Apr 05 2022#5#0',
      'Wed Apr 06 2022#6#0',
      'Thu Apr 07 2022#7#0',
      'Fri Apr 08 2022#8#0',
      'Sat Apr 09 2022#9#0'
    ],
    [
      'Sun Apr 10 2022#10#0',
      'Mon Apr 11 2022#11#0',
      'Tue Apr 12 2022#12#0',
      'Wed Apr 13 2022#13#0',
      'Thu Apr 14 2022#14#0',
      'Fri Apr 15 2022#15#0',
      'Sat Apr 16 2022#16#0'
    ],
    [
      'Sun Apr 17 2022#17#0',
      'Mon Apr 18 2022#18#0',
      'Tue Apr 19 2022#19#0',
      'Wed Apr 20 2022#20#0',
      'Thu Apr 21 2022#21#0',
      'Fri Apr 22 2022#22#0',
      'Sat Apr 23 2022#23#0'
    ],
    [
      'Sun Apr 24 2022#24#0',
      'Mon Apr 25 2022#25#0',
      'Tue Apr 26 2022#26#0',
      'Wed Apr 27 2022#27#0',
      'Thu Apr 28 2022#28#0',
      'Fri Apr 29 2022#29#0',
      'Sat Apr 30 2022#30#0'
    ]
  ],
  [
    [
      'Sun May 01 2022#1#0',
      'Mon May 02 2022#2#0',
      'Tue May 03 2022#3#0',
      'Wed May 04 2022#4#0',
      'Thu May 05 2022#5#0',
      'Fri May 06 2022#6#0',
      'Sat May 07 2022#7#0'
    ],
    [
      'Sun May 08 2022#8#0',
      'Mon May 09 2022#9#0',
      'Tue May 10 2022#10#0',
      'Wed May 11 2022#11#0',
      'Thu May 12 2022#12#0',
      'Fri May 13 2022#13#0',
      'Sat May 14 2022#14#0'
    ],
    [
      'Sun May 15 2022#15#0',
      'Mon May 16 2022#16#0',
      'Tue May 17 2022#17#0',
      'Wed May 18 2022#18#0',
      'Thu May 19 2022#19#0',
      'Fri May 20 2022#20#0',
      'Sat May 21 2022#21#0'
    ],
    [
      'Sun May 22 2022#22#0',
      'Mon May 23 2022#23#0',
      'Tue May 24 2022#24#0',
      'Wed May 25 2022#25#0',
      'Thu May 26 2022#26#0',
      'Fri May 27 2022#27#0',
      'Sat May 28 2022#28#0'
    ],
    [
      'Sun May 29 2022#29#0',
      'Mon May 30 2022#30#0',
      'Tue May 31 2022#31#0',
      'Wed Jun 01 2022#1#0',
      'Thu Jun 02 2022#2#0',
      'Fri Jun 03 2022#3#0',
      'Sat Jun 04 2022#4#0'
    ]
  ],
  [
    [
      'Sun Jun 05 2022#5#0',
      'Mon Jun 06 2022#6#0',
      'Tue Jun 07 2022#7#0',
      'Wed Jun 08 2022#8#0',
      'Thu Jun 09 2022#9#0',
      'Fri Jun 10 2022#10#0',
      'Sat Jun 11 2022#11#0'
    ],
    [
      'Sun Jun 12 2022#12#0',
      'Mon Jun 13 2022#13#0',
      'Tue Jun 14 2022#14#0',
      'Wed Jun 15 2022#15#0',
      'Thu Jun 16 2022#16#0',
      'Fri Jun 17 2022#17#0',
      'Sat Jun 18 2022#18#0'
    ],
    [
      'Sun Jun 19 2022#19#0',
      'Mon Jun 20 2022#20#0',
      'Tue Jun 21 2022#21#0',
      'Wed Jun 22 2022#22#0',
      'Thu Jun 23 2022#23#0',
      'Fri Jun 24 2022#24#0',
      'Sat Jun 25 2022#25#0'
    ],
    [
      'Sun Jun 26 2022#26#0',
      'Mon Jun 27 2022#27#0',
      'Tue Jun 28 2022#28#0',
      'Wed Jun 29 2022#29#0',
      'Thu Jun 30 2022#30#0',
      'Fri Jul 01 2022#1#0',
      'Sat Jul 02 2022#2#0'
    ]
  ],
  [
    [
      'Sun Jul 03 2022#3#0',
      'Mon Jul 04 2022#4#0',
      'Tue Jul 05 2022#5#0',
      'Wed Jul 06 2022#6#0',
      'Thu Jul 07 2022#7#0',
      'Fri Jul 08 2022#8#0',
      'Sat Jul 09 2022#9#0'
    ],
    [
      'Sun Jul 10 2022#10#0',
      'Mon Jul 11 2022#11#0',
      'Tue Jul 12 2022#12#0',
      'Wed Jul 13 2022#13#0',
      'Thu Jul 14 2022#14#0',
      'Fri Jul 15 2022#15#0',
      'Sat Jul 16 2022#16#0'
    ],
    [
      'Sun Jul 17 2022#17#0',
      'Mon Jul 18 2022#18#0',
      'Tue Jul 19 2022#19#0',
      'Wed Jul 20 2022#20#0',
      'Thu Jul 21 2022#21#0',
      'Fri Jul 22 2022#22#0',
      'Sat Jul 23 2022#23#0'
    ],
    [
      'Sun Jul 24 2022#24#0',
      'Mon Jul 25 2022#25#0',
      'Tue Jul 26 2022#26#0',
      'Wed Jul 27 2022#27#0',
      'Thu Jul 28 2022#28#0',
      'Fri Jul 29 2022#29#0',
      'Sat Jul 30 2022#30#0'
    ],
    [
      'Sun Jul 31 2022#31#0',
      'Mon Aug 01 2022#1#0',
      'Tue Aug 02 2022#2#0',
      'Wed Aug 03 2022#3#0',
      'Thu Aug 04 2022#4#0',
      'Fri Aug 05 2022#5#0',
      'Sat Aug 06 2022#6#0'
    ]
  ],
  [
    [
      'Sun Aug 07 2022#7#0',
      'Mon Aug 08 2022#8#0',
      'Tue Aug 09 2022#9#0',
      'Wed Aug 10 2022#10#0',
      'Thu Aug 11 2022#11#0',
      'Fri Aug 12 2022#12#0',
      'Sat Aug 13 2022#13#0'
    ],
    [
      'Sun Aug 14 2022#14#0',
      'Mon Aug 15 2022#15#0',
      'Tue Aug 16 2022#16#0',
      'Wed Aug 17 2022#17#0',
      'Thu Aug 18 2022#18#0',
      'Fri Aug 19 2022#19#0',
      'Sat Aug 20 2022#20#0'
    ],
    [
      'Sun Aug 21 2022#21#0',
      'Mon Aug 22 2022#22#0',
      'Tue Aug 23 2022#23#0',
      'Wed Aug 24 2022#24#0',
      'Thu Aug 25 2022#25#0',
      'Fri Aug 26 2022#26#0',
      'Sat Aug 27 2022#27#0'
    ],
    [
      'Sun Aug 28 2022#28#0',
      'Mon Aug 29 2022#29#0',
      'Tue Aug 30 2022#30#0',
      'Wed Aug 31 2022#31#0',
      'Thu Sep 01 2022#1#0',
      'Fri Sep 02 2022#2#0',
      'Sat Sep 03 2022#3#0'
    ]
  ],
  [
    [
      'Sun Sep 04 2022#4#0',
      'Mon Sep 05 2022#5#0',
      'Tue Sep 06 2022#6#0',
      'Wed Sep 07 2022#7#0',
      'Thu Sep 08 2022#8#0',
      'Fri Sep 09 2022#9#0',
      'Sat Sep 10 2022#10#0'
    ],
    [
      'Sun Sep 11 2022#11#0',
      'Mon Sep 12 2022#12#0',
      'Tue Sep 13 2022#13#0',
      'Wed Sep 14 2022#14#0',
      'Thu Sep 15 2022#15#0',
      'Fri Sep 16 2022#16#0',
      'Sat Sep 17 2022#17#0'
    ],
    [
      'Sun Sep 18 2022#18#0',
      'Mon Sep 19 2022#19#0',
      'Tue Sep 20 2022#20#0',
      'Wed Sep 21 2022#21#0',
      'Thu Sep 22 2022#22#0',
      'Fri Sep 23 2022#23#0',
      'Sat Sep 24 2022#24#0'
    ],
    [
      'Sun Sep 25 2022#25#0',
      'Mon Sep 26 2022#26#0',
      'Tue Sep 27 2022#27#0',
      'Wed Sep 28 2022#28#0',
      'Thu Sep 29 2022#29#0',
      'Fri Sep 30 2022#30#0',
      'Sat Oct 01 2022#1#0'
    ]
  ],
  [
    [
      'Sun Oct 02 2022#2#0',
      'Mon Oct 03 2022#3#0',
      'Tue Oct 04 2022#4#0',
      'Wed Oct 05 2022#5#0',
      'Thu Oct 06 2022#6#0',
      'Fri Oct 07 2022#7#0',
      'Sat Oct 08 2022#8#0'
    ],
    [
      'Sun Oct 09 2022#9#0',
      'Mon Oct 10 2022#10#0',
      'Tue Oct 11 2022#11#0',
      'Wed Oct 12 2022#12#0',
      'Thu Oct 13 2022#13#0',
      'Fri Oct 14 2022#14#0',
      'Sat Oct 15 2022#15#0'
    ],
    [
      'Sun Oct 16 2022#16#0',
      'Mon Oct 17 2022#17#0',
      'Tue Oct 18 2022#18#0',
      'Wed Oct 19 2022#19#0',
      'Thu Oct 20 2022#20#0',
      'Fri Oct 21 2022#21#0',
      'Sat Oct 22 2022#22#0'
    ],
    [
      'Sun Oct 23 2022#23#0',
      'Mon Oct 24 2022#24#0',
      'Tue Oct 25 2022#25#0',
      'Wed Oct 26 2022#26#0',
      'Thu Oct 27 2022#27#0',
      'Fri Oct 28 2022#28#0',
      'Sat Oct 29 2022#29#0'
    ],
    [
      'Sun Oct 30 2022#30#0',
      'Mon Oct 31 2022#31#0',
      'Tue Nov 01 2022#1#0',
      'Wed Nov 02 2022#2#0',
      'Thu Nov 03 2022#3#0',
      'Fri Nov 04 2022#4#0',
      'Sat Nov 05 2022#5#0'
    ]
  ],
  [
    [
      'Sun Nov 06 2022#6#0',
      'Mon Nov 07 2022#7#0',
      'Tue Nov 08 2022#8#0',
      'Wed Nov 09 2022#9#0',
      'Thu Nov 10 2022#10#0',
      'Fri Nov 11 2022#11#0',
      'Sat Nov 12 2022#12#0'
    ],
    [
      'Sun Nov 13 2022#13#0',
      'Mon Nov 14 2022#14#0',
      'Tue Nov 15 2022#15#0',
      'Wed Nov 16 2022#16#0',
      'Thu Nov 17 2022#17#0',
      'Fri Nov 18 2022#18#0',
      'Sat Nov 19 2022#19#0'
    ],
    [
      'Sun Nov 20 2022#20#0',
      'Mon Nov 21 2022#21#0',
      'Tue Nov 22 2022#22#0',
      'Wed Nov 23 2022#23#0',
      'Thu Nov 24 2022#24#0',
      'Fri Nov 25 2022#25#0',
      'Sat Nov 26 2022#26#0'
    ],
    [
      'Sun Nov 27 2022#27#0',
      'Mon Nov 28 2022#28#0',
      'Tue Nov 29 2022#29#0',
      'Wed Nov 30 2022#30#0',
      'Thu Dec 01 2022#1#0',
      'Fri Dec 02 2022#2#0',
      'Sat Dec 03 2022#3#0'
    ]
  ],
  [
    [
      'Sun Dec 04 2022#4#0',
      'Mon Dec 05 2022#5#0',
      'Tue Dec 06 2022#6#0',
      'Wed Dec 07 2022#7#0',
      'Thu Dec 08 2022#8#0',
      'Fri Dec 09 2022#9#0',
      'Sat Dec 10 2022#10#0'
    ],
    [
      'Sun Dec 11 2022#11#0',
      'Mon Dec 12 2022#12#0',
      'Tue Dec 13 2022#13#0',
      'Wed Dec 14 2022#14#0',
      'Thu Dec 15 2022#15#0',
      'Fri Dec 16 2022#16#0',
      'Sat Dec 17 2022#17#0'
    ],
    [
      'Sun Dec 18 2022#18#0',
      'Mon Dec 19 2022#19#0',
      'Tue Dec 20 2022#20#0',
      'Wed Dec 21 2022#21#0',
      'Thu Dec 22 2022#22#0',
      'Fri Dec 23 2022#23#0',
      'Sat Dec 24 2022#24#0'
    ],
    [
      'Sun Dec 25 2022#25#0',
      'Mon Dec 26 2022#26#0',
      'Tue Dec 27 2022#27#0',
      'Wed Dec 28 2022#28#0',
      'Thu Dec 29 2022#29#0',
      'Fri Dec 30 2022#30#0',
      'Sat Dec 31 2022#31#0'
    ]
  ],
  [
    [
      'Sun Jan 01 2023#1#0',
      'Mon Jan 02 2023#2#0',
      'Tue Jan 03 2023#3#0',
      'Wed Jan 04 2023#4#0',
      'Thu Jan 05 2023#5#0',
      'Fri Jan 06 2023#6#0',
      'Sat Jan 07 2023#7#0'
    ],
    [
      'Sun Jan 08 2023#8#0',
      'Mon Jan 09 2023#9#0',
      'Tue Jan 10 2023#10#0',
      'Wed Jan 11 2023#11#0',
      'Thu Jan 12 2023#12#0',
      'Fri Jan 13 2023#13#0',
      'Sat Jan 14 2023#14#0'
    ],
    [
      'Sun Jan 15 2023#15#0',
      'Mon Jan 16 2023#16#0',
      'Tue Jan 17 2023#17#0',
      'Wed Jan 18 2023#18#0',
      'Thu Jan 19 2023#19#0',
      'Fri Jan 20 2023#20#0',
      'Sat Jan 21 2023#21#0'
    ],
    [
      'Sun Jan 22 2023#22#0',
      'Mon Jan 23 2023#23#0',
      'Tue Jan 24 2023#24#0',
      'Wed Jan 25 2023#25#0',
      'Thu Jan 26 2023#26#0',
      'Fri Jan 27 2023#27#0',
      'Sat Jan 28 2023#28#0'
    ],
    [
      'Sun Jan 29 2023#29#0',
      'Mon Jan 30 2023#30#0',
      'Tue Jan 31 2023#31#0',
      'Wed Feb 01 2023#1#0',
      'Thu Feb 02 2023#2#0',
      'Fri Feb 03 2023#3#0',
      'Sat Feb 04 2023#4#0'
    ]
  ],
  [
    [
      'Sun Feb 05 2023#5#0',
      'Mon Feb 06 2023#6#0',
      'Tue Feb 07 2023#7#0',
      'Wed Feb 08 2023#8#0',
      'Thu Feb 09 2023#9#0',
      'Fri Feb 10 2023#10#0',
      'Sat Feb 11 2023#11#0'
    ],
    [
      'Sun Feb 12 2023#12#0',
      'Mon Feb 13 2023#13#0',
      'Tue Feb 14 2023#14#0',
      'Wed Feb 15 2023#15#0',
      'Thu Feb 16 2023#16#0',
      'Fri Feb 17 2023#17#0',
      'Sat Feb 18 2023#18#0'
    ],
    [
      'Sun Feb 19 2023#19#0',
      'Mon Feb 20 2023#20#0',
      'Tue Feb 21 2023#21#0',
      'Wed Feb 22 2023#22#0',
      'Thu Feb 23 2023#23#0',
      'Fri Feb 24 2023#24#0',
      'Sat Feb 25 2023#25#0'
    ],
    [
      'Sun Feb 26 2023#26#0',
      'Mon Feb 27 2023#27#0',
      'Tue Feb 28 2023#28#0',
      'Wed Mar 01 2023#1#0',
      'Thu Mar 02 2023#2#0',
      'Fri Mar 03 2023#3#0',
      'Sat Mar 04 2023#4#0'
    ]
  ],
  [
    [
      'Sun Mar 05 2023#5#0',
      'Mon Mar 06 2023#6#0',
      'Tue Mar 07 2023#7#0',
      'Wed Mar 08 2023#8#0',
      'Thu Mar 09 2023#9#0',
      'Fri Mar 10 2023#10#0',
      'Sat Mar 11 2023#11#0'
    ],
    [
      'Sun Mar 12 2023#12#0',
      'Mon Mar 13 2023#13#0',
      'Tue Mar 14 2023#14#0',
      'Wed Mar 15 2023#15#0',
      'Thu Mar 16 2023#16#0',
      'Fri Mar 17 2023#17#0',
      'Sat Mar 18 2023#18#0'
    ],
    [
      'Sun Mar 19 2023#19#0',
      'Mon Mar 20 2023#20#0',
      'Tue Mar 21 2023#21#0',
      'Wed Mar 22 2023#22#0',
      'Thu Mar 23 2023#23#0',
      'Fri Mar 24 2023#24#0',
      'Sat Mar 25 2023#25#0'
    ],
    [
      'Sun Mar 26 2023#26#0',
      'Mon Mar 27 2023#27#0',
      'Tue Mar 28 2023#28#0',
      'Wed Mar 29 2023#29#0',
      'Thu Mar 30 2023#30#0',
      'Fri Mar 31 2023#31#0',
      'Sat Apr 01 2023#1#0'
    ]
  ]
]
  const {container: monthToMonthYearContainers} = fillMonth({clientDate, whichYear, isTest})

  t.deepEqual(monthToMonthYearContainers, expected)
})

test('should return month to month days', t => {
  let clientDate = new Date()
  let whichYear = clientDate.getFullYear();

  let date = new Date(`${whichYear}, ${clientDate.getMonth() + 1}, ${clientDate.getDate()}`)
  let subYear = subtractYears(date, 1);

  let isTest = true;
  const {container} = fillMonth({clientDate, whichYear, isTest})
  const firstMonthContainer = container[0];
  const firstWeekContainer = firstMonthContainer[0];

  const expectedLastYearToday = `${subYear.toDateString()}#${subYear.getDate()}#0`
  const expectedCurrentYearToday = `${date.toDateString()}#${date.getDate()}#0`

  const lastMonthContainer = container[container.length - 1];
  const lastWeekContainer = lastMonthContainer[lastMonthContainer.length - 1];

  t.deepEqual(firstWeekContainer.includes(expectedLastYearToday), true)
  t.deepEqual(lastWeekContainer.includes(expectedCurrentYearToday), true)
})

test('should return days in array container and today is checked if isTodayChecked is true', t => {
  let clientDate = new Date();
  let whichYear = clientDate.getFullYear()
  let isTodayChecked = true;

  const expectedToday = `${clientDate.toDateString()}#${new Date().getDate()}#1`

  const { container } = fillMonth({clientDate, whichYear, isTodayChecked})
  const lastMonthContainer = container[container.length - 1];
  const lastWeekContainer = lastMonthContainer[lastMonthContainer.length - 1]

  t.is(lastWeekContainer.includes(expectedToday), true)
})
