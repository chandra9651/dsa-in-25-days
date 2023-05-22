function PriorityQueue() {
    let collection = [];
    this.enqueue = function (elmnt) {
        if (collection.length == 0) {
            collection.push(elmnt);
        } else {
            let flag = false;
            for (let i = 0; i < collection.length; i++) {
                if (elmnt < collection[i]) {
                    collection.splice(i, 0, elmnt);
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                collection.push(elmnt);
            }
        }
    }

    this.dequeue = function () {
        return collection.shift(); // remover first element from array

    }

    this.print = function () {
        console.log(collection);
    }
    this.size = function(){
        return collection.length;
    }
    this.front = function(){
        return collection[0];
    }
}

//const pq = new PriorityQueue();

// pq.enqueue(12);
// pq.enqueue(10);
// pq.enqueue(100);

// if(25<pq.dequeue()){
//        console.log(true);     
// } 
//pq.print();

// console.log(pq.size())

const pq = new PriorityQueue();

function klargestElmnt(arr,k){
     for(let i=0;i<arr.length;i++){
        if(pq.size()<k){
            pq.enqueue(arr[i]);
        }else{
           if(arr[i]>pq.front()){
            pq.dequeue();
            pq.enqueue(arr[i]);
           }   
        }
     }

     pq.print();
}

const arr = [4,5,12,3,85,51,120];

klargestElmnt(arr,3);