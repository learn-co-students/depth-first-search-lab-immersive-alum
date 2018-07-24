function depthFirstSearch(root, vertices, edges){
		let stack = []
		stack.push(root)
		let visited = [root]
		while(stack.length !== 0){
			let item = stack.pop()
			if(!item.discovered){
				item.discovered = true
				findAdjacent(item.name, vertices, edges).forEach(function(node){
					visited.push(node)
					stack.push(node)
				})
			}
		}
		return visited
}

function findAdjacent(node, vertices, edges){
  return edges.filter(function(x){
    return x.includes(node)
  }).map(function(x){
    return x.filter(function(y){
      return (y != node)
    })[0]
  }).map(function(x){
    return findNode(x, vertices)
  }).filter(function(x){
		return !x.discovered
	})
}

function findNode(node, vertices){
  return vertices.find(function(x){
    return x.name == node
  })
}