//
// function depthFirstSearch(rootNode, vertices, edges){
// 		let stack = []
// 		stack.push(rootNode)
// 		let visited = [rootNode]
//
// 		while(stack.length != 0){
// 			// console.log(`first element in stack is ${stack[0].name}`)
// 			let v = stack.pop()
// 			if(!v.discovered){
// 				v.discovered = true
//
// 				findAdjacent(v.name, vertices, edges).forEach(function(node){
// 					visited.push(node)
// 					stack.push(node)
// 				})
// 			}
// 		}
// 		return visited;
// }
//
// function findAdjacent(nodeName,  vertices, edges){
//   return edges.filter(function(edge){
//     return edge.includes(nodeName)
//   }).map(function(edge){
//     return edge.filter(function(node){
//       return (node != nodeName)
//     })[0]
//   }).map(function(name){
//     return findNode(name, vertices)
//   }).filter(function(node){
// 		return !node.discovered
// 	})
// }
//
// function findNode(nodeName, vertices){
//   return vertices.find(function(vertex){
//     return vertex.name == nodeName
//   })
// }


function depthFirstSearch(rootNode, vertices, edges) {
  edges = edges.map(edge => edge.map(e => e = vertices.find(vertex => vertex.name === e)))

  let stack = [rootNode]
  let visited = []

  while (stack[0]) {
    let currentNode = stack.pop()
    if (!currentNode.discovered) {
      currentNode.discovered = true
      let adjacentEdges = edges.filter(edge => edge[0].name === currentNode.name || edge[1].name === currentNode.name).map(e => e.filter(edge => edge.name !== currentNode.name)[0])
      stack = [...stack, ...adjacentEdges.reverse()]
      visited.push(currentNode)
    }
  }
  return visited

}



// while (stack[0]) {
//   let currentNode = stack.pop()
//   if (!currentNode.discovered) {
//     currentNode.discovered = true
//     edges.forEach(edge => {
//       let adjacentNodeName
//       if (edge[0] === currentNode.name) {
//         adjacentNodeName = edge[1]
//       } else if (edge[1] === currentNode.name) {
//         adjacentNodeName = edge[0]
//       }
//       if (adjacentNodeName) {
//         let adjacentNode = vertices.find(node => node.name === adjacentNodeName)
//         stack.push(adjacentNode)
//       }
//     })
//     visited.push(currentNode)
//   }
// }
// return visited
