// A = 65  Z = 90

// a = 97   z = 122


// Letter from A to Z 

// for(let i=65;i<=90;i++){
//     console.log(String.fromCharCode(i));
// }

// // letter from a to z


// for(let i=97;i<=122;i++){
//     console.log(String.fromCharCode(i));
// }

// let atoz = Array(26).fill(0).map((elmnt,index)=>String.fromCharCode(97+index));
// console.log(atoz);


function firstNonRepeatingCharacter(string) {
  // Write your code here
   //const atoz  = Array(26).fill(0).map((elmnt,index) => String.fromCharCode(97+index))
   const character = Array.from(string);

  const charRepeatIndex = {};
  
  for(let i=0;i<character.length;i++){
    if(character[i] in charRepeatIndex){
      charRepeatIndex[character[i]][0]++;
    }else{
      charRepeatIndex[character[i]] = [1,i] // [count ,index]
    }
  }  

console.log(charRepeatIndex)

for(let charIndex in charRepeatIndex){
  if(charRepeatIndex[charIndex][0]==1){
    return charRepeatIndex[charIndex][1];
  }
}
  
  return -1;
}

// console.log(firstNonRepeatingCharacter('faadabcbbebdf'))


console.log(String.fromCharCode(122))