function test() {
  var a = "3";
  var b = "8";

  // Write your code on lines 7 - 9:
  var temp = a;
  a = b;
  b = temp;

  // Output to HTML element with id "output"
  var outputElement = document.getElementById("output");
  outputElement.innerHTML = "a is " + a + "<br>b is " + b;
}

// Call the test function
test();
