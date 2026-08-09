/*  findProductByName(products, name) — find()  
Given an array of product objects, return the first product matching the 
given name, or undefined if not found. 
Input:  
products = [{ name: "Pen", price: 10 }, { name: "Bag", price: 500 }], name = "Bag"  
Output:  
{ name: "Bag", price: 500 } */

const findProductByName = (products, name) => {
  const getProduct = products.find((currentProduct) => {
    if (currentProduct.name === name) {
      return true;
    } else {
      return false;
    }
  });
  return getProduct;
};
let products = [
    { name: "Pen", price: 10 },
    { name: "Paper", price: 50 },
    { name: "Bag", price: 500 },
  ],
  name = "Bag";
console.log(findProductByName(products, name));
