// Assignment code here


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
            //console.log(passwordLength);
                  
        var upperCase = prompt('Do you want to use UPPERCASE LETTERS?, YES or NO?')
            upperCase = upperCase.toLowerCase();
            //console.log(upperCase);
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
        ){
            //LEFT BLANK TO LET JS GO TO NEXT INSTRUCTIONS PAST ELSE
        }
        else {
            alert('You must answer Y/N');
            writePassword();
        }
                
        var lowerCase = prompt('Do you want to use lowercase letters?, yes or no?')
            lowerCase = lowerCase.toLowerCase();
            //console.log(lowerCase);
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
        ){
            //LEFT BLANK TO LET JS GO TO NEXT INSTRUCTIONS PAST ELSE
        }
        else {
            alert('You must answer y/n');
            writePassword();
        }
                
        var wholeNumbers = prompt('Do you want to use numbers (example 1,2,3)?, yes or no?')
            wholeNumbers = wholeNumbers.toLowerCase();
            //console.log(wholeNumbers);
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
        ){
            //LEFT BLANK TO LET JS GO TO NEXT INSTRUCTIONS PAST ELSE
        }
        else {
            alert('You must answer y/n');
            writePassword();
        }
               
        var specialCharacters = prompt('Do you want to use special characters (example !,@,&?)?, yes or no?')
            specialCharacters = specialCharacters.toLowerCase();
            //console.log(specialCharacters);
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
        ){
            //LEFT BLANK TO LET JS GO TO NEXT INSTRUCTIONS PAST ELSE
        }
        else {
            alert('You must answer y/n');
            writePassword();
        }
                       
        var humanInput = confirm('You chose: ' + '  '+ 'Password Length:'+ passwordLength + ' / '+ 'UPPER CASE:'+ upperCase + ' / '+ 'lower case:'+ lowerCase + ' / ' +'Numbers:'+ wholeNumbers + ' / ' +'Special Characters:'+ specialCharacters + '  ' + ' Is this correct?')
            //console.log(humanInput);
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
            alert("You must choose at least one option!");
            writePassword();
        }
        else {
              // LEAVING BLANK
              // alert("congrats jim")
        }
                  
        var uC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var lC = "abcdefghijklmnopqrstuvwxyz";
        var wN = "0123456789";
        var sC = "!#$%&'()*+,-./:;<=>?@";
                  
        if (
            (upperCase === 'yes' || 
            upperCase === 'y')) {
            var upperCase = 8;
            //console.log(upperCase);
        }
        else {
            var uC = 0;
            //console.log(upperCase);
        }

        if (
            (lowerCase === 'yes' || 
            lowerCase === 'y')) {
            var lowerCase = 8;
            //console.log(lowerCase);
        }
        else {
            var lC = 0;
            //console.log(lowerCase);
        }

        if (
            (wholeNumbers === 'yes' || 
            wholeNumbers === 'y')) {
            var wholeNumbers = 8;
            //console.log(wholeNumbers);
        }
        else {
            var wN = 0;
            //console.log(wholeNumbers);
        }

        if (
            (specialCharacters === 'yes' || 
            specialCharacters === 'y')) {
            var specialCharacters = 8;
            //console.log(specialCharacters);
        }
        else {
              var sC = 0;
              //console.log(specialCharacters);
        }        
                    
              //console.log(passwordLength);

        function generatePassword(passwordLength, uC, lC, wN, sC){
                  
          var charSet = "";
          var pwd = "";
                  
          if (upperCase === 8) {
              charSet = (uC + lC + wN + sC);
          }
          else {}
          if (lowerCase === 8) {
              charSet = (uC + lC + wN + sC);
          }
          else {}
          if (wholeNumbers === 8) {
              charSet = (uC + lC + wN + sC);
          }
          else {}
          if (specialCharacters === 8) {
              charSet = (uC + lC + wN + sC);
          }
          else {}
              //console.log(charSet);                           
          for (var i = 0; i<passwordLength; i++) {
  
              var pwd = pwd + charSet.charAt(Math.floor(Math.random() * 
              Math.floor(charSet.length - 1)));
    
          // Write password to the #password input
              //console.log(pwd);
          var pwdText = document.querySelector("#password");

          pwdText.value = pwd;
          }
                    
          return pwd;
          }
          generatePassword(passwordLength, uC, lC, wN, sC);             
 
    }
    // END OF MAIN FUNCTION

      // Get references to the #generate element
    var generateBtn = document.querySelector("#generate");

      // Add event listener to generate button
    generateBtn.addEventListener("click", function() {
    writePassword();
    });



 /*             
                  var uC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
                  var lC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
                  var wN = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                  var sC = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@']

                  var uC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                  var lC = "abcdefghijklmnopqrstuvwxyz";
                  var wN = "0123456789";
                  var sC = "!#$%&'()*+,-./:;<=>?@";
  */