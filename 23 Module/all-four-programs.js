// program-1:
function anaToVori(ana) {
    // input type validation
    if(typeof ana == "number"){
        // negative input validation
        if(ana >= 0){
            // vori calculation
            var vori = ana / 16;
            return vori;
        }
        else{
            // showing message if input is negative
            return "Value of ana must be a positive number";
        }
    }
    else{
        // showing message if input type is wrong
        return "Enter number value as input";
    }
}

// program-2:
function pandaCost(singaraQty, samusaQty, jilapiQty){
    // item price - fixed
    const singaraPrice = 7;
    const samusaPrice = 10;
    const jilapiPrice = 15;
    
    // input type validation
    if(typeof singaraQty == "number" && typeof samusaQty == "number" && typeof jilapiQty == "number"){
        
        // negative input validation
        if(singaraQty >= 0 && samusaQty >= 0 && jilapiQty >= 0){
            // calculating total of each item
            var singaraTotalCost = singaraPrice * singaraQty;
            var samusaTotalCost = samusaPrice * samusaQty;
            var jilapiTotalCost = jilapiPrice * jilapiQty;
            // calculating total cost
            var totalCost = singaraTotalCost + samusaTotalCost + jilapiTotalCost;
            return totalCost;
        }
        else{
            // showing message if input is negative number
            return "Items quantity must be positive numbers";
        }
    }
    else{
        // showing message if input type is wrong
        return "Enter number value for items quantity";
    }
}

// program-3:
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

// program-4:
function oddFriend(friendNames){
    var checkString = 0;
    var oddFriendName;

    // input type (array) validation
    if(Array.isArray(friendNames) !=0){
        // empty array validation
        if(friendNames.length > 0){
            for(let i=0; i<friendNames.length; i++){
                // string item validation in array
                if(typeof(friendNames[i]) == "string"){
                    checkString++;
                }
                else{
                    // validation message if item isn't string
                    return "All names in array must be string";
                }
            }

            if(checkString == friendNames.length){
                var oddNameCount = 0;

                for(let i = 0; i < friendNames.length; i++){
                    // searchning odd length name in array
                    if(friendNames[i].length % 2 != 0){
                        oddNameCount += 1;
                    }
                }

                if(oddNameCount != 0){
                    for(let i = 0; i < friendNames.length; i++){
                        // checking odd length name
                        if(friendNames[i].length % 2 != 0){
                            oddFriendName = friendNames[i];
                            return oddFriendName;
                        }
                    }
                }
                else{
                    // validation message if there is no odd length name in array
                    return "No odd length name in array";
                }
            }
        }
        else{
            // validation message if there is no item in array
            return "Check array elements and try again";
        }
    }
    else{
        // validation message if input is not an array
        return "Input must be an array.";
    }
}
