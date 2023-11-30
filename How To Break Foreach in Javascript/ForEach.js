const array = [1, 2, 3, 4, 5];

// Using a regular for loop
for (let i = 0; i < array.length; i++) {
  if (array[i] === 5) {
    break;
  }
  console.log(array[i]);
}
