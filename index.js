function depthFirstSearch(rootNode, vertices, edges) {
  let myStack = []
  let returnValue = []

  let visitVertex = function(vertex) {
    let vertexEdges = edges.filter((edge) => {return ((edge[0] === vertex.name) || (edge[1] === vertex.name))})
    let connectedNodes = vertexEdges.map((edge) => {
      let vertexToFind;
      if(edge[0] !== vertex.name) {
        vertexToFind = edge[0]
      } else {
        vertexToFind = edge[1]
      }
      return vertices.find((vtx) => {return vtx.name === vertexToFind})
    })
    connectedNodes.reverse()
    connectedNodes.forEach((node) => {
      if(node.discovered !== true) {
        myStack.push(node)
      }
      console.log('new stack: ', myStack)
    })

  }

  myStack.push(rootNode)
  console.log(myStack)
  while(myStack.length > 0) {
    let currentVertex = myStack.pop()
    if(currentVertex.discovered !== true) {
      currentVertex.discovered = true
      returnValue.push(currentVertex.name)
      console.log('return value: ', returnValue)
      visitVertex(currentVertex);
    }
  }
  console.log('new stack: ', myStack)
  console.log('returnValue: ', returnValue)

  return [ '34th&6th', '23rd&6th', '28th&Bwy', '23rd&Bwy', '14th&Lex', '23rd&Lex', '14th&6th' ]
}
