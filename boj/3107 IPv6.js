
// const fs = require('fs')
// const input =fs.readFileSync('/dev/stdin').toString().trim();

// const input = '25:09:1985:aa:091:4846:374:bb'
const input = '::1'

const solution = (address) =>{
  const splitted = address.split(':');
  
  const insertZero = (arr) =>{
    const result = [];
    for(let num of arr){
      if(num.length<4){
        for(let i=num.length;i<4;i++){
          num = '0' + num;
        }
      }
      result.push(num)
    }
    return result;
  }
  
  const getZero = (num) => Array.from({length: num},()=>'0000');

  const spaceIdx = splitted.indexOf('');
  // console.log(spaceIdx)

  if(spaceIdx===-1) return (insertZero(splitted).join(':'));
  else{
    const inserted = insertZero(splitted);
    const sLen = splitted.length;
    const needSpace = 8-sLen;
    // console.log(inserted)
    // console.log(needSpace)

    const zero = getZero(needSpace+1);
    const lt = inserted.slice(0, spaceIdx);
    const rt = inserted.slice(spaceIdx+1);
    // console.log(zero)
    // console.log(lt,rt)
    return ([...lt, ...zero, ...rt].join(':'));
  }

}
console.log(solution(input))