function solution(arr1, arr2) {
  let arr1_x = arr1.length;
  let arr1_y = arr1[0].length;
  let arr2_y = arr2[0].length;


  // let answer = new Array(arr1_x).fill(new Array(arr2_y).fill(0));
  let answer = [];
  for (let i = 0; i < arr1_x; i++) {
    answer.push(new Array(arr2_y).fill(0));
  }
  
  // let answer = [];
  // for (let i = 0; i < arr1_x; i++) {
  //   answer.push([]);
  //   for (let j = 0; j < arr2_y; j++) {
  //     answer[i].push(0);
  //   }
  // }
  console.log(answer);

  for (let i = 0; i < arr1_x; i++) {
    for (let j = 0; j < arr2_y; j++) {
      for (let k = 0; k < arr1_y; k++) {
        answer[i][j] = answer[i][j] + arr1[i][k] * arr2[k][j];
      }
    }
  }
  return answer;
}

let arr1 = [[1, 4], [3, 2], [4, 1]];
let arr2 = [[3, 3], [3, 3]];
console.log(solution(arr1, arr2));