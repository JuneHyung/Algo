/**
 * 
 * LRU (Least Recently Used)
 */
// const solution = (size, arr) => {
//   let answer = new Array(size).fill(0);
//   arr.forEach(el=> {
//     let pos = -1;
//     for (let i = 0; i < size; i++) if (el === answer[i]) pos = i;
//     if (pos === -1) {
//       for (let i = size - 1; i >= 1; i--) {
//         answer[i] = answer[i - 1];
//       }
//     }
//     else {
//       for (let i = pos; i >= 1; i--) {
//         answer[i] = answer[i - 1];
//       }
//     }
//     answer[0] = el
//   })
//   return answer;
// }

const solution = (size, arr) => {
  let answer = new Array(size).fill(0);
  arr.forEach(el=> { 
    let pos = -1;
    for (let i = 0; i < size; i++) if (el === answer[i]) pos = i;
    if (pos === -1) { 
      answer.unshift(el);
      if (answer.length > size) answer.pop();
    }
    else {
      answer.splice(pos, 1);
      answer.unshift(el);
    }
    answer[0] = el
  })
  return answer;
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
