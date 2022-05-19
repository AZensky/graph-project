function getNeighbors(r, c, graph) {
  let res = [];
  // Up
  if (!(r - 1 < 0) && graph[r - 1][c] === 1) {
    res.push([r - 1, c]);
  }
  // Down
  if (!(r + 1 >= graph.length) && graph[r + 1][c] === 1) {
    res.push([r + 1, c]);
  }
  // Left
  if (!(c - 1 < 0) && graph[r][c - 1] === 1) {
    res.push([r, c - 1]);
  }
  // Right
  if (!(c + 1 >= graph[r].length) && graph[r][c + 1] === 1) {
    res.push([r, c + 1]);
  }
  return res;
}

function islandSize(row, col, graph) {
  let maxSize = 0;
  let stack = [];
  let visited = new Set();

  for (let r = row; r < graph.length; r++) {
    for (let c = col; c < graph[r].length; c++) {
      if (graph[r][c] === 1) {
        let currSize = 1;

        stack.push([r, c]);
        let key = `${r}, ${c}`;
        visited.add(key);

        while (stack.length) {
          let [r, c] = stack.pop();
          let neighbors = getNeighbors(r, c, graph);
          for (let neighbor of neighbors) {
            let [r, c] = neighbor;
            let key = `${r}, ${c}`;
            if (!visited.has(key)) {
              visited.add(key);
              currSize++;
              maxSize = Math.max(maxSize, currSize);
              stack.push(neighbor);
            }
          }
        }
      }
    }
  }

  return maxSize;

  // Create a visited set to store visited nodes
  // Create a stack, put the starting node in the stack
  // Put the stringified starting node in visited
  // Initialize size to 0
  // While the stack is not empty,
  // Pop the first node
  // DO THE THING (increment size by 1)
  // Then push all the UNVISITED neighbors on top of the stack
  // and mark them as visited
  // HINT: This is what your helper function `getNeighbors` is for
  // HINT: Remember, you're storing your visited nodes as strings!
  // return size
  // Your code here
}

module.exports = [getNeighbors, islandSize];
