import './style.css';
import { list, addToList } from './leaderboardList.js';

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
