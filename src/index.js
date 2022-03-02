import './style.css';
import { list, addToList } from './leaderboardList.js';
import regeneratorRuntime from 'regenerator-runtime';

const listContainer = document.querySelector('.board-list');
const refreshButton = document.querySelector('.board-btn');

const form = document.querySelector('.add-form');

const refreshList = () => {
  listContainer.innerHTML = '';
  list.forEach((item) => {
    listContainer.innerHTML += `<li class="scores">${item.name}: ${item.score}</li>`;
  });
  return 0;
};

refreshList();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addToList();
  refreshList();
});

refreshButton.addEventListener('click', () => {
  refreshList();
});

// Api
// Create a game
const getGameId = async () => {
  const game = JSON.stringify({ name: 'ismail' });
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const options = {
    method: 'POST',
    body: game,
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
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/NuVq0v1gPV9u2OdnHjwF/scores';

  const getData = await fetch(url);
  const data = await getData.json();
  return data;
};

// add game data
const setData = async () => {
  const score = {
    user: 'ismail',
    score: 20,
  };
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/NuVq0v1gPV9u2OdnHjwF/scores';
  const options = {
    method: 'POST',
    body: score,
    mode: 'no-cors',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  const postRequest = await fetch(url, options);
  const obj = await postRequest.json();
  return obj;
};

setData()
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

getData()
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
