//using some method
const array = [1, 2, 3, 4, 5];

array.some((element) => {
  if (element === 6) {
    return true;
  }
  console.log(element);
  return false;
});
