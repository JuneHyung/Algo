const solution = (s) => { 
	let stack = [];
	const LEFT = '(', RIGHT=')'
	for (x of s) { 
		if (x === RIGHT) {
			while (stack.pop() !== LEFT);
		} else stack.push(x);
	}
	console.log(stack)
	return stack.join('');
}
let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));