const fs = require('fs');
const calories = fs.readFileSync('day1/data.txt').toString().split('\n');
let max1Calories = 0;
let max2Calories = 0;
let max3Calories = 0;
let elfCalories = 0;

calories.forEach((entry) => {
  if (!entry) {
    if (elfCalories >= max1Calories) {
      if (max1Calories >= max2Calories) max2Calories = max1Calories;
      else if (max1Calories >= max3Calories) max3Calories = max1Calories;
      max1Calories = elfCalories;
    }
    else if (elfCalories >= max2Calories) {
      if (max2Calories >= max3Calories) max3Calories = max2Calories;
      max2Calories = elfCalories;
    }
    else if (elfCalories >= max3Calories) max3Calories = elfCalories;
    elfCalories = 0;
    return;
  }
  else elfCalories += Number(entry);
})
const totalCalories = max1Calories + max2Calories + max3Calories;
console.log(totalCalories);