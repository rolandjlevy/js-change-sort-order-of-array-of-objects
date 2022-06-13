const $ = (elem) => document.querySelector(elem);

let items = [
  {
    name: 'Alpha',
    sortOrder: 1,
  },
  {
    name: 'Bravo',
    sortOrder: 2,
  },
  {
    name: 'Charlie',
    sortOrder: 3,
  },
  {
    name: 'Delta',
    sortOrder: 4,
  },
  {
    name: 'Echo',
    sortOrder: 5,
  },
  {
    name: 'Foxtrot',
    sortOrder: 6,
  },
  {
    name: 'Golf',
    sortOrder: 7,
  },
  {
    name: 'Hotel',
    sortOrder: 8,
  },
  {
    name: 'India',
    sortOrder: 9,
  },
  {
    name: 'Juliett',
    sortOrder: 10,
  }
];

const render = (arr) => {
  let str = '<ul>';
  items.forEach((item, index) => {
    const disabledUp = index === 0 ? ' disabled' : '';
    const disabledDown = index === items.length-1 ? ' disabled' : '';
    const up = `<button onclick="changeOrder(${index + 1}, -1)"${disabledUp}>UP</button>`;
    const down = `<button onclick="changeOrder(${index + 1}, 1)"${disabledDown}>DOWN</button>`;
    str += `<li>${item.name}: ${item.sortOrder} ${up} ${down}`
  });
  str += '<ul>';
  $('#display').innerHTML = str;
}

const changeOrder = (target, dir) => {
  const len = items.length;
  items = items.map((item) => {
    const startLimit = dir === 1 && target > 0 || dir === -1 && target > 1;
    const endLimit = dir === 1 && target < len || dir === -1 && target < len + 1;
    if (startLimit && endLimit) {
      if (item.sortOrder === target) {
        return {...item, sortOrder: item.sortOrder + dir }
      } else if (item.sortOrder === target + dir) {
        return {...item, sortOrder: item.sortOrder + dir * -1 }
      } else {
        return item;
      }
    } else {
      return item;
    }
  }).sort((a, b) => a.sortOrder - b.sortOrder);
  render(items);
}

render(items);