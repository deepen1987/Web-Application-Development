class Node {
  constructor(prev, value) {
    this.prev = prev;
    this.value = value;
  }
}

const _tail = new WeakMap();
const _val = new WeakMap();
let _count = new WeakMap();

class Stack {
  constructor(value) {
    _tail.set(this, null);
    _count.set(this, 0);
  }

  get count() {
    let a = _count.get(this);
    return a;
  }

  push(value) {
    _val.set(this, value);
    let addr = _tail.get(this);
    let data = _val.get(this);

    if (addr) {
      const n = new Node(addr, data);
      _tail.set(this, n);
      _count.set(this, _count.get(this) + 1);
    } else {
      const n = new Node(addr, data);
      _tail.set(this, n);
      _count.set(this, _count.get(this) + 1);
    }
  }
  pop() {
    if (_tail.get(this)) {
      const node = _tail.get(this);
      _tail.set(this, node.prev);
      node.prev = null;
      _count.set(this, _count.get(this) - 1);
    } else {
      throw new Error("Stack is Empty");
    }
  }
  peek() {
    if (_tail.get(this)) {
      console.log(_tail.get(this).value);
    } else {
      throw new Error("Stack is Empty");
    }
  }
}

let stack = new Stack();
