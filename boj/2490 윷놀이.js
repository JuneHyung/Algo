const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

for(let t =0;t<3;t++){
    const line = input.shift().split(' ').map(Number);
    let zero = line.filter(el=>el===0).length;
    switch(zero){
        case 0:
            console.log('E')
            break;
        case 1:
            console.log('A')
            break;
        case 2:
            console.log('B')
            break;
        case 3:
            console.log('C')
            break;
        case 4:
            console.log('D')
            break;
    }
}