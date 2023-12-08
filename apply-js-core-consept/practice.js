function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  
  function findLeapYear(yearsArray) {
    const leapYears = [];
  
    for (const year of yearsArray) {
      if (isLeapYear(year)) {   
        leapYears.push(year);
      }
    }
  
    return leapYears;
  }
  
  const inputYears = [2023, 2024, 2025, 2028, 2030];
  const leapYearsArray = findLeapYear(inputYears);
  
  console.log("Leap years:", leapYearsArray);
  