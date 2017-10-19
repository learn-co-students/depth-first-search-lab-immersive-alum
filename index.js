// var edges = [
// 	['14th&6th', '23rd&6th'],
// 	['23rd&6th', '34th&6th'],
// 	['34th&6th', '28th&Bwy'],
// 	['28th&Bwy', '23rd&Bwy'],
// 	['23rd&Bwy', '14th&Lex'],
// 	['14th&Lex', '23rd&Lex']
// ]
//
// var vertices = [
//   {name: '34th&6th', discovered: null},
//   {name: '23rd&6th', discovered: null},
//   {name: '14th&6th', discovered: null},
//   {name: '28th&Bwy', discovered: null},
// 	{name: '23rd&Bwy', discovered: null},
//   {name: '14th&Lex', discovered: null},
// 	{name: '23rd&Lex', discovered: null}
// ]

function findAdjacentNodes(street, vertices, edges) {
  let connectedEdges = [];
  for (var i = 0; i < edges.length; i++){
    if (edges[i][0] === street){
      connectedEdges.push(edges[i][1])
    } else if (edges[i][1] === street) {
      connectedEdges.push(edges[i][0])
    }
  }

  let filteredVertices = vertices.filter(vert => {
    if (connectedEdges.includes(vert.name) && vert.discovered !== true){
      return vert
    }
  })
  return filteredVertices
}


function depthFirstSearch(rootNode, vertices, edges) {
  let stack = [rootNode];
  let visited = [rootNode];
  stack.push(rootNode)

    while (stack.length) {
      let currentNode = stack.pop();
      if(!currentNode.discovered){
        currentNode.discovered = true;
        let connectedNodes = findAdjacentNodes(currentNode.name, vertices, edges)
        for (var i = 0; i < connectedNodes.length; i++){
          stack.push(connectedNodes[i])
          visited.push(connectedNodes[i])
        }
      }
    }
  return visited;
}

// var rootNode = vertices[0];

// depthFirstSearch(rootNode, vertices, edges)
