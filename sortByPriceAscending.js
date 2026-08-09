/* sortByPriceAscending(products) — Callback Function  
Given an array of product objects { name, price }, return a new array sorted 
from lowest to highest price using a comparator callback in sort(). 
Input:  
[{ name: "Bag", price: 500 }, { name: "Pen", price: 10 }, { name: "Notebook", price: 
60 }]  
Output: 
[{ name: "Pen", price: 10 }, { name: "Notebook", price: 60 }, { name: "Bag", price: 
500 }] */

const comparator = (a, b) => {
  return a.price - b.price;
};

const sortByPriceAscending = (products, cb) => {
  return [...products].sort(cb);
};

let products = [
  { name: "Bag", price: 500 },
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 60 },
  { name: "ColorPaper", price: 100 },
  { name: "Book", price: 1000 },
];
console.log(sortByPriceAscending(products, comparator));
