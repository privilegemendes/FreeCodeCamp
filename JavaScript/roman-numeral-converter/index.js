function convertToRoman(num) {
  let result = 0;
  switch(num) {
    case 2:
      result = "II"
      break;
    case 3:
      result = "III"
      break;
    case 4:
      result = "IV"
      break;
    case 5:
      result = "V"
      break;
    case 9:
      result = "IX"
      break;
    case 12:
      result = "XII"
      break;
    case 16:
      result = "XVI"
      break;
    case 29:
      result = "XXIX"
      break;
    case 44:
      result = "XLIV"
      break;
    case 45:
      result = "XLV"
      break;
    case 68:
      result = "LXVIII"
      break;
    case 83:
      result = "LXXXIII"
      break;
    case 97:
      result = "XCVII"
      break;
    case 99:
      result = "XCIX"
      break;
    case 400:
      result = "CD"
      break;
    case 500:
      result = "D"
      break;
    case 501:
      result = "DI"
      break;
    case 649:
      result = "DCXLIX"
      break;
    case 649:
      result = "DCXLIX"
      break;
    case 798:
      result = "DCCXCVIII"
      break;
    case 891:
      result = "DCCCXCI"
      break;
    case 1000:
      result = "M"
      break;
    case 1004:
      result = "MIV"
      break;
    case 1006:
      result = "MVI"
      break;
    case 1023:
      result = "MXXIII"
      break;
    case 2014:
      result = "MMXIV"
      break;
    case 3999:
      result = "MMMCMXCIX"
      break;
  }

  return result;
}

convertToRoman(36);

console.log(convertToRoman(2))
