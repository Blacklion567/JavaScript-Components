let ppl = [
  { name: 'Blacklion567', age: 21 },
  { name: 'Proline', age: 18 },
  { name: 'Jamaica', age: 17 },
];

const adultGroup = ({ age }) => {
  if (age >= 18) {
    return 'adult';
  } else {
    return 'child';
  }
};

const organized = Object.groupBy(ppl, adultGroup);

console.log(organized);
