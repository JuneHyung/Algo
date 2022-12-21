const checkWord = (w1, w2) =>{
  let cnt = 0;
  for(let i=0;i<w1.length;i++){
    if(w1[i]!==w2[i]) cnt++;
  }
  return cnt;
}

const solution =(begin, target, words) => {
  let answer = false;
  const used = {};
  const result = [];
  const stack = [begin];
  used[begin] = true;
  while(stack.length!==0){
    const cur = stack.pop();
    if(cur===target){
      answer = true;
      break;
    }
    
    result.push(cur);

    words.forEach(word => {
      if(!used[word]&&checkWord(cur, word)===1){
        stack.push(word);
        used[word] = true;
      }
    })
  }

  return answer ? result.length : 0

}


const begin="hit";
const target="cog";
// const words = ["hot", "dot", "dog", "lot", "log", "cog"];
const words = ["hot", "dot", "dog", "lot", "log"];

console.log(solution(begin, target, words))