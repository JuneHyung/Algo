function solution(msg) {
  let Alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let dictionary = {}
  var answer = [];
  for (let i = 0; i < 26; i++) {
    dictionary[Alpha[i]] = (i + 1);
  }

  let idx = 27;
  let cur = 0;
  while (msg[cur]) {
    let wc = msg[cur];
    if (cur == msg.length - 1) {
      console.log(`이거 실행함. cur : ${cur}`)
      answer.push(dictionary[wc]);
      break;
    }
    for (let i = cur + 1; i < msg.length; i++) {
      wc += msg[i];
      // console.log(`wc : ${wc}`)
      cur++;

      if (dictionary[wc] === undefined) {
        dictionary[wc] = idx;
        let tmp = wc.slice(0,-1);
        // console.log(`tmp : ${tmp}`)
        answer.push(dictionary[tmp]);
        idx++;
        break;
      }
      if (i === msg.length - 1) {
        console.log(`이거 실행함? cur : ${wc}`)
        answer.push(dictionary[wc]);
        cur++;
      }
    }
  }
  // console.log(dictionary);
  return answer;
}
let msg = 	"TOBEORNOTTOBEORTOBEORNOTT";
console.log(solution(msg));