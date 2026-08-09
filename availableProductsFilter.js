/* Available Products Filter 
একটি E-commerce Platform-এ Product-দের Stock Status Check কররি হরব। Product List একটি Array of Object 
আকারর দেওযা আরে। Function শুধুমাত্র inStock: true হওযা Product-দের Array Return কররব. 
Input 
[ 
{name:"Shirt", inStock:true}, 
{name:"Shoes", inStock:false} 
] 
Output 
[{name:"Shirt", inStock:true}] 
Sample Test Cases 
Input 
Output 
[{name:"Shirt", inStock:true},{name:"Shoes", 
inStock:false}] 
[{name:"Shirt", inStock:true}]  */

const getAvailableProducts = (products) => {
  const filteredAvailableProducts = products.filter((currentProduct) => {
    if (currentProduct.inStock === true) {
      return true;
    } else {
      return false;
    }
  });
  return filteredAvailableProducts;
};
console.log(
  getAvailableProducts([
    { name: "Shirt", inStock: true },
    { name: "Shoes", inStock: false },
    { name: "Pant", inStock: true },
    { name: "Watch", inStock: false },
    { name: "Hijab", inStock: true },
  ]),
);
