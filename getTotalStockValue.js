/* getTotalStockValue(products) — reduce()  
Given an array of products { price, stock }, return the total value of all stock 
combined (price × stock, summed). 
Input: 
[{ price: 50, stock: 4 }, { price: 20, stock: 10 }]  
Output: 400  */

const getTotalStockValue = (products) => {
  // get total
  const getTotal = products.reduce((accumulator, currentProduct) => {
    const { price, stock } = currentProduct;
    let total = accumulator + price * stock;
    return total;
  }, 0);
  return getTotal;
};
let products = [
  { price: 50, stock: 4 },
  { price: 20, stock: 10 },
  { price: 30, stock: 10 },
];

console.log(getTotalStockValue(products));
