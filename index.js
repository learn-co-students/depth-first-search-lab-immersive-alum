let myEdges = [
    ['14th&6th', '23rd&6th'],
    ['23rd&6th', '34th&6th'],
    ['34th&6th', '28th&Bwy'],
    ['28th&Bwy', '23rd&Bwy'],
    ['23rd&Bwy', '14th&Lex'],
    ['14th&Lex', '23rd&Lex']
]

let myVertices = [
  {name: '34th&6th', discovered: null},
  {name: '23rd&6th', discovered: null},
  {name: '14th&6th', discovered: null},
  {name: '28th&Bwy', discovered: null},
    {name: '23rd&Bwy', discovered: null},
  {name: '14th&Lex', discovered: null},
    {name: '23rd&Lex', discovered: null}
]

function findAdjacent(vertices, edges, vertex) {
  let filteredEdges = edges.filter( edge => {
    return edge.includes(vertex.name)
  })

  filteredEdges.map( edge => {
    if(edge[0] === vertex.name) {
      edge.splice(0, 1)
    } else {
      edge.splice(1, 1)
    }
  })

  filteredEdges = [].concat.apply([],filteredEdges)

  let filteredVertices = vertices.filter( vertex => {
    return filteredEdges.includes(vertex.name) && vertex.discovered !== true
  })

  return filteredVertices
}

function markAsDiscovered(vertices, vertex) {
  let currentVertex
  vertices.map( v => {
    if (v.name === vertex.name) {
      v.discovered = true
      currentVertex = v
    }
  })
  return currentVertex
}

function handlePushToStack(stack, vertices, vertex, visited) {
  // Needs to handle three actions:
  // 1. update the "discovered" property in the vertices collection
  // 2. Push the vertex to the stack, which will be used to keep track of the order of what is going to be explored
  // 3. Push the vertex to the visited collection which is the return value
  let currentVertex = markAsDiscovered(vertices, vertex)
  stack.push(currentVertex)
  visited.push(currentVertex)
}


function depthFirstSearch(rootNode, vertices, edges) {
  let visited = []
  let stack = []
  handlePushToStack(stack, vertices, rootNode, visited)


  while (stack.length > 0) {
    console.log(visited)
    let currentVertex = stack.pop()
    let children = findAdjacent(vertices, edges, currentVertex)
    for (let i = 0; i < children.length; i++) {
      handlePushToStack(stack, vertices, children[i], visited)
    }
  }
  return visited
}
