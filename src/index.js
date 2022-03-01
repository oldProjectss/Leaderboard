import './style.css';
import list from './leaderboardList.js';

const listContainer = document.querySelector('.board-list');
const refreshButton = document.querySelector('.board-btn');
const refreshList = () => {
  listContainer.innerHTML = '';
  list.forEach((item) => {
    listContainer.innerHTML += `<li class="scores">${item.name}: ${item.score}</li>`;
  });
  return 0;
};

refreshList();

refreshButton.addEventListener('click', () => {
  refreshList();
});
