function calculate() {
    const weight = parseInt(document.getElementById("weight").value);
    document.getElementById("weight-value").textContent = weight + " kg";

    const height = parseInt(document.getElementById("height").value);
    document.getElementById("height-value").textContent = height + " cm";
}