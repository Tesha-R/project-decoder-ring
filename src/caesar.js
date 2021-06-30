// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    // If shift is false/equal to 0/less than -25/greater than 25
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    // If encode is not true make it a negative number
    if (!encode) {
      shift *= -1;
    }
    let code = input
      .toLowerCase()
      .split("")
      .map((letter) => {
        let num = letter.charCodeAt(0) + parseInt(shift);
        if (letter.charCodeAt(0) < 97) {
          return letter;
        }
        if (num > 122) {
          num = 96 + (num - 122);
        }
        return String.fromCharCode(num);
      })
      .join("");
    return code;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
