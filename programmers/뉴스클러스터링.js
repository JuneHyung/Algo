function solution(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < str1.length - 1; i++) {
    let tmp = str1.substring(i, i + 2);
    if (/^[a-zA-Z]+$/.test(tmp) && tmp.length == 2){
      arr1.push(tmp);
    }
  }
  for (let i = 0; i < str2.length; i++) {
    let tmp = str2.substring(i, i + 2);
    if (/^[a-zA-Z]+$/.test(tmp)&& tmp.length == 2){
      arr2.push(tmp);
    }
  }
  console.log(arr1);
  console.log(arr2);

  let gyo = [];
  let union = [];
  // union = arr1.concat(arr2);
  for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) >= 0) {
      gyo.push(arr1.splice(arr1.indexOf(arr2[i]), 1))
    }
    union.push(arr2[i])
  }

  for (var i = 0; i < arr1.length; i++) {
    union.push(arr1[i])
  }
  console.log(gyo);
  console.log(union);

  let answer = 0;
  union.length == 0 ? answer = 65536 : answer =parseInt((gyo.length/union.length) * 65536)

  return answer;
}

let str1 = 'aa1+aa2'
let str2 = 'AAAA12'
console.log(solution(	"FRANCE", "french"))
// console.log(solution(str1, str2));
