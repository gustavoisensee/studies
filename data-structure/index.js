const graph = require('./src/graph');
const { bfsShortestPath, minStops } = require('./src/bfs');
const { dfs } = require('./src/dfs');

// #### BFS - Breath first search #################################
console.log('shortest path: ', bfsShortestPath('A', 'F', graph));
console.log('min stops: ', minStops('A', 'F', graph));

// #### DFS - Depth first search ##################################
console.log(dfs('A', graph));
console.log(dfs('B', graph));
