/*  getDiscountedTotalForCategory(products, category) — 
Chaining map + filter + reduce  
Given an array of products { name, category, price }, return the total price of 
all products in the given category after applying a 10% discount to each. 
Input:  
products = [{ name: "Pen", category: "stationery", price: 100 }, { name: "Bag", 
category: "accessory", price: 500 }, { name: "Notebook", category: "stationery", 
price: 60 }], category = "stationery"  
Output: 144 */

const getDiscountedTotalForCategory = (products, category) => {
  // filtering category
  const filtered = products.filter((currentProduct) => {
    if (currentProduct.category === category) {
      return true;
    } else {
      return false;
    }
  });
  // applying discount
  const maped = filtered.map((currentProduct) => {
    let applyDiscount =
      currentProduct.price - (currentProduct.price * 10) / 100;
    return applyDiscount;
  });
  // sum/totoal
  const total = maped.reduce((accumulator, currentPrice) => {
    let sum = accumulator + currentPrice;
    return sum;
  }, 0);

  return total;
};

let products = [
    { name: "Pen", category: "stationery", price: 100 },
    { name: "Bag", category: "accessory", price: 500 },
    { name: "Notebook", category: "stationery", price: 60 },
  ],
  category = "stationery";
console.log(getDiscountedTotalForCategory(products, category));
