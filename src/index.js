module.exports = function check(str, bracketsConfig) {
  // your solution
  var brOpen = [];
  for (let i = 0; i < str.length; i++) {
  	for (let j = 0; j < bracketsConfig.length; j++) {
  		if (bracketsConfig[j][0] === brOpen[brOpen.length - 1] && str[i] === bracketsConfig[j][1]) {
  			brOpen.pop();
  		} else if (str[i] === bracketsConfig[j][0]) {
  			brOpen.push(str[i]);
  		}  
  	}
  }
  if (str.length % 2 !== 0) {
  	return false;
  } else return (brOpen.length)? false: true;
}