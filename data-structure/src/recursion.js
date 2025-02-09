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

function flattenObject(obj, prefix = '') {
  let result = {};

  for (let key in obj) {
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      result = { ...result, ...flattenObject(obj[key], newKey) };

    } else if (Array.isArray(obj[key])) {
      obj[key].forEach((item, index) => {
        if (typeof item === 'object' && item !== null) {
          result = {...result, ...flattenObject(item, `${newKey}[${index}]`)};
        } else {
          result[`${newKey}[${index}]`] = item;
        }
      });

    } else {
      result[newKey] = obj[key];
    }
  }

  return result;
}

module.exports = {
  factorial,
  findLastChild,
  flattenObject
}