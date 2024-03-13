var count = 99;

function fizzBuzz() {
  while (count >= 1) {
    if (count > 2) {
      console.log(
        count +
          " bottles of beer on the wall, " +
          count +
          " bottles of beer. Take one down and pass it around, " +
          (count - 1) +
          " bottles of beer on the wall."
      );
    } else if (count === 2) {
      console.log(
        count +
          " bottles of beer on the wall, " +
          count +
          " bottles of beer. Take one down and pass it around, " +
          (count - 1) +
          " bottle of beer on the wall."
      );
    } else {
      console.log(
        count +
          " bottle of beer on the wall, " +
          count +
          " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall."
      );
    }
    count--;
  }

  console.log(
    "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."
  );
}

fizzBuzz();

//or
//var count = 99;
//while (count >= 0) {
//  var bottleWord = "bottle";
//  if (count === 1) {
//    bottleWord = "bottles";
//  }
//  console.log(count + " " + bottleWord + " of beer on the wall");
//  console.log(count + " " + bottleWord + " of beer,");
//  console.log("Take one down, pass it around,");
//  count--;
//  console.log(count + " " + bottleWord + " of beer on the wall.");
//}
