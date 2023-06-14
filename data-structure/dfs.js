// depth = vertical / stack or recursion
const dfs = (start, graph, visited = new Map(), result = []) => {
  visited.set(start, true);
  result.push(start);

  const children = graph[start] || [];

  for (const child of children) {
    if (!visited.has(child)){
      dfs(child, graph, visited, result);
    }
  }

  return result;
}

module.exports = {
  dfs
}