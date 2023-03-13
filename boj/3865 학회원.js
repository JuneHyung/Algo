/**
 * 3865 학회원
 * 학생들이 어떤 학회에 소속되있는지 조사하려 한다.
 * 학회 : 학회원
 * ipc:weissblume,sisobus는 sisobus와 weissblume은 icpc학회원이라는 뜻.
 * 
 * 어떤 학회는 모든 회원이 다른 학회에 소속되 있을 수 있다.
 * 그래서 학회원에 학회이름을 적을 수도있다.
 * 
 * 학회와 회원 정보가 주어졌을 때, 각 하고히의 학회원이 몇명인지 구하는 프로그램 작성.
 * 각 테스트케이스에 대해서 제일 처음으로 주어지는 하고히에 포함되어 있는 회원의 수를 출력
 * 
 * 25% 시간초과 => fristList를 배열에서 set으로 변경하여 해결
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
//   '2',
// 'development:alice,bob,design,eve.',
// 'design:carol,alice.',
// '3',
// 'one:another.',
// 'another:yetanother.',
// 'yetanother:dave.',
// '3',
// 'friends:alice,bob,bestfriends,carol,fran,badcompany.',
// 'bestfriends:eve,alice.',
// 'badcompany:dave,carol.',
// '5',
// 'a:b,c,d,e.',
// 'b:c,d,e,f.',
// 'c:d,e,f,g.',
// 'd:e,f,g,h.',
// 'e:f,g,h,i.',
'4',
'aa:bb.',
'cc:dd,ee.',
'ff:gg.',
'bb:cc.',
'0',
]
const getFirstAcademy = (info) => info[0].split(':')[0];

const getAcademy = (n, info) => { 
  let result = {};
  for (let i = 0; i < n; i++) {
    const splitedInfo = info[i].split(':')
    const acadName = splitedInfo[0];
    const acadMember = splitedInfo[1].split(',');

    for (let j = 0; j < acadMember.length; j++) {
      if (!result.hasOwnProperty(acadName)) {
        result[acadName] = new Set();
        result[acadName].add(acadMember[j])
      }
      else result[acadName].add(acadMember[j])
    }
  }
  return result;
}

const getAnswer = (academy, firstList) => { 
  let answer = 0;
  while (true) { 
    let flag = false;
    for (const mem of firstList) { 
      if (academy.hasOwnProperty(mem)) {
        firstList.delete(mem)
        for(const member of academy[mem]) firstList.add(member)
        flag = true;
      }
    }
    if (!flag) {
      answer = firstList.size;
      break;
    }
  }
  return answer;
}

const solution = (n, info) => { 
  const firstAcademy = getFirstAcademy(info);
  const academy = getAcademy(n, info);
  const firstList = academy[firstAcademy]
  const answer = getAnswer(academy, firstList);
  return answer;
}


while (true) { 
  const N = Number(input.shift())
  if (N === 0) break;
  const INFO = [];
  for (let i = 0; i < N; i++) INFO.push(input.shift().replace(/\./,''))
  console.log(solution(N, INFO));
}
