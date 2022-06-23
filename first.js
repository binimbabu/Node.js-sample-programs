const date = require('date-and-time')
  
const value1 = date.format((new Date('August 26, 1990 03:24:00')),
  'YYYY/MM/DD');

console.log("date and time : " + value1)
const value2 = date.format((new Date('August 26, 1990 03:24:00')),
  'MM/DD/YYYY');
  console.log("date and time : " + value2)
  const value3 = date.format((new Date('August 26, 1990 03:24:00')),
  ' MMM DD YYYY');
  console.log("date and time : " + value3)