let animals = [
    { name: 'Tibbers', type: 'cat', isNeutered: true, age: 2 },
    { name: 'Fluffball', type: 'rabbit', isNeutered: false, age: 1 },
    { name: 'Strawhat', type: 'cat', isNeutered: true, age: 5 }
];

/*using functional filter() where a represents an item in the array*/
let neuteredAnimals = animals.filter((a) => {
    return a.isNeutered;
});

console.log(neuteredAnimals);
