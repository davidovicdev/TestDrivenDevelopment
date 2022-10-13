function getChange(totalPrice, paidAmount) {
  var coins = [200, 100, 50, 20, 10, 5, 2, 1];
  var difference = paidAmount - totalPrice;
  var change = [];
  while (difference != 0) {
    console.log("TU SAM");
    for (let i = 0; i < coins.length; i++) {
      if (coins[i] <= difference) {
        change.push(coins[i]);
        difference -= coins[i];
        break;
      }
      break;
    }
  }
  return change;
}
getChange(200, 500);
