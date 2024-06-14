// Race Day
// adults (over 18)
  // - registered early - race at 9:30am
                     // - number at or above 1000
  // - registered late - race at 11:00am
                    // - number under 1000
// Youths (under 18) - race at 12:30pm
                  // - number under 1000


let raceNumber = Math.floor(Math.random() * 1000);
// console.log(raceNumber);
let registeredEarly = true;
let runnerAge = 17;

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
} 
// console.log(raceNumber)

if (runnerAge > 18 && registeredEarly) {
  console.log(`Your race number is ${raceNumber} and 
  you will race at 9:30 am.`);
} else if (runnerAge >= 18 && !registeredEarly) {
  console.log(`Your race number is ${raceNumber} and 
  you will race at 11:00 am.`);
} else if (runnerAge === 18) {
  console.log(`Welcome to adulthood!`)
} else if (runnerAge < 18) {
  console.log(`Your race number is ${raceNumber} and 
  you will race at 12:30 pm.`);
}