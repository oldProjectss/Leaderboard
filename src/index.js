import './style.css';
import { addToList, getData } from './leaderboardList.js';

const listContainer = document.querySelector('.board-list');
const refreshButton = document.querySelector('.board-btn');

const form = document.querySelector('.add-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addToList();
});

refreshButton.addEventListener('click', () => {
  getData()
    .then((result) => {
      listContainer.innerHTML = '';
      result.forEach((item) => {
        listContainer.innerHTML += `<li class="scores">${item.user}: ${item.score}</li>`;
      });
    })
    .catch((err) => {
      throw new Error(err);
    });
});
