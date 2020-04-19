const Stack = function () {
  this.capacity = 10;
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function (val) {
  if (this.count < this.capacity) {
    this.storage[this.count++] = val;
    return this.count;
  } else {
    return "Stack is full";
  }
};

//Idli,Voda,Dosa
Stack.prototype.pop = function () {
  let value = this.storage[--this.count];
  delete this.storage[this.count];
  if (this.count < 0) {
    this.count = 0;
  }
  return value;
};

Stack.prototype.size = function () {
  return this.count;
};

const foodMenu = new Stack();

foodMenu.push("Idli");
foodMenu.push("Voda");
foodMenu.push("Dosa");
console.log(foodMenu.pop());
console.log(foodMenu.storage);
console.log(foodMenu.size());
