// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("property called organization", function () {
    expect(launchcode.organization).toEqual("nonprofit");
  })
  test("property called executiveDirector", function () {
    expect(launchcode.executiveDirector).toEqual("Jeff");
  })
  test("property called percentageCoolEmployees", function () {
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  })
  test("property called programsOffered with 3 programs", function () {
    expect(launchcode.programsOffered[0]).toEqual("Web Development");
    expect(launchcode.programsOffered[1]).toEqual("Data Analysis");
    expect(launchcode.programsOffered[2]).toEqual("Liftoff");
    expect(launchcode.programsOffered.length).toEqual(3);
  })

  describe("should have a method called launchOutput, which", function () {
    test("should return 'Launch!' for numbers evenly divisible by 2", function () {
      expect(launchcode.launchOutput(2)).toEqual("Launch!");
    });
    test("should return 'Code!' for numbers evenly divisible by 3", function () {
      expect(launchcode.launchOutput(3)).toEqual("Code!");
    });
    test("should return 'Rocks!' for numbers evenly divisible by 5", function () {
      expect(launchcode.launchOutput(5)).toEqual("Rocks!");
    });
    test("should return 'LaunchCode!' for numbers evenly divisible by both 2 and 3", function () {
      expect(launchcode.launchOutput(6)).toEqual("LaunchCode!");
    });
    test("should return 'Code Rocks!' for numbers evenly divisible by both 3 and 5", function () {
      expect(launchcode.launchOutput(15)).toEqual("Code Rocks!");
    });
    test("should return 'Launch Rocks! (CRASH!!!!)' for numbers evenly divisible by both 2 and 5", function () {
      expect(launchcode.launchOutput(10)).toEqual("Launch Rocks! (CRASH!!!!)");
    });
    test("should return 'LaunchCode Rocks!' for numbers evenly divisible by 2, 3 and 5", function () {
      expect(launchcode.launchOutput(30)).toEqual("LaunchCode Rocks!");
    });
    test("should return 'Rutabagas! That doesn't work.' for numbers NOT evenly divisible by 3 and 5", function () {
      expect(launchcode.launchOutput(7)).toEqual("Rutabagas! That doesn't work.");
    });
  });
});