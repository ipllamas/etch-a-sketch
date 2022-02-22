const body = document.querySelector('body');
const html = document.querySelector('html');

const gridDiv = document.createElement('div');
gridDiv.classList.add('gridDiv');
body.appendChild(gridDiv);
for (let i=0; i<16; i++) {
  console.log(i);
  const div = document.createElement('div');
  div.classList.add('row-container');
  gridDiv.appendChild(div);
  for (let j=0; j<16; j++) {
    const divCell = document.createElement('div');
    divCell.classList.add('cell');
    div.appendChild(divCell);
  }
}

const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => cell.addEventListener('mouseover', hoverOver));


function hoverOver(e){
  const cell = e.target;
  console.log(cell);
  cell.classList.add('hover');
}