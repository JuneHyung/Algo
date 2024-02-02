/**
 * 억억단을 외우자.
 * s이상 e이하의 수를 억억단에서 갖아 많이 등장한 수를 답해야 한다.
 * e는 5,000,000
 *
 * 1. 8, 9, 10 시간초과
 */

const solution = (e, starts) => {
  const answer = [];
  
  // 약수 개수 구하기
  const makeMeasure = (st, ed) => {
    const result = {};
    for (let i = st; i <= ed; i++) {
      let cnt = 0;
      for (let j = 1; j <= i; j++) {
        if(i%j===0){
          cnt++;
        }
      }
      // console.log(cnt)
      result[i] = cnt;
    }
    return result;
  };

  const min = Math.min(...starts);
  const measure = makeMeasure(min, e);

  // max값인 가장 작은 key return
  const getMeasure = (s, measure) => {
    const sliced = Object.entries(measure).slice(Object.keys(measure).indexOf(s.toString()));
    const max = Math.max(...sliced.map(el=>el[1]));

    for (const [k, v] of sliced) {
      if (v === max ) {
        return Number(k);
      }
    }
  };

  for (let t = 0; t < starts.length; t++) {
    let s = starts[t];
    const target = getMeasure(s, measure);
    answer.push(target)
  }

  return answer;
};
const e = 8;
const starts = [1, 3, 7];
// const starts = [1]
console.log(solution(e, starts));
