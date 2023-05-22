/* Stack */

// Follow Rule of LIFO

function Stack(){
    const stack = [];
    this.print=function(){
        console.log(stack)
    }
    this.push=function(element){
        stack.push(element);
    }
    this.isEmpty=function(){
           return (stack.length === 0);   }
    this.pop=function(){
        stack.pop();
    }
}

let stack = new Stack();
stack.push(10);
stack.push(15);
stack.push(5);
stack.push(20);
stack.push(35);
stack.push(11);
stack.push(12);
stack.push(123);
stack.push(0);
stack.push(7);
stack.push(59);
stack.print();

//console.log(stack.isEmpty())
stack.pop();
stack.pop();

stack.print();
