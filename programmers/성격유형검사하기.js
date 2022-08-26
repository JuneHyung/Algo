/* 지표
1번 지표	라이언형(R), 튜브형(T)
2번 지표	콘형(C), 프로도형(F)
3번 지표	제이지형(J), 무지형(M)
4번 지표	어피치형(A), 네오형(N)
*/
/* 점수
1	매우 비동의
2	비동의
3	약간 비동의
4	모르겠음
5	약간 동의
6	동의
7	매우 동의
*/

const checkScore = (survey, choices, score) => { 
  for (let i = 0; i < survey.length; i++) { 
    const bfSurvey = survey[i].split('')[0];
    const afSurvey = survey[i].split('')[1];
    const choice = choices[i];

    if (choice / 4 < 1) score[bfSurvey] += 4 - choice;
    else if (choice / 4 > 0) score[afSurvey] += choice % 4;
    else continue;
  }
}

const makeCharactor = (score) => { 
  const keys = Object.keys(score);
  let result = [];

  for (let i = 0; i < keys.length; i += 2) { 
    const bfKey = keys[i];
    const afKey = keys[i + 1];
    const smaller = bfKey <= afKey ? bfKey : afKey
    if (score[bfKey] > score[afKey]) result.push(bfKey);
    else if (score[bfKey] === score[afKey]) result.push(smaller)
    else result.push(afKey)
  }
  return result;
}
function solution(survey, choices) {
  let score = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  }
  
  checkScore(survey, choices, score);  
  const answer = makeCharactor(score).join('');
  return answer;
}

const survey = ["AN", "CF", "MJ", "RT", "NA",];
const choices = [5, 3, 2, 7, 5, ];
console.log(solution(["TR", "RT", "TR"], [7, 1, 3])) // "TCMA"



// 다른풀이
// function solution(survey, choices) {
//     const MBTI = {};
//     const types = ["RT","CF","JM","AN"];

//     types.forEach((type) =>
//         type.split('').forEach((char) => MBTI[char] = 0)
//     )

//     choices.forEach((choice, index) => {
//         const [disagree, agree] = survey[index];

//         MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
//     });

//     return types.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join("");
// }