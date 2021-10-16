// 1. 가장 많이 사용된 원소를 찾는다.
// 2. 가장 많이 사용된 원소를 스타수열 부분집합에 1개씩 나눠 구성한다 (교집합이 최소 1개 이상이여야 하므로)
// 3. 구성된 부분집합에 가장 많이 사용된 원소와 서로 다른 수를 최대한 집어 넣는다.
// 4. 구성이 완료된 부분집합의 개수를 구한다.

// 1. 현재 counts[i][1], 
// 즉 현재 사용횟수보다 이전에 만든 스타수열의 개수(= answer)가 크거나 같은 경우 검사할 필요가 없다.
// 우리가 필요한 건 최댓값이기 때문!
// 2. 주어진 배열 a의 길이만큼 내부에서 반복문을 돌면서 다음을 체크한다.
// 2-1. a[j]+1이 undefined 라면 continue
// 2-2. a[j] 와 a[j+1]이 같으면 continue
// 2-3. a[j]와 a[j+1] 모두 현재 원소(counts[i][0])과 다르면 continue
// 3. 위 조건을 모두 통과했다면 스타수열 값 +1(= count++) 하고 다다음 j로 넘어가 탐색
// 4. 내부 반복문이 끝나면 현재 스타수열의 개수(= count)와 기존 스타수열 최댓값(= answer)을 비교하여 최댓값 갱신
function solution(a) {
  var answer = -1;
  // 1. 가장 많이 사용된 원소 찾기, [원소, 사용횟수]
  const star = makeStar(a);
  console.log(star);
  
  for (let i = 0; i < star.length; i++) {
    if (answer >= star[i][1]) continue;
    let count = 0;
    for (let j = 0; j < a.length; j++) {
      if (a[j + 1] == undefined) continue;
      if (a[j] == a[j + 1]) continue;
      if (a[j] != star[i][0] && a[j + 1] != star[i][0]) continue;
      count++;
      j++;
    }
    answer = Math.max(answer, count);
    console.log(`answer : ${answer}`)
  }

  return answer*2;
}
function makeStar(a) {
  const arr = a.reduce((acc, cur) => {
    // console.log(acc);
    // console.log(cur);
    acc[cur] ? acc[cur][1]++ : acc[cur] = [cur, 1];
    return acc;
  }, []).filter(el => el).sort((a, b) => b[1] - a[1]);
  return arr;
}
let a = [0,3,3,0,7,2,0,2,2,0];
console.log(solution(a));