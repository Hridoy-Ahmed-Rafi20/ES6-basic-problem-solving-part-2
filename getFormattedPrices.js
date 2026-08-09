/* getFormattedPrices(prices) — map()  
Given an array of numbers, return a new array where each price is formatted 
as a string prefixed with "$". 
Input: [100, 250, 75]  
Output: ["$100", "$250", "$75"]  */

const getFormattedPrices = (prices) => {
  const getFormatted = prices.map((currentPrice) => {
    return `$${currentPrice}`;
  });
  return getFormatted;
};
let prices = [100, 250, 75];
console.log(getFormattedPrices(prices));
