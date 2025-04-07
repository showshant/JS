 

const button = document.querySelector("button");

button.addEventListener("click", function () {
  const age = document.getElementById("age").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const height = Number(document.getElementById("height").value);
  const weight = Number(document.getElementById("weight").value);
  const result = document.getElementById("result");

  if (!age || !gender || !height || !weight) {
    result.innerHTML = "Please fill in all fields.";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  result.innerHTML = `Your BMI is ${bmi}`;
});
