
/** 
function test(num){
  if(num >= 3) return;
  test(++num);            // mean first make parent num+1 then pass it self
  console.log(num); 
  test(num);
  console.log(num);
}

test(0);

**/


function test(num){
    if(num==0) return;
     test(num+1);      // it does not make parent num+1 but its pass num+1 self
     console.log(num);
     test(num);
     console.log(num);
}


test(0)


/** ############## (num+1 VS ++num ) ######## */


// let num = 2;

// console.log(num+1);
// console.log(num);

let num1 = 5;
console.log(++num1);
console.log(num1)

/** ############## ######## */