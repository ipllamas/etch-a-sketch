const body = document.querySelector('body');
const html = document.querySelector('html');

createGrid(16); 

function hoverOver(e){
  const cell = e.target;
  console.log(cell);
  cell.classList.add('hover');
}

function createGrid(cellsPerSide){
  const gridDiv = document.createElement('div');
  gridDiv.classList.add('gridDiv');
  body.appendChild(gridDiv);
  for (let i=0; i<cellsPerSide; i++) {
    console.log(i);
    const div = document.createElement('div');
    div.classList.add('row-container');
    gridDiv.appendChild(div);
    for (let j=0; j<cellsPerSide; j++) {
      const divCell = document.createElement('div');
      divCell.classList.add('cell');
      div.appendChild(divCell);
    }
  }

  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => cell.addEventListener('mouseover', hoverOver));
}