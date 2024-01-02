const canvas = document.getElementById('tetris');
const ctx = canvas.getContext('2d');

canvas.width = 200;
canvas.height = 400;

const board = [];

function createBoard() {
  for (let i = 0; i < 20; i++) {
    board.push(Array(10).fill(0));
  }
}

createBoard();

function drawBoard() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] > 0) {
        ctx.fillStyle = `rgb(0, ${board[i][j] * 16}, 0)`;
        ctx.fillRect(j * 10, i * 10, 10, 10);
      }
    }
  }
}

setInterval(drawBoard, 100);