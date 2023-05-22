// resource Pepcoding (YouTube)

// Byte 8 bit
// short 16 bit 
// int 32 bit
// long 64 bit 


// Bit ON use OR Operator 
// Bit OFF use AND Operator
// Bit Toggle use XOR Operator
// Bit check use AND Operator 




let num = 12;
// Binary 00001100 
// MSB bit are 0 
// right shift 2
// _ _000011 
// fill remain space with msb bit  Here msb bit are 0
// 00000011

let y = num >> 2;
console.log(num);
console.log(y);




// Left shift operator 

let neg = -12;
// find negative number binary 
// remover sign and find binary 
// take 1's complement and add binary of 1

// 00001100 of 12
// 11110011 + 00000001
// 11110100 = -12

let shift2bit = neg>>2;
// _ _ 111101
// fill remaining space with MSb bit
// 11111101  

console.log(shift2bit);


/// Triple right shift 

// fill remaining space with 0

let number = 12;
// shift 3 bit right and fill remain space with 0
let shift3bit =  number >>> 3;
console.log(shift3bit); 



