class BinarySearchTree {
  constructor(data, left = null, right = null) {
    this.left = left;
    this.right = right;
    this.data = data;
  }
}

BinarySearchTree.prototype.contains = function (val) {
  if (val === this.data) {
    return true;
  }
  if (val > this.data) {
    return !!this.right && this.right.contains(val);
  }
  if (val < this.data) {
    return !!this.left && this.left.contains(val);
  }
  return false;
};

BinarySearchTree.prototype.insert = function (val) {
  if (val <= this.data) {
    if (this.left) this.left.insert(val);
    else this.left = new BinarySearchTree(val);
  } else {
    if (this.right) this.right.insert(val);
    else this.right = new BinarySearchTree(val);
  }
  return this;
};
