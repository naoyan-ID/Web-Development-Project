/*
console.log($("h1").css("font-size"));
*/
$("h1").css({
  color: "blue",
  "font-size": "5rem",
});

//Manipulating Styles with jQuery
/*
$("h1").addClass("big-title margin");
$("button");
*/

//Manipulating Text with jQuery
/*
$("h1").text("Halo!");
$("button").html("<em>Hey</em>");
*/

//Manipulating Text with jQuery
/*
$("a").attr("href", "www.duckduckgo.com");
*/

//Adding Event Listeners with jQuery

$("button").click(function () {
  $("h1").css("color", "blue");
}); //merubah warna dengan di klik
$("h1").mouseover(function () {
  $("h1").css("color", "red");
}); //merubah warna dengan menggeser mouse ke h1
$("input").keypress(function (event) {
  console.log(event.key);
}); //menampilkan apa yang diketik
$(document).keypress(function (event) {
  $("h1").text(event.key);
}); //merubah h1 menjadi apa yang diketik

//Adding and Removing Elements with jQuery
/*
$("h1").before("<button>new</button>");
$("h1").after("<button>new</button>");
$("h1").prepend("<button>new</button>");
$("h1").append("<button>new</button>");
*/

//Website Animations with jQuery
$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5, margin: "20%" }); //fadeOut, fadeIn, fadeToggle, slideUp, slideDown, slideToggle
});
