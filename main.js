const container = document.querySelector('.grid-container')
const button = document.querySelector('#buttons')
const resetButton = document.querySelector('#resetButton')

  button.addEventListener('click',function() {
    
     let size = prompt('Enter Size', '')
    
    for(let i = 0; i < size * size  ; i++){
 
      let newDiv = document.createElement('div');
    
       newDiv.classList.add('grid-item');
    
      container.appendChild(newDiv);
    }
    
  

  let gridItems = document.querySelectorAll('.grid-item');

    // go through each item in grid items
    gridItems.forEach(item => {
      
      item.addEventListener('mouseover',function(){
        this.style.backgroundColor= 'black';


        
      });

      // Move resetButton event listener outside of the forEach loop
    });
  });


       // Reset button event listener moved outside of the forEach loop
resetButton.addEventListener('click', function () {
  const gridItemsToReset = document.querySelectorAll('.grid-item');

  gridItemsToReset.forEach((item) => {
    item.style.backgroundColor = 'rgb(240, 240, 240)';
  });
});