
function bmiCalculate(weight, height) {


    let bmi = weight / Math.pow(height, 2);
    console.log(Math.round(bmi));
}
bmiCalculate(70, 1.73);

