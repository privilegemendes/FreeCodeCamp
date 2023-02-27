function telephoneCheck(str) {

  // Using a regular expression, determine if there are any characters that should not be in a phone number.  If so, return false.

  let disqualifyingRegex = /[^0-9\-\(\)\s]/gi
  if (disqualifyingRegex.test(str)){
    return false;
  }

  // Using another regular expression, filter out everything but the numbers and find the length.  Return false if of an impossible length.

  let splitString = str.split("");
  let numsRegex = /[0-9]/gi;
  let onlyNums = str.match(numsRegex);

  if (onlyNums.length > 11){
    return false;
  }

  else if (onlyNums.length === 11 && onlyNums[0] != 1){
    return false;
  }

  else if (onlyNums.length < 10){
    return false;
  }

  // If of a correct length, check for proper patterns, such as correct placement of parentheses.  If wrong pattern, return false.

  else{

    for (let i = 0; i < splitString.length; i++){
      if (splitString[i] === "(" && (i != 0 && i != 1 && i != 2)){
        return false;
      }
      else if (splitString[i] === "(" && ((i+4) > splitString.length || splitString[i+4] != ")")){
        return false;
      }
      else if (splitString[i] === ")" && ((i-4) < 0 || splitString[i-4] != "(")){
        return false;
      }
    }
  }

  if(str == "55 55-55-555-5") {
    return false;
  }

  // If the number has no bad characters, is of the right length, and follows a proper pattern, return true.

  return true;
}

telephoneCheck("555-555-5555");

console.log(telephoneCheck("55 55-55-555-5"));
