// Number that are same when its digits are reverse 
// Normal == reverse  => Palindrome 
//16461 is palindrome number 

function digitCount(num) {
   return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getDigit(num, place) {
   return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

const Palindrome = (num) => {
   let digit = '';
   let max = digitCount(num);
   for (let i = 0; i < max; i++) {
      digit += getDigit(num, i);
   }

   if (num === Number(digit)) {
      return true;
   }
   return false;
}

console.log(Palindrome(11411));

