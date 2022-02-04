function animalCount(miles) {
    const animalAtFirst10 = 10;
    const animalAfter10Miles = 30;
    const animalAfter20Miles = 50;
    let totalAnimal = 0;

    if(miles <= 10){
        const count = miles * animalAtFirst10;
        return count;
    }
    else if(miles <= 20){
        const firstDense = 10 * animalAtFirst10;
        const restMiles10 = miles - 10;
        const secondDense = restMiles10 * animalAfter10Miles;
        totalAnimal = firstDense + secondDense;
    }
    else{
        const firstDense = 10 * animalAtFirst10;
        const secondDense = 10 * animalAfter10Miles;
        const restMiles20 = miles - 20;
        const thirdDense = restMiles20 * animalAfter20Miles;
        totalAnimal = firstDense + secondDense + thirdDense;
    }
    return totalAnimal;
}

const animal = animalCount(30);
console.log(animal);