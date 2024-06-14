// Race Day
let raceNumber = Math.floor(Math.random() * 1000);
// console.log(raceNumber);
const registeredEarly = false;
const runnerAge = 17;

if (runnerAge >= 18 && registeredEarly) {
  raceNumber += 1000;
} 
// console.log(raceNumber)

if (runnerAge >= 18 && registeredEarly) {
  console.log(`Your race number is ${raceNumber} and 
  you will race at 9:30 am.`);
} else if (runnerAge >= 18 && !registeredEarly) {
  console.log(`Your race number is ${raceNumber} and 
  you will race at 11:00 am.`);
} else {
  console.log(`Your race number is ${raceNumber} and 
  you will race at 12:30 pm.`);
}