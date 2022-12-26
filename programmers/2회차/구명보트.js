const solution = (people, limit) => {
  let answer = 0;
  people.sort((a,b)=>b-a);
  let lt = 0;
  let rt = people.length-1;
  while(lt<rt){
    if(people[lt]+people[rt]<=limit){
      lt++;
      rt--;
    }else{
      lt++;
    }
    if(lt===rt) answer++;
    answer++;
  }

  return answer;
}

const people = [70, 50, 80, 50];
const limit = 100;
console.log(solution(people, limit));