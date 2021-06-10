// Assignment Code
var generateBtn = document.querySelector("#generate");

var input;

// Predefined conditions since cannot get form to work

input = [8, true, true, true]


function pass_gen(input) {

  var length;


  if(input[0] >= 8 & input[0] <= 128 & input[1] == true & input[2] == false & input[3] == false) {
    console.log("Case == True")
    length = input[0]
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  else if(input[0] >= 8 & input[0] <= 128 & input[1] == false & input[2] == true & input[3] == false) {
    console.log("Special == True")
    length = input[0]
    charset = "abcdefghijklmnopqrstuvwxyz!@#$%&*"
    retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  else if(input[0] >= 8 & input[0] <= 128 & input[1] == false & input[2] == false & input[3] == true) {
    console.log("Number == True")
    length = input[0]
    charset = "abcdefghijklmnopqrstuvwxyz123456789"
    retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  else if(input[0] >= 8 & input[0] <= 128 & input[1] == true & input[2] == true & input[3] == false) {
    console.log("Case, Special == True")
    length = input[0]
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*"
    retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  else if(input[0] >= 8 & input[0] <= 128 & input[1] == false & input[2] == true & input[3] == true) {
    console.log("Special, Number == True")
    length = input[0]
    charset = "abcdefghijklmnopqrstuvwxyz!@#$%&*123456789"
    retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  else if(input[0] >= 8 & input[0] <= 128 & input[1] == true & input[2] == false & input[3] == true) {
    console.log("Case, Number == True")
    length = input[0]
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"
    retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  else if(input[0] >= 8 & input[0] <= 128 & input[1] == true & input[2] == true & input[3] == true) {
    console.log("Case, Special, Number == True")
    length = input[0]
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%&*"
    retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  else {
    console.log("No condition met")
    length = input[0]
    charset = "abcdefghijklmnopqrstuvwxyz"
    retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }
}



// function generatePassword() {
//   var length = 8,
//       charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*",
//       retVal = "";
//   for (var i = 0, n = charset.length; i < length; ++i) {
//       retVal += charset.charAt(Math.floor(Math.random() * n));
//   }
//   return retVal;
// }


// Write password to the #password input
function writePassword() {
  var password = pass_gen(input);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
