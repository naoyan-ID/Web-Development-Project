function array() {
  var guestList = ["Hadiyan", "Nabila", "Kato", "Megumi", "Zeta"];
  var user = prompt("Siapakah namamu?");
  if (guestList.includes(user)) {
    alert("Welcome");
  } else {
    alert("Sorry, maybe next time!");
  }
}
array();
