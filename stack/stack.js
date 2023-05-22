// Stack => Last In Last Out 

// O(1) time || O(n) space

function Stack() {
    // creating stack using array 
    const stack = [];

    this.push = function (elmnt) {
       stack.push(elmnt);
    }
    this.pop = function () {
        return stack.pop(); // remover last lement from the stack
    }
    this.size = function () {
        return stack.length;
    }
    this.print = function(){
        console.log(stack);
    }
}

const stack = new Stack();

stack.push(12);
stack.push(45);
stack.push(425);
stack.print();
stack.pop();
stack.print();