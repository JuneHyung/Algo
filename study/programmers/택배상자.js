/**
 * 택배상자
 * 상자크기는 모두 같고, 1~n번까지 상자까지 번호가 증가하는 순서대로 벨트에 일렬로 놓여 영재에게 전달됨.
 * 벨트는 한 방향으로만 진행이 가능해서 벨트에 놓인 순서대로 상자를 내릴 수 있다.
 * 벨트에 놓인 순서대로 택배상자를 내려 바로 트럭에 실으면 배달 순서와 실려있는 순서가 맞지 않다.
 * 미리 알려준 순서에 맞게 영재가 택배를 실어야 한다.
 * 
 * 맨 앞에 놓인 상자가 현재 트럭에 실어야 하는 순서가 아니면 그 상자를 트럭에 실을 순서가 될 때까지 다른곳에 보관
 * 고객의 물건을 함부로 땅에 둘 수 없어 보조 컨테이너 벨트를 추가로 설치하엿다.
 * 보조벨트는 앞 뒤로 이동이 가능하지ㅏㄴ, 입구외에 다른 면이 막혀 맨 앞의 상자만 뺄 수 있다.
 * 보조 벨트를 이용해도 원하는 순서대로 실지 못하면 더이상 상자를 싣지 않는다.
 * 
 * 몇개의 상자를 실을 수 있는지 리턴
 */
const solution = (order) => {
  const n = order.length;
  const stack = [];
  let idx= 0;
  // let answer= 0;

  // stack의 마지막이 순번 될때까지 push하고, 같아지면 stack에서 pop하고, 다음순번으로 idx증가. (반복)
  for(let i=1;i<=n;i++){
    stack.push(i);
    console.log(stack)
    while(stack.length>0 && stack[stack.length-1]===order[idx]){
      console.log('while: ', i )
      console.log(stack)
      stack.pop();
      idx++;
      console.log(stack)
      // answer++;
    }
    console.log()
  }
  return idx;
}

const order = [4, 3, 1, 2, 5];
console.log(solution(order))