let sum = "";

function addtosum(operator) {
  sum = sum + operator;
  document.getElementById("output").innerText = sum;
}

function evaluatesum() {
  document.getElementById("output").innerText = eval(sum);
}

function clearsum() {
  sum = "";
  document.getElementById("output").innerText = sum;
}
