import img from './main/image';
import './assets/css/style.css';
import Board from './main/board';

function shogiBoard() {
  const Game = new Board()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', shogiBoard)
} else {
  shogiBoard()
}