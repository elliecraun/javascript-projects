const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.



food = food.split(",");
equipment = equipment.split(",");
pets = pets.split(",");
sleepAids = sleepAids.split(",");

food.sort();
equipment.sort()
pets.sort();
sleepAids.sort();


//console.log(food, equipment, pets, sleepAids);

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [];
cargoHold.push(food, equipment, pets, sleepAids);
console.log(cargoHold);


//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
userQuery = input.question(`Please select a cabinet: \n0 - Food \n1 - Equipment \n2 - Pets \n3 - Sleep Aids \n`);

console.log(userQuery);


let selectedCabinet;
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if (userQuery < 0 || userQuery > 3) {
    console.log("That is not a valid Cabinet number. ");
    } else {
        selectedCabinet = cargoHold[userQuery];
        console.log(selectedCabinet);

        let selectedItem = input.question("What item would you like from that cabinet? ");
        let containsText = "DOES"
        if (!selectedCabinet.includes(selectedItem)) {
            containsText += " NOT";
        }
    console.log(`Cabinet ${containsText} contain ${selectedItem}.`);
 };

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
