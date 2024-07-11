
let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronaughtID: 1,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronaughtID: 2,
   move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronaughtID: 3,
   move: function () {return Math.floor(Math.random()*11)}
};

let dogOne = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronaughtID: 4,
   move: function () {return Math.floor(Math.random()*11)}
};

let tardigradeOne = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronaughtID: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

//move: function () {return Math.floor(Math.random()*11)}

// Create an array to hold the animal objects.

let crew = [superChimpOne, superChimpTwo, salamander, dogOne, tardigradeOne];

// Print out the relevant information about each animal.

function crewReports(crew) {
   let randomIndex = Math.floor(Math.random() * crew.length);
   let randomCrew = crew[randomIndex];
   return randomCrew;
}
//console.log(crewReports);

let selectedCrew = crewReports(crew);

console.log(`${selectedCrew.name} is a ${selectedCrew.species}. They are ${selectedCrew.age} years old and ${selectedCrew.mass} kilograms. Their ID is ${selectedCrew.astronaughtID}.`)
// Start an animal race!

let candidates = [superChimpOne, superChimpTwo, salamander, dogOne, tardigradeOne];



function fitnessTest(crew) {
   let results = [], numSteps, turns;
   for (let i = 0; i < crew.length; i++){
      numSteps = 0;
      turns = 0;
   while(numSteps < 20){
      numSteps += crew[i].move();
      turns++;
      }
      results.push(`${crew[i].name} took ${turns} turns to take 20 steps.`)
   }
   return results;
}

let raceResults = fitnessTest(crew);

console.log(fitnessTest(crew));