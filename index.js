function findAdjacent(nodeName, vertices, edges){
  let cycle = edges.length

  let edge;
  let index;
  let adjacentIndex;
  let adjacentNodes = [];

  while(cycle > 0){
    edge = edges.shift();
    index = edge.indexOf(nodeName);
    if(index !== -1){
      adjacentIndex = index === 0 ? 1 : 0;
      vertices.forEach((vertex) => {
        if(vertex.name === edge[adjacentIndex]){
          adjacentNodes.push(vertex);
        }
      });
    } else{
      edges.push(edge);
    }
    --cycle;
  }

  return adjacentNodes;
}

function depthFirstSearch(startingNode, vertices, edges){
  let stack = [startingNode];
  let visitedNodes = [];
  let visited = {};
  let currentNode;

  visited.startingNode = true;

  let adjacentVertices;

  while(stack.length) {
    currentNode = stack.pop();
    visitedNodes.push(currentNode);
    adjacentVertices = findAdjacent(currentNode.name, vertices, edges);

    for(let vertex of adjacentVertices) {
      if(!visited[vertex]){
        visited.vertex = true;
        stack.push(vertex);
      }
    }
  }
  return visitedNodes;
}
