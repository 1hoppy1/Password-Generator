// Assignment code here


/*
!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
*/




function passwordOptions() {
                
    var passwordLength = prompt('What length do you want your password? 8 - 128 Characters?');
      passwordLength = passwordLength.toLowerCase();
      console.log(passwordLength);

    var upperCase = prompt('Do you want to use UPPERCASE LETTERS?, yes or no?')
      upperCase = upperCase.toLowerCase();
      console.log(upperCase);

    var lowerCase = prompt('Do you want to use lowercase letters?, yes or no?')
      lowerCase = lowerCase.toLowerCase();
      console.log(lowerCase);

    var wholeNumbers = prompt('Do you want to use numbers "(example 1,2,3?)"?, yes or no?')
      wholeNumbers = wholeNumbers.toLowerCase();
      console.log(wholeNumbers);

    var specialCharacters = prompt('Do you want to use special characters "(example !,@,&?)"?, yes or no?')
      specialCharacters = specialCharacters.toLowerCase();
      console.log(specialCharacters);

    var humanInput = prompt('You chose: ' + '  '+ 'Password Length:'+ passwordLength + ' / '+ 'UPPER CASE:'+ upperCase + ' / '+ 'lower case:'+ lowerCase + ' / ' +'Numbers:'+ wholeNumbers + ' / ' +'Special Characters:'+ specialCharacters + '  ' + ' Is this correct?')
      humanInput = humanInput.toLowerCase();
      console.log(specialCharacters);
  }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
