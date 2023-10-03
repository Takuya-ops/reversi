// import utils from "./utils";

const board = document.getElementById("board");

// 初期の盤面
const initialBoard = [
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "W", "B", "", "", ""],
    ["", "", "", "B", "W", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""]
];

let rayTocoords = (x,y, a,b) => {
  let areaContains = (x,y) => x>=0 && x<8 && y>=0 && y<8;
  let coords = []
  while(areaContains(x,y)) {
    coords.push([x,y])
    x += a
    y += b
  }
  return coords;
}

function initializeBoard() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            if (initialBoard[i][j] === "B") {
                cell.classList.add("black");
            } else if (initialBoard[i][j] === "W") {
                cell.classList.add("white");
            }
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener("click", handleCellClick);
            board.appendChild(cell);
        }
    }
}

// クリックしたセルを処理
function handleCellClick(event) {
    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);
    // ここにリバーシのロジックを追加

  }

// ゲームを開始
initializeBoard();