function findAdjacent(name, vertices, edges){
  let i
  let j
  let group = []
  for(i=0; i<edges.length; i++){
    for(j=0; j<edges[i].length; j++){
      if(edges[i][j]===name){
        group.push(edges[i])
      }
    }
  }
  let names = group.reduce((prev, curr) => prev.concat(curr)).filter(n=> n!=name)
  let nodes = []
  for(i=0; i<names.length; i++){
    let node = vertices.filter(v => v.name === names[i])[0]
    nodes.push(node)
  }
  return nodes.filter(n => !n.discovered)
}

function depthFirstSearch(node, vertices, edges){
  let stack = [node]
  let order = [node]
  while (stack.length !== 0){
    let curr = stack.pop()
    if (!curr.discovered){
      curr.discovered = true
      let adj = findAdjacent(curr.name, vertices, edges)
      for(let i=0; i<adj.length; i++){
       stack.push(adj[i])
       order.push(adj[i])
      }
    }
  }
  return order
}
