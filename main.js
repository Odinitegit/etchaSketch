const container = document.querySelector('.grid-container')
const button = document.querySelector('#buttons')
const resetButton = document.querySelector('#resetButton')

  

    button.addEventListener('click',function() {
      
      container.innerHTML = '';
     let size = prompt('Choose your Grid Size (Up to 100x100)', '')
      
      for(let i = 0; i < size * size  ; i++){
 
        if(size > 100){
          alert('Wrong Value Choose a number between 1-100');
          break;
         }else{

      let newDiv = document.createElement('div');
    
       newDiv.classList.add('grid-item');
    
      container.appendChild(newDiv);
    }
    
     }

  let gridItems = document.querySelectorAll('.grid-item');

    // go through each item in grid items
    gridItems.forEach(item => {
      
      item.addEventListener('mouseover',function(){
        this.style.backgroundColor= 'black';


        
      });

    });
  });


resetButton.addEventListener('click', function () {
  const gridItemsToReset = document.querySelectorAll('.grid-item');

  gridItemsToReset.forEach((item) => {
    item.style.backgroundColor = 'rgb(240, 240, 240)';
  });
});
