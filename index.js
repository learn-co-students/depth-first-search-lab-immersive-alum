let depthFirstSearch = (rootNode, vertices, edges) => {

  let nodeQueue = []
  let visitedNodes = []
  let currentNode
  let adjacentNodes

  nodeQueue.push(rootNode)
  while (nodeQueue.length > 0){
    currentNode = nodeQueue.shift()
    if (currentNode.discovered === null){
      currentNode.discovered = true
      visitedNodes.push(currentNode)
      adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
      adjacentNodes.forEach( vertex => nodeQueue.push(vertex) )
    }
  }
  return visitedNodes
}

let findAdjacent = (node, vertices, edges) => {
  let adjEdges = []
  let targetEdges = []

  edges.forEach( edge => {
    if ( edge.includes(node) ){
      targetEdges.push(edge)
    }
  }
)
let edgeNames = targetEdges.map( edge => {
  return edge[0] === node ? edge[1] : edge[0]
})

edgeNames.forEach( name => {
  vertices.forEach( vertex => {
    if (name === vertex.name){
      adjEdges.push(vertex)
    }
  })
})
return adjEdges
}

let findDeepNodes = (node, vertices, edges) => {
  let deepNodes = []
  let targetEdges = []
}
