const body = document.querySelector('body');
let size = 16;
const gridDiv = document.createElement('div');
gridDiv.classList.add('gridDiv');
body.appendChild(gridDiv);
createGrid(size); 

const btn = document.querySelector('button');
btn.addEventListener('click', processUserInput)

//Adds "hover" class upon hovering over each cell
function hoverOver(e){
  const cell = e.target;
  cell.classList.add('hover');
}

//Validates user input, and process it to call deleteGrid and createGrid
function processUserInput(e){
  deleteGrid();
  let userInput = prompt('Input number of cells per side 1-100');
   while (!userInput || isNaN(userInput)){
    userInput = prompt('Please input a valid number');
  }
  size = parseInt(userInput);
  if (size>100){
    size = 100;
  }
  createGrid(size);
}

//Creates grid of size cellsPerSide x cellsPerSide, and adds event listeners
function createGrid(cellsPerSide){
  let height = (1/cellsPerSide) * 100;
  let width = height;
  for (let i=0; i<cellsPerSide; i++) {
    const div = document.createElement('div');
    div.classList.add('row-container');
    div.style.height = `${height}%`;
    gridDiv.appendChild(div);
    for (let j=0; j<cellsPerSide; j++) {
      const divCell = document.createElement('div');
      divCell.classList.add('cell');
      divCell.style.width = `${width}%`;
      div.appendChild(divCell);
    }
  }
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => cell.addEventListener('mouseover', hoverOver));
}

//Deletes every cell in a row container, then deletes every row container in gridDiv
function deleteGrid() {
  while (gridDiv.firstChild) {
    while (gridDiv.firstChild.firstChild) {
      gridDiv.firstChild.removeChild(gridDiv.firstChild.firstChild);
    }
    gridDiv.removeChild(gridDiv.firstChild);
  }
}