//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore){
     this.scores.push(newScore);
    }
    testAverage(){
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++){
            sum += this.scores[i];
        }
        let average = sum / this.scores.length;
        return Math.round(10 * average) / 10;
    }
    status(){
        let avg = this.testAverage();
        if (avg >= 90) {
            return "Accepted"; 
        }   else if (avg >= 80){
            return "Reserve";
        }   else if (avg >= 70){
            return "Probationary";
        }   else {
            return "Rejected";
        }
    }
}

let candidate1 = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let candidate2 = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let candidate3 = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

//console.log(candidate1, candidate2, candidate3);

//candidate1.addScore(83);
//console.log(candidate1.scores);
//console.log(candidate2.testAverage());
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

//console.log(`${candidate1.name} earned an average test score of ${candidate1.testAverage()} and has a status of ${candidate1.status()}.`)


let candidates = [candidate1, candidate2, candidate3];

for (let i = 0; i < candidates.length; i++){
    console.log(`${candidates[i].name} earned an average test score of ${candidates[i].testAverage()} and has a status of ${candidates[i].status()}.`)
}

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

let testCount = 0;
while (candidate3.status() === "Probationary") {
    candidate3.addScore(100);
    testCount++;
}

console.log(`It will take at least ${testCount} test(s) for Glad Gator to reach 'Reserve' status.`);