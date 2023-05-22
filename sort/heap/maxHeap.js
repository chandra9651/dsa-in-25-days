// REsource love Babbar 1:04::55 hourse


class Heap {
    constructor() {
        this.heapCollection = [];
        this.heapCollection[0] = -1;
        this.size = 0;
    }

    // insertion time O(logn)
    insert = function (val) {
        this.size += 1;
        let index = this.size;
        this.heapCollection[index] = val;

        while (index > 1) {
            const parent = Math.floor(index / 2);
            if (this.heapCollection[parent] < this.heapCollection[index]) {
                // swap with its parent 
                [this.heapCollection[parent], this.heapCollection[index]] = [this.heapCollection[index], this.heapCollection[parent]];
                index = parent;
            } else {
                return;
            }
        }
    }


    // deletion done from root node in heap 

    deleteNode = function () {
        if (this.size == 0) return;

        // remove last elemnt and copy to first index 
        const lastElmnt = this.heapCollection.pop();
        this.heapCollection[1] = lastElmnt;
        this.size--;
        // take root node its correct position 
        let idx = 1;
        const n = Math.floor(this.size / 2);

        while (idx <= n) {
            let largest = idx;
            const leftIdx = 2 * idx;
            const rightIdx = 2 * idx + 1;

            // comparir with left
            if (left <= this.size && this.heapCollection[largest] < this.heapCollection[leftIdx]) {
                largest = leftIdx;
            }
            // compair with right
            if (right <= this.size && this.heapCollection[largest] < this.heapCollection[rightIdx]) {
                largest = rightIdx;
            }
            if (largest != idx) {
                // swap
                [this.heapCollection[idx], this.heapCollection[largest]] = [this.heapCollection[largest], this.heapCollection[idx]];
                idx = largest;
            } else {
                return;
            }
        }
    }

    print = function () {
        console.log(this.heapCollection);
        // console.log(this.size)
    }
}

// heapify algorithm
function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i;
    const right = 2 * i + 1;
    if (left <= n && arr[largest] < arr[left]) {
        largest = left;
    }
    if (right <= n && arr[largest] < arr[right]) {
        largest = right;
    }
    if (largest != i) {
        // swap 
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}



// heap sort algorithm
function heapSort(heap /*heap arr */, n) {
    let size = n;
    while (size > 1) {
        // step:1 swap 
        [heap[1], heap[size]] = [heap[size], heap[1]];
        // step : 2
        size--;
        // step :3
        heapify(heap, size, 1);
    }
}




const heap = new Heap();
heap.insert(50);
heap.insert(55);
heap.insert(53);
heap.insert(52);
heap.insert(54);

heap.print();

heap.deleteNode();
heap.print();


const arr = [-1, 54, 53, 55, 52, 50];
const n = Math.floor(arr.length - 1 / 2);
for (let i = n; i > 0; i--) {
    heapify(arr, n, i);
}
console.log('heapify');
console.log(arr);

console.log('heap sort');
heapSort(arr, 5);

console.log(arr);