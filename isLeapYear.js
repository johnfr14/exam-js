 const isLeapYear = (year) => {
   if ( year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
     return true
   } else {
     return false
   }
 }

 //------------test--------------
 for (let i = 1582; i < 2500; i++) {
   isLeapYear(i) ? console.log(`${i} est une année bissextile\n----`) : ''
 }