const getMax = (rectangle) => { 
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < rectangle.length; i++) { 
    max = Math.max(max, Math.max(...rectangle[i]));
  }
  return max*2+1;
}

const setRectangle = (board, rectangle) => { 
  for (let i = 0; i < rectangle.length; i++) { 
    const [x1, y1, x2, y2] = rectangle[i];
    for (let j = y1; j <= y2; j++) { 
      for (let k = x1; k <= x2 ; k++) { 
        if (k === x1 || k === x2 || j === y1 || j === y2) {
          if (board[k][j] === 1) continue;
          else board[k][j] += 1;
        } else { 
          board[k][j] += 2;
        }
      }
    }
  }
  return board
}



const setCharacter = (board, character) => { 
  board[character.x][character.y] = 100;
  return board
}


function solution(rectangle, characterX, characterY, itemX, itemY) {
  var answer = 0;

  const max = getMax(rectangle);
  // const max = 101;

  let board = Array.from({ length: max }, () => new Array(max).fill(0))
  board = setRectangle(board, rectangle.map(el=>el.map(value => value*2)));
  // console.log(board)

  let character = { x: characterX*2, y: characterY*2 }
  let item = { x: itemX*2, y: itemY*2 }
  board = setCharacter(board, character);

  let q = [[character.x, character.y, 0]];
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  
  while(q.length) { 
    let [x, y, cnt] = q.shift();
    if (x===item.x && y===item.y) { 
      answer = cnt/2;
      break;
    }
    for (let k = 0; k < 4; k++) { 
      const nx = x + dx[k];
      const ny = y + dy[k];
      if (nx > 0 && ny > 0 && nx < max && ny < max) { 
        if (board[nx][ny]===1){ 
          board[nx][ny] = 100;
          q.push([nx, ny, cnt+1]);
        }
      }
    }
  }
  return answer;
}





const rectangle = [[1, 1, 7, 4], [3, 2, 5, 5], [4, 3, 6, 9], [2, 6, 8, 8]];
const characterX = 1;
const characterY = 3;
const itemX = 7;
const itemY = 8;
// result = 17
console.log(solution(rectangle, characterX, characterY, itemX, itemY));
