const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height <= 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height`;
  } else if (weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let category = "";

    if (bmi < 18.6) {
      category = "Underweight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = "Normal";
    } else {
      category = "Overweight & You're Cooked";
    }

    results.innerHTML = `<span>BMI: ${bmi} <br>(${category})</span>`;
  }
});
