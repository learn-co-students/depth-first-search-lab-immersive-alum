function getAdjacents(node, vertices, edges) {
  let adjacents = [];
  let listVertices = [];
  for (let i in edges) {
    if (edges[i].includes(node)) {
      if (!adjacents.includes(edges[i][0]) && edges[i][0] != node) {
        adjacents.push(edges[i][0]);
      }
      if (!adjacents.includes(edges[i][1]) && edges[i][1] != node) {
        adjacents.push(edges[i][1]);
      }
    }
  }
  for (let j in vertices) {
    if (
      adjacents.includes(vertices[j].name) &&
      vertices[j].discovered === null
    ) {
      listVertices.push(vertices[j]);
    }
  }
  return listVertices;
}

function markDiscovered(vertice, vertices) {
  for (let i in vertices) {
    if (vertices[i] === vertice) {
      vertices[i].discovered = true;
    }
  }
  return vertices;
}

function depthFirstSearch(rootNode, vertices, edges) {
  let stack = [rootNode];
  let nodeList = [rootNode];
  while (stack.length) {
    // console.log("stack", stack);
    let currentNode = stack.pop();
    let adjacents = getAdjacents(
      currentNode.name,
      markDiscovered(currentNode, vertices),
      edges
    );
    stack = stack.concat(adjacents);
    nodeList = nodeList.concat(adjacents);
  }
  return nodeList;
}
// let edges = [
//   ["14th&6th", "23rd&6th"],
//   ["23rd&6th", "34th&6th"],
//   ["34th&6th", "28th&Bwy"],
//   ["28th&Bwy", "23rd&Bwy"],
//   ["23rd&Bwy", "14th&Lex"],
//   ["14th&Lex", "23rd&Lex"]
// ];
//
// let vertices = [
//   { name: "34th&6th", discovered: null },
//   { name: "23rd&6th", discovered: null },
//   { name: "14th&6th", discovered: null },
//   { name: "28th&Bwy", discovered: null },
//   { name: "23rd&Bwy", discovered: null },
//   { name: "14th&Lex", discovered: null },
//   { name: "23rd&Lex", discovered: null }
// ];
//
// let rootNode = vertices[0];
// // let adjacents = getAdjacents(rootNode.name, vertices, edges);
// // console.log("adjacents", adjacents);
// console.log(depthFirstSearch(rootNode, vertices, edges));
//
