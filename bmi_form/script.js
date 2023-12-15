const weightText = document.getElementById('weight');
const heightText = document.getElementById('height');
const lbRadioChecked = document.getElementById('lb');
const kgRadioChecked = document.getElementById('kg');
const calculatButton = document.getElementById('calc-bmi');
const bmiDisplay = document.getElementById('bmi');

calculatButton.addEventListener('click', function(){

    const weight = parseFloat(weightText.value);
    const height = parseFloat(heightText.value);
    const lbChecked = lbRadioChecked.checked;
    const kgChecked = kgRadioChecked.checked;

    if (!isNaN(weight) && !isNaN(height) && (lbChecked || kgChecked)){
        const result = lbChecked ? calculateBMIlb(weight, height) : calculateBMIkg(weight, height);
        bmiDisplay.textContent = 'BMI ' + result.toFixed(2);
    } else {
        bmiDisplay.textContent = 'Please enter all valid data';
    }

});

function calculateBMIkg(weight, height){
    return weight / (height * height);
}

function calculateBMIlb(weight, height){
    const heightInches = height *12;
    return (weight / (heightInches * heightInches)) * 703;
}