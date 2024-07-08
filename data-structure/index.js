const graph = require('./src/graph');
const { dfs } = require('./src/dfs');
const { bfsShortestPath, minStops } = require('./src/bfs');
const { factorial, findLastChild } = require('./src/recursion');

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