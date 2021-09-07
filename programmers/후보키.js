function solution(relation) {
  var answer = 0;
  let combList = [];
  for (let i = 0; i < relation[0].length; i++) {
    combList.push(i);
  }
  for (let i = 1; i <= combList.length; i++) {
    makeCombi(combList, i, 0);
  }
  // console.log(combi);
  
  let keyList = [];
  for (let i = 0; i < combi.length; i++) {
    checkCombi(keyList, combi[i], relation);
  }
  answer = keyList.length;
  return answer;
}
function checkIsUnique(key, relation, arr=[]) {
  let isUnique = true;
  for (let i = 0; i < relation.length; i++) {
    let findEl = arr.find(el => {
      let flag = true;
      for (let j = 0; j < key.length; j++) {
        if (el[key[j]] != relation[i][key[j]]) flag = false;
      }
      return flag;
    })
    console.log(findEl);
    console.log(arr);
    if (findEl !== undefined) isUnique = false;
    else arr.push(relation[i]);
    console.log(isUnique);
  }
  return isUnique;
}
function checkIsMin(keyList, key) {
  let isMin = true;
  for (let i = 0; i < keyList.length; i++) {
    let prev = keyList[i];
    for (let j = 0; j < key.length; j++){
      prev = prev.filter(el => el !== key[j]);
    }
    if (prev.length == 0) isMin = false;
  }
  return isMin;
}
function checkCombi(keyList, key, relation) {
  // 최소성 : 이미 등록된 후보키 배열을 포함하는 배열이 하나라도 존재하면 x
  let isMin = checkIsMin(keyList, key) ;
   // 등록한 후보키가 하나도 없으면 최소성이 항상 만족되므로 패스
  // if (keyList.length != 0 && !isMin) return;
    // 유일성 : 키로 사용했을때 하나라도 중복되면 x
  let isUnique = checkIsUnique(key, relation);
  if (isMin && isUnique) keyList.push(key);
}

let combi = [];
function makeCombi(comb, n, depth, arr = []) {
  if (n == depth) combi.push([...arr]);
  else {
    for (let i = 0; i < comb.length; i++) {
        arr.push(comb[i]);
        makeCombi(comb.slice(i+1), n, depth + 1, arr);
        arr.pop();
    }
  }
}
let relation = [["100", "ryan", "music", "2"], ["200", "apeach", "math", "2"], ["300", "tube", "computer", "3"], ["400", "con", "computer", "4"], ["500", "muzi", "music", "3"], ["600", "apeach", "music", "2"]]
console.log(solution(relation));