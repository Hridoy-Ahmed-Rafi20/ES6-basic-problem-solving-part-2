/* Discount Total Calculator 
একটি Shop-এ প্রতিটি Product-এর Price একটি Number Array আকারর দেওযা আরে। প্ররিেক Price দেরক ৫ িাকা 
Discount তেরয, সব Updated Price দ াগ করর Total Return কররি হরব। 
Input 
[100, 250, 80] 
Output 
415 
Explanation 
Updated Prices: [95, 245, 75] → Total: 95 + 245 + 75 = 415 
Sample Test Cases 
Input Output 
[100, 250, 80] 415 
[50] 45  */

const discountTotalCalculator = (prices) => {
  const applyDiscount = prices.map((currentPrice) => {
    return currentPrice - 5;
  });
  const getTotalAfterDiscount = applyDiscount.reduce(
    (accumulator, currentPrice) => {
      return accumulator + currentPrice;
    },
    0,
  );
  return getTotalAfterDiscount;
};
console.log(discountTotalCalculator([100, 250, 80]));
