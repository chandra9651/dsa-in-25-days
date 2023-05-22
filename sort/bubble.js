// bubble sort 
// Description : Element goes from start to end but every for loop number of comparision for while is minimise

const arr = [7, 11, 9, 2, 17, 4];

const bubble = (a)=>{
    for(let i=0; i<a.length-1;i++){ // number of pass 
        let j = ((a.length-1)-i);
        let k=0;
        while(j>=0){
            if(a[k]>a[k+1]){
                [a[k],a[k+1]]=[a[k+1],a[k]];
            }
            k++;
            j--;
        }
        console.log(a);
    }
}

bubble(arr);


console.log(arr)



