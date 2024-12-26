function calculateBMI() {

    const inputWeight = document.getElementById('userWeight').value;
    const inputHeight = document.getElementById('userHeight').value;

    // convert string into number

    const weight = parseFloat(inputWeight);
    const height = parseFloat(inputHeight);

    // check input is valid

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerHTML = "Enter a valid value"
    }

    // height convert into meter
    const heightInMeter = height / 100;

    // calculate BMI
    const bmi = weight / (heightInMeter * heightInMeter)

    // BMI Categories
    let category
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
    } else if (bmi < 30) {
        category = "Overweight";

    } else {
        category = "	Obese";

    }

    // display bmi
    document.getElementById('result').innerHTML = `${bmi.toFixed(2)} ( ${category})`

}