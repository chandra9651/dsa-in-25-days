function Stack(){
    let stack = [];
    
    // push element to the stack
    this.push = function(element){
       return stack.push(element);
    }

    //pop element from the stack
    this.pop = function(){
        return stack.pop();
    }

    //sizeof stack
    this.size = function(){
        return stack.length;
    }
    
    // print stack 
    this.print = function(){
        console.log(stack);
    }
}


const stack = new Stack();

stack.push(15);
stack.push(5);
stack.push(52);
stack.print()