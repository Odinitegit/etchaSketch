const container = document.querySelector('.grid-container');

for (let i = 0; i < 16 * 16 - 1; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('grid-item');

    container.appendChild(newDiv);

}

const gridItem = document.querySelectorAll('.grid-item');

gridItem.forEach(item => {
    item.addEventListener('mouseover', function () {
        this.style.backgroundColor = 'red';
    });


    item.addEventListener('mouseout', function () {
        this.style.backgroundColor = '';
    });
});


