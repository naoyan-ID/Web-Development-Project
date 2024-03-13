/*var biodata = {
  name: "Hadiyan",
  age: 23,
  hobby: ["watching film", "reading book", "coding"],
};
*/

var biodata1 = new Biodata("Hadiyan", 23, [
  "watching film",
  "reading book",
  "coding",
]);
var biodata2 = new Biodata("Nabila", 23, ["eating", "playing", "reading book"]);

function Biodata(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
  this.doing = function () {
    alert("what are you doing?");
  };
}
