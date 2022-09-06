const makeAnagram = (str) => {
  let obj = {};
  for(let i=0;i<str.length;i++){
    obj[str[i]] = 0;
  }
  return obj;
}

const sumAnagram = (obj, str) => {
  for(let i=0;i<str.length;i++){
    obj[str[i]]+=1;
  }
  return obj;
}

const checkAnagram = (obj1, obj2) =>{
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);
  console.log(obj1, obj2)
  if(key1.length !== key2.length) return false;
  else{
    for(let i =0;i<key1.length;i++){
      const t1 = key1[i];
      const t2 = key2[i];
      if(t1 !== t2) return false;
      else if(obj1[t1] != obj2[t2]) return false;
      else return true;
    }
  }
}

function solution(str1, str2){
  const obj1 = sumAnagram(makeAnagram([...str1].sort()), str1);
  const obj2 = sumAnagram(makeAnagram([...str2].sort()), str2);

  const answer = checkAnagram(obj1, obj2) ? "YES" : "NO";
  return answer;
}
// YES
// let a="AbaAeCe";
// let b="baeeACA";

// NO
let a="abaCC";
let b="Caaab";
console.log(solution(a, b));
