// // ゲームボードを表す二次元配列
// let boardState = JSON.parse(JSON.stringify(initialBoard)); // 初期状態をコピー

// // 現在のプレイヤー（初期値は黒）
// let currentPlayer = "B";

// // ゲームが終了したかどうかを示すフラグ
// let gameOver = false;

// // ゲームボードを更新する関数
// function updateBoard() {
//     board.innerHTML = ""; // ボードをクリア

//     for (let i = 0; i < 8; i++) {
//         for (let j = 0; j < 8; j++) {
//             const cell = document.createElement("div");
//             cell.classList.add("cell");
//             cell.dataset.row = i;
//             cell.dataset.col = j;

//             if (boardState[i][j] === "B") {
//                 cell.classList.add("black");
//             } else if (boardState[i][j] === "W") {
//                 cell.classList.add("white");
//             }

//             if (!gameOver) {
//                 cell.addEventListener("click", handleCellClick);
//             }

//             board.appendChild(cell);
//         }
//     }
// }

// // セルをクリックしたときの処理
// function handleCellClick(event) {
//     if (gameOver) return;

//     const row = parseInt(event.target.dataset.row);
//     const col = parseInt(event.target.dataset.col);

//     // クリックしたセルが空白でない場合、無効なクリックとして処理
//     if (boardState[row][col] !== "") return;

//     // 選択したセルに石を置けるかどうかをチェック
//     if (isValidMove(row, col, currentPlayer)) {
//         // 石を置く
//         boardState[row][col] = currentPlayer;

//         // 石を反転させる
//         flipStones(row, col, currentPlayer);

//         // プレイヤーを切り替える
//         currentPlayer = currentPlayer === "B" ? "W" : "B";

//         // ゲームボードを更新
//         updateBoard();
//     }

//     // ゲーム終了条件の判定
//     if (isGameOver()) {
//         gameOver = true;
//         alert("ゲーム終了！");

//         // ここにゲーム終了時の処理を追加
//     }
// }

// // 石を反転させる関数
// function flipStones(row, col, player) {
//     // 各方向の8つの方向に対して、石を反転させる処理を実行
//     const directions = [
//         [-1, -1], [-1, 0], [-1, 1],
//         [0, -1],           [0, 1],
//         [1, -1], [1, 0], [1, 1]
//     ];

//     for (const [dr, dc] of directions) {
//         let r = row + dr;
//         let c = col + dc;
//         let flipped = false;

//         while (isValidPosition(r, c) && boardState[r][c] !== "" && boardState[r][c] !== player) {
//             // 相手プレイヤーの石を挟んでいる場合、石を反転させる
//             boardState[r][c] = player;
//             r += dr;
//             c += dc;
//             flipped = true;
//         }

//         if (flipped) {
//             // 1つ以上の石が反転した場合、選択したセルも石を置く
//             boardState[row][col] = player;
//         }
//     }
// }

// // 石を置けるかどうかを判定する関数
// function isValidMove(row, col, player) {
//     // 空白セルかどうかをチェック
//     if (boardState[row][col] !== "") return false;

//     // 各方向の8つの方向に対して、石を反転させられるかどうかをチェック
//     const directions = [
//         [-1, -1], [-1, 0], [-1, 1],
//         [0, -1],           [0, 1],
//         [1, -1], [1, 0], [1, 1]
//     ];

//     for (const [dr, dc] of directions) {
//         let r = row + dr;
//         let c = col + dc;
//         let foundOpponent = false;

//         while (isValidPosition(r, c)) {
//             if (boardState[r][c] === player) {
//                 if (foundOpponent) {
//                     return true;
//                 } else {
//                     break;
//                 }
//             } else if (boardState[r][c] === "") {
//                 break;
//             } else {
//                 foundOpponent = true;
//             }

//             r += dr;
//             c += dc;
//         }
//     }

//     return false;
// }

// // ゲーム終了条件を判定する関数
// function isGameOver() {
//     // 空白セルがない場合または両プレイヤーが石を置けない場合、ゲーム終了
//     if (!boardState.flat().includes("") || (!canPlayerMove("B") && !canPlayerMove("W"))) {
//         return true;
//     }

//     return false;
// }

// // 指定されたプレイヤーが石を置けるかどうかを判定する関数
// function canPlayerMove(player) {
//     for (let i = 0; i < 8; i++) {
//         for (let j = 0; j < 8; j++) {
//             if (isValidMove(i, j, player)) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// // 指定された行と列が有効な位置かどうかを判定する関数
// function isValidPosition(row, col) {
//     return row >= 0 && row < 8 && col >= 0 && col < 8;
// }

// // ゲームを初期化
// initializeBoard();

// export default utils