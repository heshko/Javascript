// Do not touch this array
let breakPoints = [
  {
    value: 500,
    color: 'red',
  },
  {
    value: 900,
    color: 'green',
  },
  {
    value: 600,
    color: 'purple',
  },
  {
    value: 700,
    color: 'pink',
  }
];

// Implement your solution here

window.addEventListener('resize', e => {
  let width = window.innerWidth;
  console.log(width);

  // First solution
  let minValue = Infinity;
  let minColor = null;
  for (let breakpoint of breakPoints) {
    if (breakpoint.value > width && breakpoint.value < minValue) {
      minValue = breakpoint.value;
      minColor = breakpoint.color;
    }
  }

  // Second solution
  breakPoints.sort((a, b) => a.value - b.value)

  let color = null;
  for (let breakpoint of breakPoints) {
    if (breakpoint.value > width) {
      color = breakpoint.color;
    }
  }


  if (!minColor) minColor = "white";
  document.body.style.backgroundColor = minColor;
});
