// 1. with built-in functions

function reverseString(str){
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  
  return joinArray;
}

reverseString("hello");
// versi singkat no 1
function balikString(str){
  return str.split("").reverse().join("");
}

console.log(balikString("hello world"));

// 2. with loop
function stringReverse(str){
  let newString = "";
  
  for (let i = str.length - 1; i >= 0; i--) {newString +=
    str[i];
  }
  return newString;
}

console.log(stringReverse("javascript"));

// 3.With Recursion
function stringBalik(str) {
  if (str === "")
    return "";
  else
    return stringBalik(str.substr(1)) + str.charAt(0);
}
console.log(stringBalik("hello"));