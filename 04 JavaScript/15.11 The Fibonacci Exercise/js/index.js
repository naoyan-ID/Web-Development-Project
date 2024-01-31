function fibonacciGenerator(n) {
  var output = [];

  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];
    for (var i = 2; i < n; i++) {
      output[i] = output[i - 1] + output[i - 2];
      // atau
      // output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }

  return output;
}
output = fibonacciGenerator(20);
console.log(output);
