function solution(table, languages, preference) {
  let job = {};

  for (let i = 0; i < table.length; i++) {
    let tmp = table[i].split(' ');
    let sum = 0;
    console.log(`tmp : ${tmp}`);
    for (let j = 0; j < preference.length; j++) {
      for (let k = 0; k < tmp.length; k++) {
        if ( languages[j] == tmp[k]) {
          console.log(languages[j], preference[j])
          sum += (6 - k) * preference[j];
          break;
        }
      }
    }
    job[tmp[0]] = sum;
  }

  let sortedJob=
  Object.keys(job).sort().reduce(
    (newObj,key) => {
      newObj[key] = job[key];
      return newObj;
    },
    {}
  );
  console.log(sortedJob);
  let max = Math.max(...Object.values(sortedJob));
  let answer = Object.keys(sortedJob).find(key => sortedJob[key] === max);
  return answer;
}
let table = ["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"];
let languages = ["JAVA", "JAVASCRIPT"];
let preference =  [7, 5];
console.log(solution(table, languages, preference));