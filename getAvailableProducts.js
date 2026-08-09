/* getAvailableProducts(products) — filter()  
Given an array of product objects { name, stock }, return only the products 
where stock is greater than 0. 
Input:  
[{ name: "Pen", stock: 5 }, { name: "Bag", stock: 0 }, { name: "Notebook", stock: 2 
}]  
Output:  
[{ name: "Pen", stock: 5 }, { name: "Notebook", stock: 2 }] */

const getAvailableProducts = (products) => {
  // filtering
  const getAvailableProductsList = products.filter((currentProduct) => {
    if (currentProduct.stock > 0) {
      return true;
    } else {
      return false;
    }
  });
  return getAvailableProductsList;
};
let products = [
  { name: "Pen", stock: 5 },
  { name: "Bag", stock: 0 },
  { name: "Bag", stock: -1 },
  { name: "Sticky note", stock: 30 },
  { name: "Notebook", stock: 2 },
];
console.log(getAvailableProducts(products));
