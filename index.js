function getCombinations(inputArr) {
	if (inputArr.length == 1) {
	  return inputArr[0];
	} else {
	  let res = [];
	  let recur = getCombinations(inputArr.slice(1));
	  for (let i = 0; i < recur.length; i++) {
		for (let j = 0; j < inputArr[0].length; j++) {
			if(Array.isArray(recur[i])) {
				res.push([inputArr[0][j], ...recur[i]]);
			} else {
				res.push([inputArr[0][j], recur[i]]);
			}
			
		}
	  }
	  return res;
	}
  
  }

// [0], [0, 1], [0],[0, 1, 2]
// [0], [0, 2, 8, 9, 10], [0, 1],[0, 2, 3]
// [1, 2, 3], [4, 5]

let dummyData = [[0], [0, 1], [0],[0, 1, 2]];

console.log(getCombinations(dummyData));
