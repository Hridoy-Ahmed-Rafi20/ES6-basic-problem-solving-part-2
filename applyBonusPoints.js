/* applyBonusPoints(users, bonus) — Pass by Reference vs 
Value  
Return a NEW array of users with points increased by bonus, without 
mutating the original array or its objects. 
Input: users = [{ name: "Rafi", points: 20 }], bonus = 5  
Output: [{ name: "Rafi", points: 25 }] 
(original array's object must still have points: 20) */

const applyBonusPoints = (users, bonus) => {
  const update = users.map((currentUser) => {
    return {
      ...currentUser,
      points: currentUser.points + bonus,
    };
  });
  return update;
};

let users = [{ name: "Rafi", points: 20 }],
  bonus = 5;
console.log(applyBonusPoints(users, bonus));
console.log(
  `original array's object must still have points: ${users[0].points}`,
);
