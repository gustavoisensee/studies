const graph = require('./src/graph');
const { dfs } = require('./src/dfs');
const { bfsShortestPath, minStops } = require('./src/bfs');
const { factorial, findLastChild, flattenObject } = require('./src/recursion');

// #### BFS - Breath first search #################################
console.log('shortest path: ', bfsShortestPath('A', 'F', graph));
console.log('min stops: ', minStops('A', 'F', graph));

// #### DFS - Depth first search ##################################
console.log(dfs('A', graph));
console.log(dfs('B', graph));

// ### Recursion - Factorial ######################################
console.log('Factorial of 5 is ', factorial(5)); // Output: 120

// ### Recursion - findLastChild ##################################
const tree = { name: 'root', children: [{ name: 'child 1', children: [{ name: 'child 2', children: [] }] }] }
console.log('Last child is ', findLastChild(tree)); // Output: child 2

// ### Flatten Object #############################################
const nestedObject = {
  name: "Gus",
  age: 36,
  address: {
    city: "Utrecht",
    zip: { code: 3533, extension: 'CH' },
  },
  hobbies: ["reading", { type: "game", name: "FFXIV" }],
};
console.log('Flatten Object', flattenObject(nestedObject));
// Output:
// {
//   name: 'Gus',
//   age: 36,
//   'address.city': 'Utrecht',
//   'address.zip.code': 3533,
//   'address.zip.extension': 'CH',
//   'hobbies[0]': 'reading',
//   'hobbies[1].type': 'game',
//   'hobbies[1].name': 'FFXIV'
// }