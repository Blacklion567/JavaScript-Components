# How to Use filter()

- filter() is a method that lets you create a new array based on conditions that evaluate to true from an existing array.
Take a look at the example below:

```js
let animals = [
   {name: 'Tibbers', type: 'cat', isNeutered: true, age: 2},
   {name: 'Fluffball', type: 'rabbit', isNeutered: false, age: 1},
   {name: 'Strawhat', type: 'cat', isNeutered: true, age: 5}
 ]

 /*using imperative*/
 let neuteredAnimals = [];

for (let i=0; i < animals.length; i++){
  let a = animals[i];
  if(a.isNeutered){
    neuteredAnimals.push(a);
  }
}
```

- The above example is a procedural pattern we often see in the wild as a way to loop through each item in the array, test the condition then push it into the new array.

With the filter() method, you just need to set the condition. For example:

```js
let animals = [
    {name: 'Tibbers', type: 'cat', isNeutered: true, age: 2},
    {name: 'Fluffball', type: 'rabbit', isNeutered: false, age: 1},
    {name: 'Strawhat', type: 'cat', isNeutered: true, age: 5}
  ]

 /*using functional filter() where a represents an item in the array*/
 let neuteredAnimals = animals.filter((a) => {
     return a.isNeutered;
 });
```

- Here, we just need to set up the filter method against the array. The anonymous function lets a represent a single item in the array in the same manner as a = animals[i] did in the procedural pattern. Whatever is returned within the filter() is what gets put into the new array.

How to use find()
In JavaScript, find() is used to create a new object based on the condition you set. On the surface, it looks like filter() but they’re not the same. filter() returns an array of matched objects while find() will return the first matched object.

See the example below:

```js
let animals = [
    {name: 'Tibbers', type: 'cat', isNeutered: true, age: 2},
    {name: 'Fluffball', type: 'rabbit', isNeutered: false, age: 1},
    {name: 'Strawhat', type: 'cat', isNeutered: true, age: 5}
  ]


animalTypeFound = animals.find( animal => animal.type === 'cat' );

// animalTypeFound will return:
// {name: 'Tibbers', type: 'cat', isNeutered: true, age: 2}

animalTypeFilter = animals.filter( animal => animal.type === 'cat' );

// animalTypeFilter will return:
// [{name: 'Tibbers', type: 'cat', isNeutered: true, age: 2}, {name: 'Strawhat', type: 'cat', isNeutered: true, age: 5}]
find()will stop at the first match while filter() will continue and return all matched items in the array.

```

## How to Use map()

- You have an array but you want it to look different. You could loop through using a forEach() function but that will only create complications later down the line.

- Mapping lets you move the values around, reassign them to different selectors and whatever else you want to do to them. The result of map() is an object that lets you store key-pair values or just an array of simple values.

- See the code below for syntax and examples:

```js
let animals = [
    {name: 'Tibbers', type: 'cat', isNeutered: true, age: 2},
    {name: 'Fluffball', type: 'rabbit', isNeutered: false, age: 1},
    {name: 'Strawhat', type: 'cat', isNeutered: true, age: 5}
  ]

// what you need:
// ['Tibbers', 'Fluffball', 'Strawhat']

let animalNames = animals.map(animal => {return animal.name});

// what you need:
// [{name: 'Tibbers', species: 'cat'}, {name: 'Fluffball', species: 'rabbit'}, {name: 'Strawhat', species: 'cat'}]

let petDetails = animals.map(animal => {
    return {
        name: animal.name,
        species: animal.type
    };
});
```

### How to Use reduce()

- We hear about reduce from time to time but no one really talks about what exactly it is. In short, reduce lets you interact two values or objects adjacent to each other from left to right.

- For example, you have the following array: [100, 20, 10]

- If you were to use reduce() on it, the first set of values will be 100 and 20. Then whatever the output of that is used to interact with 10.

```js
let numbers = [100, 20, 10];

// result will return 70 as the value
// The function inside reduce will run twice.
// the first time, x = 100, y = 20
// the second time, x = 80, y = 10

result = numbers.reduce((x, y) => { return x - y; });
reduce() can also take two arguments. The first is the function that determines what happens to the two values and the second sets the starting value.

let animals = [
    {name: 'Tibbers', type: 'cat', isNeutered: true, age: 2},
    {name: 'Fluffball', type: 'rabbit', isNeutered: false, age: 1},
    {name: 'Strawhat', type: 'cat', isNeutered: true, age: 5}
  ]

// How old are all the animals combined?
// 0 is the starting value and acts as the first acculmulator value
// will return 8

let totalAge = animals.reduce((acculmulator, animal) => {
    return acculmulator + animal.age;
}, 0);

// lets say you want to find out the oldest animal
// code below will return {name: 'Strawhat', type: 'cat', isNeutered: true, age: 5}

let oldestPet = animals.reduce((oldest, animal) => {
    return (oldest.age || 0) > animal.age ? oldest : animal;
  }, {});

  // decrypting the code above and how terniaries work
  // the condition --> (oldest.age || 0) > animal.age
  // if true --> ? oldest
  // else --> : animal
How to Use every()
Every returns a true or false value based on the condition set. It works in a similar fashion as filter() but instead of returning an object or value, every() spits back a boolean.

This makes it good for quickly checking whether everything inside an array meets the criteria.

let animals = [
    {name: 'Tibbers', type: 'cat', isNeutered: true, age: 2},
    {name: 'Fluffball', type: 'rabbit', isNeutered: false, age: 1},
    {name: 'Strawhat', type: 'cat', isNeutered: true, age: 5}
  ]

let allNeutered = animals.every(animal => {return animal.isNeutered});

//will return false because not all values under isNeutered evaluates to true
How to use some()
some() works the same way as every() but only at least one of the conditions needs to evaluate to true.

See example below:

let animals = [
    {name: 'Tibbers', type: 'cat', isNeutered: true, age: 2},
    {name: 'Fluffball', type: 'rabbit', isNeutered: false, age: 1},
    {name: 'Strawhat', type: 'cat', isNeutered: true, age: 5}
  ]

let someAreCats = animals.some(animal => {return animal.type === 'cat'});

// will return true because at least one animal.type returned 'cat'
In real-world use cases, you might use every() and some() to check values in an array before sending them off to the database.

Or perhaps you want to make sure that there is a certain category of an item in a cart before applying a special discount. Or you’re coding a booking system and you wanted to make sure that every customer who can book satisfies the minimum age requirements.

Lets Mix and Match!
You can use these array methods on their own or in chains. The result from the first method will be used as the value for the following method.

See the example below:

let animals = [
    {name: 'Tibbers', type: 'cat', isNeutered: true, age: 2, enteredPagent: true, cutenessScore: 347},
    {name: 'Fluffball', type: 'rabbit', isNeutered: false, age: 1, enteredPagent: true, cutenessScore: 193},
    {name: 'Strawhat', type: 'cat', isNeutered: true, age: 5, enteredPagent: false, cutenessScore: 521}
  ]

//lets say you want to find the total cuteness score of all valid pagent entrants

let totalScore = animals
                    .filter(animal => {return animal.isNeutered})
                    .reduce((accumulator, animal) => {return accumulator + animal.cutenessScore}, 0);

// totalScore will return 868
Depending on your dataset, you can become quite efficient with arrays, reducing the need to manually loop through every object and array to do what you need to do.

Final Words
For all the examples in one place, I’ve created a GitHub repo for your reference.

JavaScript can be efficient — if you take the time to learn it properly. Developers new to JavaScript tend to fall into procedural patterns because it’s easy.

However, easy can quickly turn into a spaghetti jumble of complicated once you work with more than one for or while loop. Array methods eliminate the potential craziness that comes with long code, nested brackets and, lost semi-colons.
