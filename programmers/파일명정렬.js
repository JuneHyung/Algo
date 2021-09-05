function solution(files) {
  let answer = [];
  let copyFiles = [];
  const regex = /(\d+)/g; // 숫자가 1개이상 매칭되는 정규식

  // [순서, 헤드, 숫자, 꼬리]
  for (let i = 0; i < files.length; i++) {
    copyFiles.push([i, ...files[i].split(regex)]);
  }
  console.log(copyFiles);
  sortFiles(copyFiles);
  console.log(copyFiles);
  answer = copyFiles.map(el => {
    return el.slice(1).join('');
  })
  return answer
}

function sortFiles(copyFiles) {
  copyFiles.sort((a, b) => {
    // 헤드 대소문자통일
    let headA = a[1].toUpperCase();
    let headB = b[1].toUpperCase();

    if (headA == headB) {
      let numA = parseInt(a[2]);
      let numB = parseInt(b[2]);
      if (numA > numB) return 1;
      else if (numA < numB) return -1;
      else return a[0] - b[0];
    } else if (headA > headB) return 1;
    else return -1;
  })
}
let files = ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"];
console.log(solution(files));