// function findThreeLargestNumbers(array) {
//     // Write your code here.
//     const result = [];
//     for(let i=0;i<3;i++){
//       let big=array[0];
//       let pos;
//       for(let j=1;j<array.length;j++){
//         if(big<=array[j]){
//           big=array[j];
//           pos = j;
//         }
//       }
//       array.splice(pos,1);
//       result.push(big);
//     }
//     result.sort((a,b)=> a-b);
//     return result;
//   }

const { ConsoleMessage } = require("puppeteer");



// console.log(findThreeLargestNumbers([10,5,9,10,12]))




// const digit = Math.floor(Math.abs(123)/Math.pow(10,1/**place */))%10;



// console.log(digit);



// function isPalindrome(string) {
//     // Write your code here.
//     const arrayString = Array.from(string).reverse();
//     let str = '';
//     for (let i = 0; i < arrayString.length; i++) {
//         str += arrayString[i];
//     }

//     if (str == string) return true;
//     return false;
// }


// console.log(isPalindrome('ab'));



// print string from a to b



// for(let i=0;i<)



// const array = [
//     [1, 2, 3, 4],
//     [10, 11, 12, 5],
//     [9, 8, 7, 6]
// ];

// function arrayOfProducts(array) {
//     // Write your code here.
//     let multiple = 1;
//     for(let i=0;i<array.length;i++){
//       for(let j=0;j<array.length;j++){
//         if(j!=i){
//           multiple = multiple * array[j];
//         }
//       }
//       array[i] = multiple;
//       multiple=1;
//     }
//     return array;
//   }


//   console.log(arrayOfProducts([5,1,4,2]));



// function test(num,val){
//   if(num == 0) return;
//   test(num-1,val+1);
//   console.log(val);

// }

// test(5,1);


// const a=[1,2];
// const b=[];

// a.pop();
// console.log(b);

/** 
function test(num){
  if(num >= 3) return;
  test(++num);
  console.log(num); 
  test(num);
  console.log(num);
}

test(0);

**/


// function test(num){
//     if(num==0) return;
//      test(num+1);
//      console.log(num);
//      test(num);
//      console.log(num);
// }
// test(0)


class Test{
  constructor(){
    this.array = [];
  }
}


// function test(){
//   const array = []; 
//    this.push = function(value){
//     array.push(value)
//    }
//    this.print = function(){
//     console.log(array);
//    }
// }

function reverseWordsInString(string) {

const stringArray = string.split(' ');
console.log(stringArray);
const a =stringArray.map((elmnt)=>{
  if(elmnt==''){
    return ' ';
  }
  return elmnt;
});

console.log(a)

  // Write your code here.
  //const stringArray = string.split(' ');
 //const stringArray = Array.from(string);
 let result = ''; 
  console.log(stringArray);
  const mid  =  Math.floor((stringArray.length-1)/2);

  // for(let i=0;i<mid;i++){
  //   [stringArray[i],stringArray[stringArray.length-1-i]]=[stringArray[stringArray.length-1-i],stringArray[i]];
  // }
   // for(let string){
   //   result+=char+' ';
   // }
  
for(let i=a.length-1;i>=0;i--){
  result+=a[i]+' ';
}
 //return result.trim();
 console.log(result.trim());
}



//reverseWordsInString("AlgoExpert is the best!");

// let str ='';
// str+='h';
// str+=' ';
// str+=' ';
// str+=' ';
// str+=' ';
// str+=' ';
// str+=' ';
// str+='5';
// console.log(str);




// console.log(Array.from("whitespace    4"));



// const str = "AlgoExpert is the best!"; //4 whitespace
// const nstr = str.split(" ");
// console.log(nstr);

// const mapstr = nstr.map((elmnt)=>{
//   if(elmnt==""){
//   return " ";
//   }
//   return elmnt;
// })

// let out = '';
// for(let i=mapstr.length-1;i>=0;i--){
//   if(mapstr[i]==' '){
//     out+=mapstr[i];
//   }else{
//     out+=mapstr[i]+' ';
//   }

// }

// console.log(mapstr);

// console.log(out.trim());


// let str ='';
// str+=' ';
// str+=' ';
// str+=' ';
// str+=' ';
// str+='1'

// console.log(str);




// function test(num,array){
//   if(num<=0) {
//      return;
//   }
//  array.push(num);

//   test(num-1,array);
// }

// test(5,array);
// console.log(array);


// console.log(array.push(5));
// console.log(array);
// const array = [];
// let b = array;

// b=1;

// console.log(array);
// console.log(b);

// for(let i=0;i<5;i++){
//   if(i<5){
//     console.log('Hii')
//     continue;
//   }
//   else{
//     break;
//   }
//   console.log('bro')
// }

//  const array = Array(10).fill(0).map(()=>[]);
//  array[0][5]=52;
//  console.log(array);

//  console.log(array[0][5]==52)

//  function test(num){
//   if(num>=5) return;
//   num++;
//   test(num);
//   console.log(num);
//  }

//  test(0);


// const digit = Math.floor(Math.log10(1921680))+1;
// console.log(digit);


// var str = String.fromCharCode(103);

function hasSingleCycle(array) {
  // Write your code here.
  // if we reach starting  position after visited all index mean cycle
   const visited = Array(array.length).fill(false);
  visited[0] = true;
  const startIdx = 0;
  let endIdx = array[startIdx]+startIdx;
console.log(endIdx)
  while(startIdx!=endIdx){
    let endIdx = array[endIdx]+endIdx;
    visited[endIdx]=true;
     if(endIdx>=0 || endIdx<array.length){
       endIdx=array[endIdx]+endIdx;
     }
     else if(endIdx>array.length){
       endIdx=array[endIdx]-array.length;
     }
    else if(endIdx<0){
      endIdx=array.length+endIdx-array[endIdx];
    }
  }
  //console.log(visited);
  // no cycle 
  for(let x of visited){
    if(x!=true) return false;
  }

  // single cycle
  return true;
}


const array = [2, 3, 1, -4, -4, 2];

console.log(hasSingleCycle(array));