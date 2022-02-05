// program-2: fastfood buying cost calculation

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

var total = pandaCost(10,10,10);
console.log(total);