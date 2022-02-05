// program-3: picnic budget calculation

function picnicBudget(person){
    // fixed rate according to person number
    const firstHundredRate = 5000;
    const secondHundredRate = 4000;
    const moreThanTwoHundredRate = 3000;
    var totalBudget = 0;

    // input type validation
    if(typeof person == "number"){
        // negative input validation
        if(person >= 0){
            if(person <= 100){
                // totalCost calculation for person is 100 or less
                totalBudget = person * firstHundredRate;
                return totalBudget;
            }
            else if(person >= 100 && person <= 200){
                // totalCost calculation for person is more than 100 or less than 200
                var firstHundredCost = 100 * firstHundredRate;
                var secondHundredCost = (person - 100) * secondHundredRate;
                totalBudget = firstHundredCost + secondHundredCost;
                return totalBudget;
            }
            else{
                // totalCost calculation for person more than 200
                var firstHundredCost = 100 * firstHundredRate;
                var secondHundredCost = 100 * secondHundredRate;
                var moreThanTwoHundredCost = (person - 200) * moreThanTwoHundredRate;
                totalBudget = firstHundredCost + secondHundredCost + moreThanTwoHundredCost;
                return totalBudget;
            }
        }
        else{
            // showing message if input is negative number
            return "Number of person must be positive number";
        }
    }
    else{
        // showing message if input type is wrong
        return "Enter number value for person number";
    }
}

let attendingPerson = 220;
const totalBudget = picnicBudget(attendingPerson);
console.log(totalBudget);