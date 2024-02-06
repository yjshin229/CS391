function addition() {
  let firstNumber = parseFloat(document.getElementById("first-number").value);
  let secondNumber = parseFloat(document.getElementById("second-number").value);
  let result = firstNumber + secondNumber;

  checkNegative(result);
  document.getElementById("output").innerText = result;
}

function subtraction() {
  let firstNumber = parseFloat(document.getElementById("first-number").value);
  let secondNumber = parseFloat(document.getElementById("second-number").value);
  let result = firstNumber - secondNumber;

  checkNegative(result);
  document.getElementById("output").innerText = result;
}

function multiplication() {
  let firstNumber = parseFloat(document.getElementById("first-number").value);
  let secondNumber = parseFloat(document.getElementById("second-number").value);
  let result = firstNumber * secondNumber;

  checkNegative(result);
  document.getElementById("output").innerText = result;
}

function division() {
  let firstNumber = parseFloat(document.getElementById("first-number").value);
  let secondNumber = parseFloat(document.getElementById("second-number").value);
  if (secondNumber !== 0) {
    let result = firstNumber / secondNumber;
    checkNegative(result);
    document.getElementById("output").innerText = result;
  } else {
    document.getElementById("output").style.color = "red";
    document.getElementById("output").innerText =
      "Error: Cannot divide by zero";
  }
}

function power() {
  let firstNumber = parseFloat(document.getElementById("first-number").value);
  let secondNumber = parseFloat(document.getElementById("second-number").value);
  let result = 1;
  if (secondNumber === 0) {
    result = 0;
    document.getElementById("output").innerText = result;
  } else if (secondNumber < 0) {
    document.getElementById("output").style.color = "red";
    document.getElementById("output").innerText =
      "Error: Cannot power by a negative number";
  } else {
    for (let i = 0; i < secondNumber; i++) {
      result *= firstNumber;
    }
    document.getElementById("output").innerText = result;
  }
}

function clearFields() {
  document.getElementById("first-number").value = "";
  document.getElementById("second-number").value = "";
  document.getElementById("output").innerHTML = "&#160";
  document.getElementById("output").style.color = "black";
}

function checkNegative(number) {
  if (number < 0) {
    document.getElementById("output").style.color = "red";
  } else {
    document.getElementById("output").style.color = "black";
  }
}
