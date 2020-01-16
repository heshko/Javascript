// Write your solution here

function diff(a, b) {
  let results = [];
  function diffInner(a, b) { 
    if (a.text !== b.text) {
      results.push(a.id);
    }

    for (let i = 0; i < a.children.length; i += 1) {
      let aChild = a.children[i];
      let bChild = b.children[i];
      diffInner(aChild, bChild);
    }
  }

  diffInner(a, b);

  return results;
}

function diff2(a, b) {
  let aNodes = [];
  let bNodes = [];
  
  function diffInner(a, b) {
    if (a) {
      for (let child of a.children) {
        aNodes.push(child);
        diffInner(child, null);
      }
    }

    if (b) {
      for (let child of b.children) {
        bNodes.push(child);
        diffInner(null, child);
      }
    }
  }

  diffInner(a, b);

  let results = [];

  for (let i = 0; i < aNodes.length; i += 1) {
    if (aNodes[i].text !== bNodes[i].text) {
      results.push(aNodes[i].id);
    }
  }
  
  return results;
}


// Do not touch anything below this line
let a = {
  id: 'A',
  text: 'foo',
  children: [
    {
      id: 'B',
      text: 'bar', children: [
        {id: 'C', text: 'baz', children: []}
      ]
    },
    {
      id: 'D',
      text: 'faz',
      children: [],
    },
    {
      id: 'E',
      text: 'foo',
      children: [],
    }
  ]
};

let b = {
  id: 'A',
  text: 'foo',
  children: [
    {
      id: 'B',
      text: 'bar', children: [
        {id: 'C', text: 'pear', children: []}
      ]
    },
    {
      id: 'D',
      text: 'faz',
      children: [],
    },
    {
      id: 'E',
      text: 'banana',
      children: [],
    }
  ]
};

let diffResult = diff(a, b);
if (!diffResult || diffResult.length !== 2 || diffResult.indexOf('C') === -1 || diffResult.indexOf('E') === -1) {
  console.log('Invalid Solution')
}
else {
  console.log('Solved!');
}
