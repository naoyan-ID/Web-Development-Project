function whosPaying(names) {
  var index = Math.floor(Math.random() * names.length);
  var select = names[index];
  return select + " is going to buy lunch today!";
}
var input = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
var output = whosPaying(input);
console.log(output);
