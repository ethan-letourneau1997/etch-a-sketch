

const container = document.createElement('section');
container.classList.add('container');
container.setAttribute("id", "container");

document.body.appendChild(container);


function createGrid(gridSize){
    for(i = 0; i < gridSize; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        document.getElementById("container").appendChild(row);

        for(l = 0; l < gridSize; l++){
            const block = document.createElement('div');
            block.classList.add('block');
            row.appendChild(block);
        }
    }
}

createGrid(16);

