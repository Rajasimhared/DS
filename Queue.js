// const Queue = function () {
//   this.capacity = 10;
//   this.storage = {};
//   this.head = 0;
//   this.tail = 0;
// };

// Queue.prototype.enque = function (val) {
//   if (this.tail < this.capacity) {
//     this.storage[this.tail++] = val;
//     return this.tail;
//   } else {
//     return "Queue is full";
//   }
// };

// //Idli,Voda,Dosa
// Queue.prototype.deque = function () {
//   if (this.head !== this.tail) {
//     let value = this.storage[this.head];
//     delete this.storage[this.head];
//     this.head++;
//     return value;
//   } else {
//     return "Queue is empty";
//   }
// };

// Queue.prototype.size = function () {
//   return this.tail - this.head;
// };

// const foodMenu = new Queue();

// foodMenu.enque("Dosa");
// foodMenu.enque("Voda");
// foodMenu.enque("Idli");
// console.log(foodMenu.deque());
// console.log(foodMenu.storage);
// console.log(foodMenu.size());

const Queue = function () {
  this.capacity = 10;
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enque = function (val) {
  if ((this.tail, this.capacity)) {
    this.storage[this.tail++] = val;
    return this.tail;
  } else {
    return "Queue is already full";
  }
};

Queue.prototype.deque = function () {
  if (this.head !== this.tail) {
    let value = this.storage[this.head];
    delete this.storage[this.head];
    [this.head++];
    return value;
  } else {
    return "Queue is empty";
  }
};
Queue.prototype.size = function () {
  return this.tail - this.head;
};

const EPG = new Queue();
EPG.enque("Varshini");
EPG.enque("Rishika");
EPG.enque("Sriman");
console.log(EPG.storage);
console.log(EPG.size());
