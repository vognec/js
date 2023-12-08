const weightText = document.getElementById('weight-input');
const heightText = document.getElementById('height-input');
const lbRadioChecked = document.getElementById('lb-radio');
const kgRadioChecked = document.getElementById('kg-radio');
const calculateButton = document.getElementById('calculate-bmi');
const bmiDisplay = document.getElementById('bmi-display');
const bmiCategory = document.getElementById('bmi-category');

calculateButton.addEventListener('click', function(){

    const weight = parseFloat(weightText.value);
    const height = parseFloat(heightText.value);
    const lbChecked = lbRadioChecked.checked;
    const kgChecked = kgRadioChecked.checked;

    if (!isNaN(weight) && !isNaN(height) && (lbChecked || kgChecked)){
        const result = lbChecked ? calculateBMIlb(weight, height) : calculateBMIkg(weight, height);
        bmiDisplay.textContent = 'BMI: ' + result.toFixed(2);
        getCategory(result);
    } else {
        bmiDisplay.textContent = 'Please Enter all data';
    }
});

function calculateBMIkg(weight, height){
    return weight / (height * height);
}
function calculateBMIlb(weight, height){
    const heightInches = height * 12;
    return (weight / (heightInches * heightInches)) * 703;
}

function getCategory(result) {
    if (result < 18.5){
        bmiCategory.textContent = 'BMI Category: ' + 'Underweight';
    }
    else if(result < 24.9){
        bmiCategory.textContent = 'BMI Category: ' + 'Normal Weight';
    }
    else if (result < 29.9){
        bmiCategory.textContent = 'BMI Category: ' + 'Overweight';
    }
    else{
        bmiCategory.textContent = 'BMI Category: ' + 'Obese';
    }
}