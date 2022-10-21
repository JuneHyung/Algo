/**
 * 
 * 기본점수, 외부 링크 수, 링크점수, 그리고 매칭점수
 * 기본점수 : 텍스트가 등장하는 횟수 (대소문자 무시)
 * 외부링크수 : 다른 외부 페이지로 연결된 링크 개수
 * 링크점수 : 해당 웹페이지로 링크가 걸린 다른 웹페이지의 기본점수 / 외부 링크 수의 총합
 * 매칭점수 : 기본점수 + 링크점수
 * 
 * 한 웹페이지의 url은 HTML의 태그 내에 태그의 값으로 주어진다
 * '
 * 모든 외부 링크는 <a href="https://careers.kakao.com/index">의 형태를 가진다.
 * <a> 내에 다른 attribute가 주어지는 경우는 없으며 항상 href로 연결할 사이트의 url만 포함
 * 
 * 모든 url은 https:// 로만 시작
 * 검색어를 찾을 때, 대소문자 구분은 무시하고 찾는다.
 * 검색어는 단어 단위로 비교하며, 단어와 완전히 일치하는 경우에만 기본 점수에 반영
 * aba => abab, abababab는 일치 X / aba@aba aba 의 경우 기본점수 3점
 * 
 * 매칭점수가 가장 높은것을 리턴
 */

/**
 * 
 * REGEX_WORD : 특수문자제거 
 * REGEX_URL : 외부 링크 URL
 * META_URL : meta 주소
 * 
 */
 function solution(word, pages) {
  word = word.toLowerCase();
  const REGEX_WORD = /[\d|\W]/; // word는 알파벳 대소문자로만 이루어짐. 숫자와 특수문자 제거 : \d(숫자) 거나 \W(non Word)
  const REGEX_URL = /<a href="https:\S*"/g;
  const META_URL = 'meta property';

  /**
   * basic: Number - 기본점수
   * external: Array - 외부링크수
   * idx : Number -idx
   * match: Number - 매칭점수
   */
  const pageInfo = new Map();
  const answer = [];
  for (let i = 0; i < pages.length; i++) {
    // 1-1 page tag 구분
    const page = pages[i];
    const pageArr = page.split('\n');

    // 1-2. page url찾기
    const urlIdx = pageArr.findIndex(el => el.includes(META_URL));
    const pageUrl = pageArr[urlIdx].match(/"https:\S*"/)[0];
    // console.log(pageUrl);

    // 1-3. 기본점수 찾기
    const bodyStart = pageArr.findIndex(el => el.includes("<body>"));
    const bodyEnd = pageArr.findIndex(el => el.includes("</body>"));
    const body = pageArr.slice(bodyStart + 1, bodyEnd);

    const basic = body.flatMap(str => str.toLowerCase().split(REGEX_WORD)).filter(el => el === word).length;

    // 1-4. 외부링크수 찾기
    const external = body.flatMap(str => str.toLowerCase().match(REGEX_URL)).filter(el => el).map(url => url.slice(8, url.length))

    // 1-5. pageInfo 저장
    pageInfo.set(pageUrl, { basic, external, idx: i, match: 0 });
  }
  // console.log(pageInfo);

  // 2. 매칭점수 채우기
  for (let [key, value] of pageInfo) {
    // 2-1. 링크 점수 구하기 
    const linkScore = value.basic / value.external.length;
    for (let externalLink of value.external) {
      if (pageInfo.has(externalLink)) {
        const origin = pageInfo.get(externalLink);
        const calculateScore = origin.match ? origin.match + linkScore : origin.basic + linkScore;
        pageInfo.set(externalLink, { ...origin, match: calculateScore })
      }
    }
  }

  // 3. answer 구하기
  for (let [key, value] of pageInfo) {
    const { basic, idx, match } = value;
    const finalScore = match ? match : basic;
    answer.push([idx, finalScore])
  }

  answer.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]);
  return answer[0][0];
}

// const word = 'blind';
// const pages = [
//   `<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  
//   <meta charset=\"utf-8\">\n  
//   <meta property=\"og:url\" content=\"https://a.com\"/>\n</head>  \n
//   <body>\nBlind Lorem Blind ipsum dolor Blind test sit amet, consectetur adipiscing elit. 
//   \n<a href=\"https://b.com\"> Link to b </a>\n
//   </body>\n</html>`,

//   `<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  
//   <meta charset=\"utf-8\">\n  
//   <meta property=\"og:url\" content=\"https://b.com\"/>\n</head>  \n
//   <body>\nSuspendisse potenti. Vivamus venenatis tellus non turpis bibendum, \n
//   <a href=\"https://a.com\"> Link to a </a>\n
//   blind sed congue urna varius. Suspendisse feugiat nisl ligula, quis malesuada felis hendrerit ut.\n
//   <a href=\"https://c.com\"> Link to c </a>\n</body>\n</html>`,

//   `<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  
//   <meta charset=\"utf-8\">\n  
//   <meta property=\"og:url\" content=\"https://c.com\"/>\n</head>  \n
//   <body>\nUt condimentum urna at felis sodales rutrum. Sed dapibus cursus diam, non interdum nulla tempor nec. Phasellus rutrum enim at orci consectetu blind\n
//   <a href=\"https://a.com\"> Link to a </a>\n
//   </body>\n
//   </html>`];
const word = "Muzi";
const pages = ["<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://careers.kakao.com/interview/list\"/>\n</head>  \n<body>\n<a href=\"https://programmers.co.kr/learn/courses/4673\"></a>#!MuziMuzi!)jayg07con&&\n\n</body>\n</html>", "<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://www.kakaocorp.com\"/>\n</head>  \n<body>\ncon%\tmuzI92apeach&2<a href=\"https://hashcode.co.kr/tos\"></a>\n\n\t^\n</body>\n</html>"]
console.log(solution(word, pages))