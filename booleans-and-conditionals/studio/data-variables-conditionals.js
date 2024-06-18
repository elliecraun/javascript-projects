// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "Ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = 100;
let weatherStatus = "Clear";
let preparedForLiftOff = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7){
    console.log("We have the maximum of astronauts on board and can continue with the lift-off.");
} else {
    console.log("We're not good for Lift-off, there are too many astronauts.")
}
// add logic below to verify all astronauts are ready
if (astronautStatus = true){
    console.log("We are ready.");
} else if (astronautStatus = !true){
    console.log("We are not ready.");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= 850000){
    console.log("The total mass is:" , totalMassKg , "Kg.");
} else {
    console.log("Weight exceeds maximum limit of 850000.");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius <= maximumFuelTemp && fuelTempCelsius >= minimumFuelTemp){
    console.log("The fuel temp is:" , fuelTempCelsius , "°C");
} else {
    console.log("The temperature doesn't not meet the qualifications for lift-off.")
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel){
    console.log("Fuel level is at 100%");
}
// add logic below to verify the weather status is clear
if (weatherStatus = "Clear"){
    console.log("Weather is clear.");
} else if (weatherStatus = !true){
    console.log("Weather is not clear.");
}
// Verify shuttle launch can proceed based on above conditions
console.log("Initiating Space Shuttle Launch Sequence....\n" +
    "\nDate:\n" , date , 
    "\nTime:\n" , time , 
    "\nAstronaut Count:\n" , astronautCount ,
    "\nCrew Mass:\n" , crewMassKg , "KG" ,
    "\nFuel Mass:\n" , fuelMassKg , "KG" ,
    "\nShuttle Mass:\n" , shuttleMassKg , "KG", 
    "\nTotal Mass:\n" , totalMassKg , "KG" ,
    "\nFuel Temp:\n" , fuelTempCelsius , "°C" ,
    "\nWeather Status:\n" , weatherStatus , 
    "\nHave a Safe Flight!\n");
    