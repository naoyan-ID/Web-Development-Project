function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2);
  if (bmi < 18.5) {
    return "Your BMI is " + bmi + ", so you are underweight.";
  }
  if (bmi >= 18.5 && bmi <= 24.9) {
    return "Your BMI is " + bmi + ", so you have a normal weight.";
  }
  if (bmi > 24.9) {
    return "Your BMI is " + bmi + ", so you are overweight.";
  }
}
// Contoh penggunaan fungsi
//var weight = 65; // Gantilah dengan berat badan yang sesuai
//var height = 1.8; // Gantilah dengan tinggi badan yang sesuai

//var result = bmiCalculator(weight, height);
//console.log(result); // Output akan mencetak kategori berat badan berdasarkan BMI
