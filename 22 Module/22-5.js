/*
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    //  per item wood needed
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    //  calculating wood quantity
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;
    //  adding wood quantity
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}

const firstOrder = woodCalculator(1, 1, 1);
console.log(firstOrder);