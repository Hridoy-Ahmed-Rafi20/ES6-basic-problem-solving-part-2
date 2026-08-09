/* Coupon Applier  
একটি Order Object দেরক total দবর করর Discount Apply কররি হরব, এবং বাতক Properties অপতরবতিিি দররে নিুন 
Object Return কররি হরব। (discount fixed: 10%) 
Input 
{ orderId: "A1", total: 500, customer: "Mim" } 
Output 
{ orderId: "A1", total: 450, customer: "Mim" } 
Sample Test Cases 
Input 
Output 
{orderId:"A1",total:500,customer:"Mim"} 
{orderId:"A1",total:450,customer:"Mim"}  */

const couponApplier = (order) => {
  return {
    ...order,
    total: order.total - (order.total * 10) / 100,
  };
};
let order = { orderId: "A1", total: 500, customer: "Mim" };
console.log(couponApplier(order));

let order2 = { orderId: " B1", total: 100, customer: "Rafi" };
console.log(couponApplier(order2));
