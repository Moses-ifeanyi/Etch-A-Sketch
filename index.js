const container = document.getElementById("container");
const button = document.getElementById("reset-button");

function createGrid(squaresPerSide) {
  container.innerHTML = ""; // clear the existing grid

  // calculate the size of each square based on the available space
  const containerSize = container.offsetWidth;
  const squareSize = (containerSize - 16) / squaresPerSide;


  // create the grid
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
  }

  // add event listeners for hover effects
  container.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('square')) {
        let currentColor = e.target.style.backgroundColor;
        if (currentColor === "") {
          // if the square doesn't have a background color yet, set a random one
          let randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
          e.target.style.backgroundColor = randomColor;
        }
        else {
            // otherwise, darken the color by 10%
            let [r, g, b] = currentColor.slice(4, -1).split(", ");
            r = Math.max(0, parseInt(r) - 25);
            g = Math.max(0, parseInt(g) - 25);
            b = Math.max(0, parseInt(b) - 25);
            let newColor = `rgb(${r}, ${g}, ${b})`;
            e.target.style.backgroundColor = newColor;
          }
    //   e.target.style.backgroundColor = 'black';
    }
  });
}

// create the initial grid with 16 squares per side
createGrid(16);

// add event listener to the button to reset the grid
button.addEventListener("click", function() {
  let squaresPerSide = prompt("Enter the number of squares per side (maximum 100):");
  squaresPerSide = Math.min(100, Math.max(1, parseInt(squaresPerSide)));
  createGrid(squaresPerSide);
});
