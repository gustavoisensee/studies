function factorial(n) {
  if (n === 0) {
      return 1;
  }
  return n * factorial(n - 1);
}

function findLastChild(node) {
  if (node.children.length === 0) {
      return node;
  }
  return findLastChild(node.children[node.children.length - 1]);
}

module.exports = {
  factorial,
  findLastChild
}