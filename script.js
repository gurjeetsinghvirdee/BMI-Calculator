function calculate() {

    let bmi;
    const result = document.getElementById("result");

    const weight = parseInt(document.getElementById("weight").value);
    document.getElementById("weight-value").textContent = weight + " kg";

    const height = parseInt(document.getElementById("height").value);
    document.getElementById("height-value").textContent = height + " cm";

    bmi = (weight / Math.pow( (height/100), 2)).toFixed(1);
    result.textContent = bmi;

    if(bmi < 18.5) {
        category = "UnderWeight"
    }
    else if(bmi >= 18.5 && bmi <= 24.9 ) {
        category = "Normal Weight";
    }
    else if(bmi >= 25 && bmi <= 29.9) {
        category = "Overweight"
    }
    else {
        category = "Obese";
    }
    document.getElementById("category").textContent = category;
}