/**
 * 혼자 놀기의 달인
 * 카드가 총 100장 1~100이 있다.
 * 2~100이하 자연수 하나를 정해 그 수보다 작거나 같은 숫자 카드들을 준비하고, 준비한 카드수만큼 작은 상자를 준비하면 게임 레디
 *
 * 준비된 상자에 카드를 한장씩 넣고, 상자를 무작위로 섞어 일렬로 나열.
 * 나열된 순서에 따라 1번부터 번호를 붙임
 *
 * 임의의 상자를 선택해 선택한 상자 안의 숫자카드 확인.
 * 확인한 카드의 번호의 상자를 확인. => 열어야 하는 상자가 이미 열렸을때 까지. => 이게 1그룹.
 * 1번상자그룹을 제외하고 상자가 없으면 게임종료 - 0점
 * 그렇지 않으면, 다시 임의의 상자 하나를 골라 같은 방식으로 이미 열렸을때 가지 상자깡
 * 1번그룹과 2번그룹의 개수를 곱한 값이 점수.
 * 이 게임에서 얻을 수 있는 최고 점수 구하기.
 */

const solution = (cards) => {
  // cards.unshift(0);
  // console.log(cards)
  const n = cards.length;
  const visited = Array.from({ length: n }, () => false);
  const group = [];
  const check = (idx, members) => {
    const nextIdx = cards[idx]-1;
    if(!visited[nextIdx]){
      visited[nextIdx] = true;
      return check(nextIdx, members+1);
    }
    return members
  }

  for(let i=0;i<n;i++){
    if(!visited[i]){
      visited[i] = true;
      const members = check(i, 1);
      group.push(members)
    }    
  }
  group.sort((a,b)=> b-a);
  return group.length<2 ? 0 : group[0] * group[1];
};

const cards = [8, 6, 3, 7, 2, 5, 1, 4];
console.log(solution(cards));
