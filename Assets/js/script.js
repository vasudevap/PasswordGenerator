// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  
  // Objective: return password
  var passwordToReturn = [];
  //
  // what we want to know
  //
  // password size
  var passwordSize = 0;
  // types of characters (lower case, upper case, special, numeric)
  var typesOfCharInPassword=0;
  //
  // what we know
  //
  // length must be between 8-128 characters
  // must have at least 1 type of character
  // using ASCII codes for characters allows us
  // to use math functions to generate the code
  // so we will use ASCII password array until
  // the end
  var passwordASCII=[];
  //
  // Step 1: Password Length
  // how long is the password?
  //
  var keepGoing=true;
  while(keepGoing) {    
    
    //
    // prompt for length of password
    //
    passwordSize = prompt("How long would you like the password to be? (pick a number: at least 8 and no more than 128)");
    
    // validate password length
    // at least 8 and no more than 128
    if ((passwordSize<8)||(passwordSize>128)) {
      if (!confirm("Password must be between 8-128 characters! Try again?")){
        keepGoing = false;
        return;
      }
    } else {
      // alert("Password criteria accepted!");
      keepGoing = false;
    }
  }
  //
  // get more information about what character types
  // the password should be made of
  //
  var useLowerCase = false;
  var useUpperCase = false;
  var useNumbers = false;
  var useSpecial = false;

  keepGoing=true;
  while(keepGoing) {
  
    // prompt for character types to include lowercase
    if(confirm("Use lowercase letters?")){
      useLowerCase = true;
      typesOfCharInPassword++;
      if(passwordASCII.length>0) {
        passwordASCII[passwordASCII.length] = getRandomBetween(97, 122);
      } else {
        passwordASCII[0] = getRandomBetween(97, 122);
      }
    };

    // 3rd prompt for character type to include uppercase
    if(confirm("Use UPPERCASE letters?")){
      useUpperCase = true;
      typesOfCharInPassword++;
      if(passwordASCII.length>0) {
        passwordASCII[passwordASCII.length] = getRandomBetween(65, 90);
      } else {
        passwordASCII[0] = getRandomBetween(65, 90);
      }
    };

    // 4th prompt for character type to include numeric
    if(confirm("Use Numeric letters?")){
      useNumbers = true;
      typesOfCharInPassword++;
      if(passwordASCII.length>0) {
        passwordASCII[passwordASCII.length] = getRandomBetween(48, 57);
      } else {
        passwordASCII[0] = getRandomBetween(48, 57);
      }
    };
    
    // 5th prompt for character to include special characters
    if(confirm("Use Special characters?")){
      // use has selected to use special characters, so add at least one randomly to the array
      useSpecial = true;
      typesOfCharInPassword++;
      if(passwordASCII.length>0) {
        switch (Math.floor(Math.random()*4)) {
          case 0: passwordASCII[passwordASCII.length] = getRandomBetween(32, 47);
          case 1: passwordASCII[passwordASCII.length] = getRandomBetween(58, 64);
          case 2: passwordASCII[passwordASCII.length] = getRandomBetween(91, 96);
          case 3: passwordASCII[passwordASCII.length] = getRandomBetween(123, 126);
        }
      } else {
        switch (Math.floor(Math.random()*4)) {
          case 0: passwordASCII[0] = getRandomBetween(32, 47);
          case 1: passwordASCII[0] = getRandomBetween(58, 64);
          case 2: passwordASCII[0] = getRandomBetween(91, 96);
          case 3: passwordASCII[0] = getRandomBetween(123, 126);
        }
      }
    }
    //
    // validate character selection:
    // at least 1 character type should have been selected
    // if not, then go back to prompt 2 else proceed
    if (!useLowerCase && !useUpperCase && !useNumbers && !useSpecial) {
      if (!confirm("Password must have something!  Please pick 1 or more types of characters.  Try again?")){
        
        // try again
        keepGoing = true;

      } else {
        
        // user selected 'cancel' on the confirm box means doesn't want to try again
        keepGoing = false;
        return;
        // exit the function
      }
    } else {
      //
      // get all the (ASCII) characters that will make up the
      // password and store them in passwordASCII
      // user math.random to detemine how many of each character type
      // will be present in the password and then randomly select from
      // the characters of each type to include in the password array
      //
      while(passwordSize>passwordASCII.length) {
        // add any lower case letters
        if(useLowerCase) {
          if (typesOfCharInPassword=1) {
            passwordASCII[passwordASCII.length] = getRandomBetween(97, 122);
          }
          else {
            var runTimes = math.floor(math.random()*(passwordSize-passwordASCII.length))
            for (var i=0; i<runTimes; i++) {
              passwordASCII[passwordASCII.length] = getRandomBetween(97, 122);
            }
          }
        }
        // add any upper case letters
        if(useUpperCase) {
          if (typesOfCharInPassword=1) {
            passwordASCII[passwordASCII.length] = getRandomBetween(65, 90);
          }
          else {
            var runTimes = math.floor(math.random()*(passwordSize-passwordASCII.length))
            for (var i=0; i<runTimes; i++) {
              passwordASCII[passwordASCII.length] = getRandomBetween(65, 90);
            }
          }
        }
        // add any numbers
        if(useNumbers) {
          if (typesOfCharInPassword=1) {
            passwordASCII[passwordASCII.length] = getRandomBetween(48, 57);
          }
          else {
            var runTimes = math.floor(math.random()*(passwordSize-passwordASCII.length))
            for (var i=0; i<runTimes; i++) {
              passwordASCII[passwordASCII.length] = getRandomBetween(48, 57);
            }
          }
        }
        // add any special characters
        if(useSpecial) {
          if (typesOfCharInPassword=1) {
            passwordASCII[passwordASCII.length] = getRandomBetween(32, 47);
            passwordASCII[passwordASCII.length] = getRandomBetween(58, 64);
            passwordASCII[passwordASCII.length] = getRandomBetween(91, 96);
            passwordASCII[passwordASCII.length] = getRandomBetween(123, 126);
          }
          else {
            var runTimes = math.floor(math.random()*(passwordSize-passwordASCII.length))
            for (var i=0; i<runTimes; i++) {
              passwordASCII[passwordASCII.length] = getRandomBetween(32, 47);
              passwordASCII[passwordASCII.length] = getRandomBetween(58, 64);
              passwordASCII[passwordASCII.length] = getRandomBetween(91, 96);
              passwordASCII[passwordASCII.length] = getRandomBetween(123, 126);
            }
          }
        }
  }
      // alert("Password criteria accepted!");
      keepGoing = false;
      // if at lease one of the characters was selected, then while loop does not repeat
      // passwordASCII array must now have the same number of elements as character types
      // one for each character
    }
  }
  
  //
  // passwordASCII should now have the password
  // in ASCII codes - each element represents an ASCII
  // code that can now be converted to String equivalent
  // determine password and return it to parent function
  //
  for (var i=0; i<passwordASCII.length; i++) {
    passwordToReturn = passwordToReturn + String.fromCharCode(passwordASCII[i]);
  }
  //
  // return the string password
  //
  return passwordToReturn;
  //
  // the end
}
//
// function that takes, as parameters,
// --> the ASCII password array (of length 'l')
// --> the lower limit of ASCII code range to select from
// --> the upper limit of ASCII code range to select from
// and it returns
// --> the ASCII password array (of length 'l+1')
//      containing 1 new entry of a random value: 
//      lower limit <= new entry <= upper limit
//
function getRandomBetween(lowerLimit, upperLimit) {

  return lowerLimit + Math.floor(Math.random()*(upperLimit-lowerLimit));
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

