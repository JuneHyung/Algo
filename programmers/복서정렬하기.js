function solution(weights, head2head) {
  let map = []
  for (let i = 0; i < weights.length; i++) {
    let tmp = head2head[i];
    map.push([]);
    for (let j = 0; j < tmp.length; j++) {
      map[i].push(tmp[j])
    }
  }

  let total = [];
  let heavyWin = new Array(weights.length).fill(0);
  for (let i = 0; i < map.length; i++) {
    let all = 0;
    let win = 0;
    for (let j = 0; j < map[i].length; j++) {
      switch (map[i][j]) {
        case 'N': break;
        case 'W':
          all++;
          win++;
          if (weights[i] < weights[j]) heavyWin[i]++;
          break;
        case 'L': all++; break;
      }
    }
    console.log(`all : ${all}, win:${win}`)
    let percent = (win / all);
    // console.log(isNaN(percent))
    isNaN(percent) ? percent = 0 : percent;
    total.push([i,weights[i], heavyWin[i], percent]);
  }
  console.log(total);
  total.sort((a, b) => {
    if (b[3] == a[3]) {
      if (b[2] == a[2]) {
        if (b[1] == a[1]) {
          if (a[0] > b[0]) return 1;
          else return -1;
        } else if (b[1] > a[1]) return 1;
        else return -1;
      } else if (b[2] > a[2]) return 1;
      else return -1;
    } else if (b[3] > a[3]) return 1;
    else return -1;
  })
  console.log(total);
 
  var answer = [];
  total.forEach(el => {
    answer.push(el[0] + 1);
  });

  return answer;
}
let weights = [60, 70, 60];
let head2head = ["NNN", "NNN", "NNN"];
console.log(solution(weights, head2head));