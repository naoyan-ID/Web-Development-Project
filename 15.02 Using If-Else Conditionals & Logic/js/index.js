var nama = prompt("Masukkan namamu");
var pasangan = prompt("Masukkan nama pasangan Anda");
var n = Math.random() * 100;
n = Math.floor(n) + 1;
if (n > 80) {
  alert(
    "hasil kalkulator cinta untuk nama " +
      nama +
      " dengan " +
      pasangan +
      " adalah " +
      n +
      "%. Selamat Anda berjodoh"
  );
} else {
  alert(
    "hasil kalkulator cinta untuk nama " +
      nama +
      " dengan " +
      pasangan +
      " adalah " +
      n +
      "%. Maaf Anda tidak berjodoh"
  );
}
