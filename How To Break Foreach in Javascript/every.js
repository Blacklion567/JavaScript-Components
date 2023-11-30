// Using every method
const array = [
  'Proline',
  'Jamaica',
  'Blacklion567',
  'NoCodeArea',
  'Aristides'
];

array.every((element) => {
  if (element !== 'Blacklion567') {
    console.log(element);
    return true;
  }
  return false;
});
