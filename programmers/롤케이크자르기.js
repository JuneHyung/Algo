/**
 * 롤케이크 자르기
 * Set으로 풀이시 시간초과
 * 루프 돌다가 처음 본 요소(visited = false)라면 내껄 1 늘리고, 
 * duplicated가 0이 되면, 동생껄 1 줄여주면 되겠습니다.
 */
 function solution(topping) {
  let answer = 0;
  const toppingType = new Map();
  for (const tType of topping) {
    if (toppingType.has(tType)) {
      const value = toppingType.get(tType);
      value.duplicated++;
      toppingType.set(tType, value)
    } else {
      toppingType.set(tType, { duplicated: 1, visited: false });
    }
  }
  console.log(toppingType);
  let [A, B] = [0, toppingType.size]
  for (let i = 0; i < topping.length; i++) {
    const value = toppingType.get(topping[i]);
    if (value.duplicated >= 1) {
      value.duplicated--;
      if (value.duplicated === 0) B--;
    }
    if (!value.visited) { value.visited = true; A++ }
    toppingType.set(topping[i], value);
    if (A === B) answer++;
  }
  return answer;
}

const topping = [1, 2, 1, 3, 1, 4, 1, 2];
console.log(solution(topping));