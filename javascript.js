const container = document.querySelector("#container");
const btn = document.querySelector("#btn");

let currentGridSize = 16;

function createGrid(size) {
    container.innerHTML = "";
    
    // Set CSS custom property for dynamic sizing
    container.style.setProperty('--grid-size', size);
    
    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        container.appendChild(gridItem);
    }
    
    // Add mouseover events to new grid items
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            item.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; // Fixed space
        });
    });
}

// Create initial 16x16 grid
createGrid(currentGridSize);

// Button click with prompt
btn.addEventListener("click", () => {
    const userInput = prompt("Enter grid size (1-100):", currentGridSize);
    
    if (userInput === null) return; // User clicked Cancel
    
    const newSize = parseInt(userInput);
    
    if (newSize >= 1 && newSize <= 100) {
        currentGridSize = newSize;
        createGrid(newSize);
    } else {
        alert("Please enter a number between 1 and 100");
    }
});
