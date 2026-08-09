/* Employee Profile Generator 
একটি Company নিুন Employee Onboarding-এর পরর একটি Profile Message তিতর কররি চায। Function একটি 
Object গ্রহণ কররব। 
Input 
{ 
  name: "Jodu", 
  age: 25, 
  department: "Marketing" 
} 
Output 
Template Literal বেবহার করর Return কররব— 
My name is Jodu. I am 25 years old. I work in Marketing. 
Challenge 
● Return "Invalid"  তে Input Object না হয 
● অেবা name, age অেবা department property না োরক 
 
 
 
Sample Test Cases 
Input 
Output 
{name:"Tanvir",age:25,department:"Marketing"} 
My name is Tanvir. I am 25 years old. I work in Marketing. 
{} 
"employee" 
Invalid 
Invalid  */

const employeeProfileGenerator = (employee) => {
  //   if (
  //     typeof employee !== "object" ||
  //     !Object.keys(employee).includes("name") ||
  //     !Object.keys(employee).includes("age") ||
  //     !Object.keys(employee).includes("department")
  //   ) {
  //     return "Invalid";
  //   }

  //   if (
  //     typeof employee !== "object" ||
  //     !Object.hasOwn(employee, "name") ||
  //     !Object.hasOwn(employee, "age") ||
  //     !Object.hasOwn(employee, "department")
  //   ) {
  //     return "Invalid";
  //   }

  if (typeof employee !== "object") {
    return "Invalid";
  }
  if (
    !Object.hasOwn(employee, "name") ||
    !Object.hasOwn(employee, "age") ||
    !Object.hasOwn(employee, "department")
  ) {
    return "Invalid";
  }

  const { name, age, department } = employee;
  return `My name is ${name}. I am ${age} years old. I work in ${department}. `;
};
let employee = {
  name: "Jodu",
  age: 25,
  department: "Marketing",
};
console.log(employeeProfileGenerator(employee));
console.log(employeeProfileGenerator({}));
console.log(employeeProfileGenerator("employee"));
