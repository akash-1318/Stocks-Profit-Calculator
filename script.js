var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');

var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');



function calculateProfitAndLoss(initial, quantity, current){
  if(initial > current){
    var loss = (initial-current) * quantity;
    var lossPercantage = (loss / initial) * 100;
    showOutput(`hey the loss is ${loss} and the percent is ${lossPercantage.toFixed(2) }😣`)
  } else if(current > initial){
    var profit = (current - initial) * quantity
    var profitPercantage = (profit / initial) * 100;
        showOutput(`hey the profit is ${profit} and the percent is ${profitPercantage.toFixed(2)} 🥳`)
  }
  else{
    showOutput(`No pain no gain 🙂`);
  }
}

function clickHandler(){
  var buyingPrice = Number(initialPrice.value);
  var stockQty = Number(stocksQuantity.value);
  var sellingPrice = Number(currentPrice.value);

  calculateProfitAndLoss(buyingPrice, stockQty, sellingPrice);

}

function showOutput(message){
  outputBox.innerText = message
}


submitBtn.addEventListener('click', clickHandler);


// calculateProfitAndLoss(89, 100, 189)