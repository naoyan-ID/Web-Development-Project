var pesan = prompt("apa yang sedang kamu pikirkan?");
var jumlah = pesan.length;
alert(
  "jumlah huruf yang kamu masukkan adalah " +
    jumlah +
    ". Huruf kamu tersisa " +
    (140 - pesan.length) +
    " lagi."
);
