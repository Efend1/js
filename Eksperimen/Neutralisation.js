//codewars
function neutralise(s1, s2) {
  var newString = "";
  for (var i = 0; i < s1.length; i++ ) {
    if (s1[i] === "+" && s2[i] === "+") {
      newString += "+";
    }
    if (s1[i] === "-" && s2[i] === "-") {
      newString += "-";
    }
    if (s1[i] === "+" && s2[i] === "-") {
      newString += "0";
    }
    if (s1[i] === "-" && s2[i] === "+") {
      newString += "0";
    }
  }
  return newString;
}
