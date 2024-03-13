function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log(year + " Leap year.");
      } else {
        console.log(year + " Not leap year.");
      }
    } else {
      console.log(year + " Leap year.");
    }
  } else {
    console.log(year + " Not leap year.");
  }
}
isLeap(2400);
isLeap(1989);
