const fs = require('fs');
const calories = fs.readFileSync('day1/data.txt').toString().split('\n');
let maxCalories = 0;
let elfCalories = 0;
calories.forEach((entry) => {
  if (elfCalories > maxCalories) maxCalories = elfCalories;
  if (!entry) {
    elfCalories = 0;
    return;
  }
  else elfCalories += Number(entry);
})
console.log(maxCalories);