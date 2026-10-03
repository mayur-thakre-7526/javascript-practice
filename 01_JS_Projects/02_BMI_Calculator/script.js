const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  // Calculate BMI
  if (height === 0 || height == "" || isNaN(height)) {
    result.innerHTML = `Please enter a valid height, You entered ${height}`;
  } else if (weight === 0 || weight == "" || isNaN(weight)) {
    result.innerHTML = `Please enter a valid weight, You entered ${weight}`;
  } else {
    const bmi = (weight / (height / 100) ** 2).toFixed(2);

    if(bmi < 18.5) {
      result.innerHTML = `Your BMI is ${bmi} and you are underweight`;
    }else if(bmi >= 18.5 && bmi < 24.9) {
      result.innerHTML = `Your BMI is ${bmi} and you are normal weight`;
    } else {
      result.innerHTML = `Your BMI is ${bmi} and you are overweight`;
    }
  }
});
