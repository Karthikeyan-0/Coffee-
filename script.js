function calculateBill() {
  // Prices
  const prices = {
    espresso: 80,
    latte: 120,
    cappuccino: 150,
    coldbrew: 200
  };

  // Quantities
  let espressoQty = parseInt(document.getElementById("espresso").value) || 0;
  let latteQty = parseInt(document.getElementById("latte").value) || 0;
  let cappuccinoQty = parseInt(document.getElementById("cappuccino").value) || 0;
  let coldbrewQty = parseInt(document.getElementById("coldbrew").value) || 0;

  // Total Calculation
  let total =
    (espressoQty * prices.espresso) +
    (latteQty * prices.latte) +
    (cappuccinoQty * prices.cappuccino) +
    (coldbrewQty * prices.coldbrew);

  // Display Result
  document.getElementById("totalPrice").innerText = "Rs. " + total;
  document.getElementById("billBox").style.display = "block";
}
