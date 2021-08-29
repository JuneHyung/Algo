function solution(skill, skill_trees) {
  let answer = skill_trees.length;
  // let trees = [];
  // for (let i = 0; i < answer; i++) {
  //   trees.push([]);
  // }
  // for (let i = 0; i < skill_trees.length; i++) {
  //   let tmp = skill_trees[i].split('');
  //   for (let j = 0; j < tmp.length; j++) {
  //     if (skill.includes(tmp[j])) { trees[i].push(tmp[j]); }
  //   }
  // }
  // console.log(trees);

  let trees = skill_trees
    .map((el) => {
      return el.split('').filter((s) => skill.includes(s));
    })
  console.log(trees);
  for (let i = 0; i < trees.length; i++) {
    for (let j = 0; j < trees[i].length; j++) {
      if (skill[j] != trees[i][j]) {
        answer--;
        break;
      }
    }
  }
  return answer;
}
const skill = "CBD" ;
const skill_trees = ["BACDE", "CBADF", "AECB", "BDA"]
console.log(solution(skill, skill_trees));