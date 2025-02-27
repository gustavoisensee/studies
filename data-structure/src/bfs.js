// breath = horizontal / queue
function bfsShortestPath(startNode, endNode, graph) {
  const queue = [[startNode]]; // Initialize the queue with [[A]], then [[A], [A,B], [A,C] ...]
  
  while (queue.length > 0) {
    const currentPath = queue.shift(); // Dequeue a path from the queue
    const currentNode = currentPath[currentPath.length - 1]; // Get the last node of the current path
    
    if (currentNode === endNode) {
      return currentPath; // Found the shortest path
    }
    
    const neighbors = graph[currentNode] || []; // Get all neighbors of the current node
    
    for (const neighbor of neighbors) {
      if (!currentPath.includes(neighbor)) { // If the neighbor hasn't been visited yet
        const newPath = [...currentPath, neighbor]; // Extend the current path with the neighbor
        queue.push(newPath); // Enqueue the new path
      }
    }
  }
  
  return [];
}

// from [['A', 'B'], ['B', 'C']] to { A: ['B'], B: ['C'] }
function convertToGraph(nodes) {
  const graph = {};

  for (const [from, to] of nodes) {
      if (!graph[from]) graph[from] = [];
      if (!graph[to]) graph[to] = [];

      graph[from].push(to);
      graph[to].push(from);
  }

  return graph;
}

function minStops(start, end, graph) {
  const visited = new Set();
  const queue = [{ key: start, counter: 1 }];
  visited.add(start);

  while (queue.length > 0) {
    const node = queue.shift();
    const children = graph[node.key] || [];

    for (const child of children) {
      if (!visited.has(child)) {
        queue.push({ key: child, counter: node.counter + 1 });
        visited.add(child);

        if (end === child) return node.counter;
      }
    }
  }

  return -1;
}

module.exports = {
  bfsShortestPath,
  minStops,
  convertToGraph,
};