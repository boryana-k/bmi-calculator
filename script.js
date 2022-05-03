const form = document.querySelector('form');

const h2 = document.getElementById('bmi')
const h1 = document.getElementById('res')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = document.getElementById('height').value
    const weight = document.getElementById('weight').value

    if (height === '' || isNaN(height) || height <= 0){
        h2.style.color = '#ae1534'
        h2.innerHTML = 'Please enter a valid height'
        h1.innerHTML = ''
    } else if (weight === '' || isNaN(weight) || weight <= 0){
        h2.style.color = '#ae1534'
        h2.innerHTML = 'Please enter a valid weight'
        h1.innerHTML = ''
    } else { 
        h2.style.color = '#000000'
        let bmi = (weight / ((height/100) * (height/100))).toFixed(2)
        let result = ''

        if (bmi < 18.5){
            result = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.99){
            result = 'Normal Weight';
        } else if (bmi >= 25 && bmi <= 29.99){
            result = 'Overweight';
        } else if (bmi >= 30 && bmi <= 34.99){
            result = 'Obesity (Class 1)';
        } else if (bmi >= 35 && bmi <= 39.99){
            result = 'Obesity (Class 2)';
        } else if (bmi >= 40){
            result = 'Morbid Obesity';
        }

        h2.innerHTML = 'BMI ' + bmi
        h1.innerHTML = result

    }
})

const resetBtn = document.getElementById('reset')

resetBtn.addEventListener('click', function(a){
    h2.innerHTML = ''
    h1.innerHTML = 'Your result will be shown here'
})

