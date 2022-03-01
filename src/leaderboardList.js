const name = document.querySelector('.input-name');
const score = document.querySelector('.input-score');

const list = [
  {
    name: 'ismail',
    score: 50,
  },
  {
    name: 'Name',
    score: 30,
  },
  {
    name: 'Name',
    score: 40,
  },
  {
    name: 'Name',
    score: 10,
  },
  {
    name: 'Name',
    score: 30,
  },
  {
    name: 'Name',
    score: 25,
  },
];

const addToList = () => {
  let obj = {
    name: name.value,
    score: score.value,
  };
  list.push(obj);
  name.value = '';
  score.value = '';
};

export { list, addToList };
