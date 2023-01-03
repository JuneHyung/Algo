/* H-Index */
// 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index

const solution = (citations) => {
  let answer = 0;

  citations.sort((a, b) => b - a);

  while (answer + 1 <= citations[answer]) {
    answer++;
  }
  return answer;
}

const citations = [3, 0, 6, 1, 5]
console.log(solution(citations))