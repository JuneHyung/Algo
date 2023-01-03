/* 베스트 앨범 */
/**
 * 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시
 * 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
 * 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
 * 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
 * 
 * genres[i]는 고유번호가 i인 노래의 장르입니다.
 * plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
 * genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
 * 장르 종류는 100개 미만입니다.
 * 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
 * 모든 장르는 재생된 횟수가 다릅니다.
 */

const solution = (genres, plays) => {
  var answer = [];
  const genresGraph = new Map();
  const playsGraph = new Map();
  for (let i = 0; i < genres.length; i++) {
    genresGraph.set(i, genres[i])
    playsGraph.set(i, plays[i]);
  }

  const result = {};
  for (let i = 0; i < genresGraph.size; i++) {
    if (result.hasOwnProperty(genresGraph.get(i))) {
      result[genresGraph.get(i)].push([i, playsGraph.get(i)]);
    } else {
      result[genresGraph.get(i)] = [[i, playsGraph.get(i)]];
    }
  }

  const keys = Object.keys(result);
  for (let i = 0; i < keys.length; i++) {
    result[keys[i]].sort((a, b) => b[1] - a[1]);
  }

  const sum = {}
  for (let i = 0; i < keys.length; i++) {
    sum[keys[i]] = result[keys[i]].reduce((acc, cur) => acc + cur[1], 0);
  }

  const order = Object.entries(sum).sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < order.length; i++) {
    const [key, val] = order[i];
    answer.push(...result[key].splice(0, 2))
  }

  answer = answer.map(el => el[0])
  return answer;
}

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];
console.log(solution(genres, plays));