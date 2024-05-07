function hasCycle(head) {
  let nodes = {};

  if (!head.next || !head) {
    return 0;
  }

  let currentNode = head;

  while (currentNode != null) {
    if (!nodes[currentNode.data]) {
      nodes[currentNode.data] = true;
    } else {
      return 1;
    }

    currentNode = currentNode.next;
  }

  return 0;
}

const nodes = {
  data: 15,
  next: { data: 45, next: { data: 12, next: { data: 15, next: null } } },
};
console.log(hasCycle(nodes));
