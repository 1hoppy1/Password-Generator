// Assignment code here

/*
!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
*/


              function writePassword() {
                
                var passwordLength = prompt('What length do you want your password? 8 - 128 Characters?');
                  passwordLength = passwordLength.toLowerCase();
                  if (passwordLength >= 8 && passwordLength <= 128) {
                    //LEFT BLANK TO LET JS GO TO NEXT INSTRUCTIONS PAST ELSE                    
                  }
                  else {
                    writePassword();
                  }
                  var passwordLength = Math.floor(passwordLength);
                  console.log(passwordLength);
                  
                  var upperCase = prompt('Do you want to use UPPERCASE LETTERS?, YES or NO?')
                  upperCase = upperCase.toLowerCase();
                  console.log(upperCase);
                  if (
                    upperCase === 'YES' ||
                    upperCase === 'Yes' ||
                    upperCase === 'yes' ||
                    upperCase === 'Y' ||
                    upperCase === 'y' ||
                    upperCase === 'NO' ||
                    upperCase === 'No' ||
                    upperCase === 'no' ||
                    upperCase === 'N' ||
                    upperCase === 'n'
                    )
                    {
                      //LEFT BLANK TO LET JS GO TO NEXT INSTRUCTIONS PAST ELSE
                    }
                  else {
                    alert('You must answer Y/N');
                    writePassword();
                  }
                
                  var lowerCase = prompt('Do you want to use lowercase letters?, yes or no?')
                  lowerCase = lowerCase.toLowerCase();
                  console.log(lowerCase);
                  if (
                    lowerCase === 'YES' ||
                    lowerCase === 'Yes' ||
                    lowerCase === 'yes' ||
                    lowerCase === 'Y' ||
                    lowerCase === 'y' ||
                    lowerCase === 'NO' ||
                    lowerCase === 'No' ||
                    lowerCase === 'no' ||
                    lowerCase === 'N' ||
                    lowerCase === 'n'
                    )
                    {
                      //LEFT BLANK TO LET JS GO TO NEXT INSTRUCTIONS PAST ELSE
                    }
                  else {
                    alert('You must answer y/n');
                    writePassword();
                  }
                
                  var wholeNumbers = prompt('Do you want to use numbers "(example 1,2,3?)"?, yes or no?')
                  wholeNumbers = wholeNumbers.toLowerCase();
                  console.log(wholeNumbers);
                  if (
                    wholeNumbers === 'YES' ||
                    wholeNumbers === 'Yes' ||
                    wholeNumbers === 'yes' ||
                    wholeNumbers === 'Y' ||
                    wholeNumbers === 'y' ||
                    wholeNumbers === 'NO' ||
                    wholeNumbers === 'No' ||
                    wholeNumbers === 'no' ||
                    wholeNumbers === 'N' ||
                    wholeNumbers === 'n'
                  )
                    {
                      //LEFT BLANK TO LET JS GO TO NEXT INSTRUCTIONS PAST ELSE
                    }
                  else {
                    alert('You must answer y/n');
                    writePassword();
                  }
               
                  var specialCharacters = prompt('Do you want to use special characters "(example !,@,&?)"?, yes or no?')
                  specialCharacters = specialCharacters.toLowerCase();
                  console.log(specialCharacters);
                  if (
                    specialCharacters === 'YES' ||
                    specialCharacters === 'Yes' ||
                    specialCharacters === 'yes' ||
                    specialCharacters === 'Y' ||
                    specialCharacters === 'y' ||
                    specialCharacters === 'NO' ||
                    specialCharacters === 'No' ||
                    specialCharacters === 'no' ||
                    specialCharacters === 'N' ||
                    specialCharacters === 'n'
                  )
                    {
                      //LEFT BLANK TO LET JS GO TO NEXT INSTRUCTIONS PAST ELSE
                    }
                  else {
                    alert('You must answer y/n');
                    writePassword();
                  }
                       
                var humanInput = confirm('You chose: ' + '  '+ 'Password Length:'+ passwordLength + ' / '+ 'UPPER CASE:'+ upperCase + ' / '+ 'lower case:'+ lowerCase + ' / ' +'Numbers:'+ wholeNumbers + ' / ' +'Special Characters:'+ specialCharacters + '  ' + ' Is this correct?')
                  console.log(humanInput);
                  if (humanInput) {
                  //LEFT BLANK TO LET JS GO TO NEXT INSTRUCTIONS PAST ELSE                   
                  }
                  else {
                    writePassword();
                  }

                  if (
                    (upperCase === 'no' || 
                    upperCase === 'n') &&
                    (lowerCase === 'no' || 
                    lowerCase === 'n') &&
                    (wholeNumbers === 'no' ||
                    wholeNumbers === 'n') && 
                    (specialCharacters === 'no' ||
                    specialCharacters === 'n')) {
                    alert("You must chose at least one option!");
                    writePassword();
                  }
                  else {
                    // INSERT CODE GENERATOR FUNCTION HERE
                    alert("congrats jim")
                  }







console.log(passwordLength);
console.log(upperCase);
console.log(lowerCase);
console.log(wholeNumbers);
console.log(specialCharacters);




              }





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  writePassword();
});


/*// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}*/




