// Declare and assign the variables below
const input = require('readline-sync');

let spaceShuttleName = "Determination";
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
let milesPerKm = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof(spaceShuttleName));
console.log(typeof(shuttleSpeedMph));
console.log(typeof(distanceToMarsKm));
console.log(typeof(distanceToMoonKm));
console.log(typeof(milesPerKm));
// Calculate a space mission below
console.log(distanceToMarsKm * milesPerKm);
let milesToMars = distanceToMarsKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;
// Print the results of the space mission calculations below
console.log(spaceShuttleName + " " + "will take" + " " + daysToMars + " " + "days to reach Mars.");
// Calculate a trip to the moon below
console.log(distanceToMoonKm * milesPerKm)
let milesToMoon = distanceToMoonKm * milesPerKm;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;
// Print the results of the trip to the moon below
console.log(spaceShuttleName + " " + "will take" + " " + daysToMoon + " " + "days to reach the Moon.");