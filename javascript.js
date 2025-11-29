const container = document.querySelector("#container");

const btn = document.querySelector("#btn")


const gridSize = 16;
for (let i = 0; i < gridSize * gridSize; i++){
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    container.appendChild(gridItem);
}

