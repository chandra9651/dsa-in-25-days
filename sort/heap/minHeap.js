class minHeap {
    constructor() {
        this.collection = [];
        this.collection[0] = -1;
        this.size = 0;
    }
    // insert elemnet in heap
    insert(elmnt) {
        this.size++;
        this.collection.push(elmnt);
        // take its correct position
        let i = this.size;
        while (i > 1) {
            const parent = Math.floor(i / 2);
            if (this.collection[parent] > this.collection[i]) {
                // swap 
                [this.collection[i], this.collection[parent]] = [this.collection[parent], this.collection[i]];
                i = parent;
            } else {
                return;
            }
        }
    }
    //delete element from heap
    delete() {
        if (this.size == 0) return;
        // dele of element done from first node of heap 
        this.collection[1] = this.collection[this.size];
        this.collection.pop(); // return removed element 
        this.size--;
        // take its correct position
        let i = 1;
        let n = Math.floor(this.size / 2);
        while (i <= n) {
            let smallest = i;
            const left = i * 2;
            const right = 2 * i + 1;
            if (left <= this.size && this.collection[smallest] > this.collection[left]) {
                smallest = left;
            }
            if (right <= this.size && this.collection[smallest] > this.collection[right]) {
                smallest = right;
            }
            if (smallest != i) {
                // swap 
                [this.collection[smallest], this.collection[i]] = [this.collection[i], this.collection[smallest]];
                i = smallest;
            } else {
                return;
            }
        }
    }
    // print heap 
    print() {
        console.log(this.collection);
    }
    // size of heap 
    size() {
        console.log(this.collection.length);
    }
}

// convert array into heap

function heapify(arr, n, i) {
    let smallest = i;
    const left = 2 * i;
    const right = 2 * i + 1;

    if (left <= n && arr[smallest] > arr[left]) {
        smallest = left;
    }
    if (right <= n && arr[smallest] > arr[right]) {
        smallest = right;
    }
    if (smallest != i) {
        // swap 
        [arr[smallest], arr[i]] = [arr[i], arr[smallest]];
        heapify(arr, n, smallest);
    } else {
        return;
    }

}


// min Heap sort element in Decending order
function heapSort(heap/*heap arr */, n) {
    let size = n;
    while (size > 1) {
        // step : 1 swap
        [heap[1], heap[size]] = [heap[size], heap[1]];
        // step : 2
        size--;
        // step :3 
        heapify(heap, size, 1);

    }
}




const minheap = new minHeap();


minheap.insert(52);
minheap.insert(10);
minheap.insert(8);
minheap.insert(15);
minheap.insert(62);
minheap.insert(48);
minheap.insert(90);


minheap.print();
console.log(minheap.size);

minheap.delete();
minheap.print();

console.log(minheap.size);


const array = [-1, 15, 8, 25, 3, 64, 96, 26, 5];
const size = array.length - 1;

const buildHeap = (arr) => {
    const n = Math.floor(size / 2);
    for (let i = n; i > 0; i--) {
        heapify(arr, size, i);
    }
}

console.log('build heap');
buildHeap(array);

console.log(array);


// apply heap sort on heap array
console.log('heap sort');
heapSort(array, size);

console.log(array);

