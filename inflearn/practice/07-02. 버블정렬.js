/**
 * 
 * 버블정렬
 * 인접한 두 수를 비교해서 작은걸 앞으로 변경
 */

const solution = (arr) => { 
  let answer = arr;
  for (let i = 0; i < arr.length-1; i++) { 
    for (j = 0; j < arr.length-i-1; j++) { 
      if (arr[j] > arr[j + 1]) { 
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}
let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));