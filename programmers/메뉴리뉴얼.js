function solution(orders, course) {
  let answer = [];
  
  for (let c = 0; c < course.length; c++) {
    answers.splice(0);

    // 사용한 알파벳 담기
    orders.forEach(el => {
      let Alpha = []
      Alpha.push(...el.split(''));
      dfs(Alpha, course[c], 0)
    })

    // check 만들기
    let check = new Set
    answers.forEach(el => {
      check[el.sort().join('')] = 0;
    })

    let keys = Object.keys(check);
    for (let i = 0; i < keys.length; i++) {
      for (let j = 0; j < orders.length; j++) {
        for (let k = 0; k < keys[i].length; k++) {
          if (orders[j].indexOf(keys[i][k]) == -1) break;
          if (k == keys[i].length - 1 && orders[j].indexOf(keys[i][k])!=-1) {
            check[keys[i]]++;
          }
        } // k
      } // j
    } // i

    let max = Math.max(...Object.values(check))

    keys.forEach((el) => {
      if (max >= 2 && check[el] == max) answer.push(el);
    })
  } // c
  return answer.sort();
}

let answers = [];
function dfs(Alpha, num, depth, arr = []) {
  if (num == depth) answers.push([...arr])
  else {
    for (let i = 0; i < Alpha.length; i++){
      if (arr.indexOf(Alpha[i]) == -1) {
        arr.push(Alpha[i]);
        dfs(Alpha.slice(i), num, depth + 1, arr);
        arr.pop();
      }
    }
  }
}
let orders =	["XYZ", "XWY", "WXA"];
let course = [2, 3, 4];
console.log(solution(orders, course));