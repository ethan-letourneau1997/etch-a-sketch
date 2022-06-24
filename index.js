
// container for grid

const container = document.createElement('section');
container.classList.add('container');
container.setAttribute("id", "container");

document.body.appendChild(container);


// create grid based on user input

let chooseSize = prompt("Choose how many blocks tall and wide the grid should be")

if (prompt != null){
    createGrid(chooseSize);
}

function createGrid(gridSize){
    for(i = 0; i < gridSize; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        document.getElementById('container').appendChild(row);

        for(l = 0; l < gridSize; l++){
            const block = document.createElement('div');
            block.classList.add('block');
            row.appendChild(block);
        }
    }
}


// add listener for color change

const elem = document.getElementsByClassName('block');

for(i = 0; i < elem.length; i++) {
    elem[i].addEventListener('mouseover', function(){
        this.style.backgroundColor = "black";
    }, false);
}

// create reset button

const reset = document.createElement('button');
reset.classList.add('reset');
reset.setAttribute('id', 'reset');
reset.innerHTML = 'RESET';
document.body.appendChild(reset);

reset.addEventListener('click', resetBlocks);

function resetBlocks(){
    for(i = 0; i < elem.length; i++) {
            elem[i].style.backgroundColor = "white";
    }
}



