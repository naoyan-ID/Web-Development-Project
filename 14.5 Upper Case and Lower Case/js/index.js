var nama = prompt("siapa namamu?");
var firstchar = nama.slice(0, 1);
var uppercasefirstchar = firstchar.toUpperCase();
var restofname = nama.slice(1, nama.length);
restofname = restofname.toLowerCase();
var capital = uppercasefirstchar + restofname;
alert("Hallo " + capital);
