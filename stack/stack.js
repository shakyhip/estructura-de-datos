class Stack {
  constructor() {
    this.stack = [];
  }
  
  push(element) {
    this.stack.push(element);
    return this.stack;
  }
  
  pop() {
    return this.stack.pop();
  }
  
  peek() {
    return this.stack[this.stack.length - 1];
  }
  
  size() {
    return this.stack.length;
  }

  print() {
    console.log(this.stack);
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  empty() {
    this.stack.length = 0;
  }

}

const pila = new Stack();

console.log(pila.size());
pila.push("Azul");
console.log(pila.size());
pila.print();
pila.push("Rojo");
console.log(pila.size());
pila.print();
console.log(pila.peek());
console.log(pila.isEmpty());
pila.pop();
console.log(pila.peek());
pila.pop();
console.log(pila.isEmpty());
pila.push('Naranja');
pila.push('Amarillo');
pila.empty();
pila.print();
