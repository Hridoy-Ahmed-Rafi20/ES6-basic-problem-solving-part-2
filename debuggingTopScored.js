/* িতর করর।  Rules: শুধুমাত্র  ারের Score 60 বা িার দবতি, িারা িাতিকায োকরব। প্ররিেক Qualified Student-এর 
নাম UPPERCASE করা হরব। শুধুমাত্র প্রেম ৩ জন দেোরনা হরব।  তকন্তু একজন Junior Developer িাডাহুরডা করর 
Function তিরে দেরিরে এবং অরনক জাযগায ভুি করররে। দিামার কাজ হরিা সব Bug েুুঁরজ দবর করর টিক করা। 
Input 
[ 
    { name: "Rafi", score: 80 }, 
    { name: "Sadia", score: 55 }, 
    { name: "Karim", score: 70 }, 
    { name: "Nafis", score: 65 } 
] 
Output 
["RAFI", "KARIM", "NAFIS"] 
Buggy Code 
/* Find and fix every bug. Do not change the function name. */
// function generateTopScorers(students) {
//     if (!Array.isArray = students) {
//         return "Invalid";
//     }

//     if (students.length == []) {
//         return "Invalid";
//     }

//     const qualified = students.filter(student => {
//         student.score > 60;
//     });

//     const names = qualified.map(({ name }) => {
//         name.toUpperCase();
//     });

//     return names.slice(0, 2);
// }

// Sample Test Cases
// Input Output
// [{name:"Rafi",score:80},{name:"Sadia",score:55},{name:"Karim",score:70},{na
// me:"Nafis",score:65}]
// []
// ["RAFI","KARIM","N
// AFIS"]
// [{name:"Rafi"}]
// Invalid
// Invalid */

// Should Check
// ● Array.isArray() সটিকভারব Call করা হরযরে তক?
// ● Empty Array Check টিক আরে তক?
// ● filter() Callback তক Return কররে?
// ● map() Callback তক Return কররে?
// ● slice() টিক কযটি Element তনরে?

/* Find and fix every bug. Do not change the function name. */
function generateTopScorers(students) {
  if (!Array.isArray(students)) {
    return "Invalid";
  }

  if (students.length === 0) {
    return "Invalid";
  }

  if (students.some((student) => !student.name || !student.score)) {
    return "Invalid";
  }

  const qualified = students.filter((student) => {
    return student.score > 60;
  });

  const names = qualified.map((currentObj) => {
    return currentObj.name.toUpperCase();
  });

  return names.slice(0, 2);
}
console.log(
  generateTopScorers([
    { name: "Rafi", score: 80 },
    { name: "Sadia", score: 55 },
    { name: "Karim", score: 70 },
    { name: "Nafis", score: 65 },
  ]),
);
console.log(generateTopScorers([]));
console.log(generateTopScorers([{ name: "Rafi" }]));
