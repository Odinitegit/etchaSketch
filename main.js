const container = document.querySelector('.grid-container');
const button = document.querySelector('#buttons');
const resetButton = document.querySelector('#resetButton');
const rainbowButton = document.querySelector('#rainbowButton');

let rainbowMode = false;

// Toggle rainbowMode when the rainbowButton is clicked.
rainbowButton.addEventListener("click", function () {
  rainbowMode = !rainbowMode;
});

button.addEventListener('click', function () {
  let size = prompt('Choose your Grid Size (Up to 100x100)', '');
  const itemWidth = 1000 / size;
  const itemHeight = 1000 / size;

  //reset page before anything new is populated
  container.innerHTML = '';

  if (size > 100 || size < 1 || isNaN(size)) {
    alert('Wrong value, Choose a number between 1-100.');
  } else {
    for (let i = 0; i < size * size; i++) {
      let newDiv = document.createElement('div');
      newDiv.classList.add('grid-item');
      container.appendChild(newDiv);

     
     
      
      let opacity = 0.2;
      
      // Attach mouseover event listeners to the new grid items.
      newDiv.addEventListener('mouseover', function () {
        // Increase the opacity value
          opacity += 0.2;
        // Limit the opacity to 1
        if (opacity > 1) opacity = 1;

      if (rainbowMode) {
          const randomColor = randomRGB();
          this.style.backgroundColor = randomColor;
         }else{
          this.style.backgroundColor = `rgba(0,0,0, ${opacity})`;
        }
      
      });


      newDiv.style.width = `${itemWidth}px`;
      newDiv.style.height = `${itemHeight}px`;
    }
  }
});

//reset button
resetButton.addEventListener('click', function () {
  const gridItemsToReset = document.querySelectorAll('.grid-item');

  gridItemsToReset.forEach((item) => {
    item.style.backgroundColor = 'rgb(240, 240, 240)';
  });
});

function randomRGB() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}
