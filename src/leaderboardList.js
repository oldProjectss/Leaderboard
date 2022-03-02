import 'regenerator-runtime';

const message = document.querySelector('.alert');
const name = document.querySelector('.input-name');
const score = document.querySelector('.input-score');

// Api
// add game data
const setData = async (name, value) => {
  const score = JSON.stringify({
    user: name,
    score: value,
  });
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4cXt5oCSzSQPRsJboCYE/scores';
  const options = {
    method: 'POST',
    body: score,

    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  const postRequest = await fetch(url, options);
  const obj = await postRequest.json();
  return obj;
};

// get game data
const getData = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4cXt5oCSzSQPRsJboCYE/scores';

  const getData = await fetch(url);
  const data = await getData.json();
  return data.result;
};

const addToList = () => {
  const obj = {
    name: name.value,
    score: score.value,
  };
  setData(obj.name, obj.score)
    .then((response) => {
      message.innerHTML = response.result;
      message.style.display = 'block';
    })
    .catch((err) => {
      throw new Error(err);
    });
  name.value = '';
  score.value = '';
};

export { addToList, getData };
