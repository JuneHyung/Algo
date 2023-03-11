/**
 * 22859 HTML 파싱
 * main으로 시작해 main으로 닫기.
 * title 속성의 값은 각 문단의 제목.
 * title_name별로 제목을 출력
 * 그 아래에 p태그안의 문장을 하나씩 출력
 * 1. p태그 안에 문장에서 태그가 있다면 태그를 삭제.
 * 2. 문장의 시작과 끝에 공백을 삭제
 * 3. 공백이 2개이상 붙어있으면 1개로 바꿈.
 * 4. 여는태그와 닫는 태그 삭제.
 * 
 * 문서 규칙
 * 1. <main>으로 시작해 </main>으로 끝남. 
 * 여는 태그가 있으면 닫는 태그가 항상 쌍으로 존재.
 * 2. 문단 구분 시 div만 사용됨.
 * 제목의 시작과 끝에 공백X
 * 3. div의 속성에 title이 반드시 존재한다.
 * 4. p태그 사이에는 main, div, p를 제외한 다른 태그들이 존재할 수 있다.
 * 5. 문서는 한줄로 주어짐.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = 
  `<main><div title="title_name_1"><p>paragraph  1</p><p>paragraph 2 <i>Italic Tag</i> <br > </p><p>paragraph 3 <b>Bold Tag</b> end.</p></div><div title="title_name_2"><p>paragraph 4</p><p>paragraph 5 <i>Italic Tag 2</i> <br > end.</p></div></main>`

  // str = <div title="title_name_1">
const getTitle = (str) => {
  // console.log(str);
  let isTitle = false; // "로 제목의 시작을 알림.
  let result = '';
  for (let x of str) { 
    if (x !== '"' && isTitle) result += x;
    if (x === '"' && !isTitle) { // 제목시작
      isTitle = true;
    } else if (x === '"' && isTitle) {  // 제목 종료
      isTitle = false;
      break;
    }
  }
  return result;
}

const deleteTags = (element) => { 
  let str = "";
  let prev = "";
  let isTag = false; // tag인지 아닌지.
  for (let i = 0; i < element.length; i++) { 
    if (element[i] === "<" && !isTag) {
      isTag = true;
      continue;
    } else if (element[i] === '>' && isTag) {
      isTag = false;
      continue;
    } else if (!isTag) { 
      if (prev === " " && prev === element[i]) continue;
      str += element[i];
      prev = element[i];
    }
  }
  return str;
}

const solution = (htmlString) => { 
  const answer = [];
  const divTags = htmlString.match(/<div(.*?)>(.*?)<\/div>/g);
  // console.log(divTags)
  for (let div of divTags) { 
    const pTags = div.split(/<p(.*?)>(.*?)<\/p>/g);
    // console.log(pTags);
    const title = getTitle(pTags[0]);
    const result = [];
    for (let i = 1; i < pTags.length - 1; i++) { //<p> ~ </p>까지
      let p = pTags[i].trim();
      if (!p.length) continue;
      p = deleteTags(p);
      result.push(p)
    }
    answer.push([`title : ${title}`, result.join('\n')])
  }
  
  return answer.map(v=>v.join('\n')).join('\n')
}


console.log(solution(input))