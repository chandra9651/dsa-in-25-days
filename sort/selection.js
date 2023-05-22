// selection sort 
// given array [10,8,60] 

// outer loop 0 to (length-1)
// inner loop i+1 to length 

// Description : selected element compared all forword element in array


const arr = [4,1,9,2,3,6,2];

const selection = (a)=>{
    for(let i=0;i<a.length-1;i++){
        for(let j=i+1;j<a.length;j++){
            if(a[i]>a[j]){
                [a[i],a[j]] = [a[j],a[i]];
               // console.log(a);
            }
        }
    }
}
selection(arr);

console.log(arr)



