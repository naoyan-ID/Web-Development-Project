//var output = [];
//function fizzBuzz() {
//  output.push(output.length + 1);
//  console.log(output);
//}

//or can use
var output = [];
var count = 1;
function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("fizzBuzz");
  } else if (count % 3 === 0) {
    output.push("Fizz");
  } else if (count % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(count);
  }

  count++;
  console.log(output);
}
