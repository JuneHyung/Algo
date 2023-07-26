/**
 * 폰켓몬
 * N마리 폰켓몬 중 N/2마리를 델꼬가도 좋다함.
 * 종류에따라 번호를 붙인다. 따라서 같은 종류 폰켓몬은 같은 번호를 가짐.
 * 최대한 다양한 종류의 폰켓몬을 포함해 N/2마리 선택하려한다.
 * 종류 번호가 담긴 nums가 주어지면 가장 많은 종류의 폰켓몬을 택하는 방법을 찾아 종류 개수를 리턴
 * 
 * nums길이는 1~10,000 항상 짝수로 주어진다.
 * 종류번호는 1~200,000의 자연수.
 * 가장 많은 종류의 폰켓몬을 선택하는 방법이 여러 가지인 경우에도, 선택할 수 있는 폰켓몬 종류 개수의 최댓값 하나만 return 
 */

const solution = (nums) =>{
  const ponkemonType = new Set(nums);
  const typeCnt = ponkemonType.size;
  const limit = nums.length/2;
  // console.log(ponkemonType)
  const answer = limit >= typeCnt ? typeCnt : limit;
  return answer;
}

// const nums = [3,1,2,3]
// const nums = [3,3,3,2,2,4]
const nums = [3,3,3,2,2,2]

console.log(solution(nums));