const container = document.querySelector(".container")
createGrid(16);

const dimensions = document.querySelector("#dimensions");
dimensions.addEventListener("click", handlePrompt)

const clear = document.querySelector("#clear");
clear.addEventListener("click", clearContainer)


function createGrid(n) {
    for (let i = 0; i < n; i++) {
        row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < n; j++) {
            rowItem = document.createElement("div");
            rowItem.classList.add("row-item");
            row.appendChild(rowItem)
        }
        container.appendChild(row)
    }

    rowItems = document.querySelectorAll(".row-item");
    rowItems.forEach(item => {
        item.addEventListener("mouseover", changeColor);
    })
}

function handlePrompt() {
    const size = prompt("Enter the number of boxes (vertically and horizontally):")
    if ((!size) || (size > 66) || (!Number.isInteger(parseInt(size)))) return;
    container.innerHTML = "";
    createGrid(parseInt(size));
}

function clearContainer(e) {
    rowItems = document.querySelectorAll(".row-item");
    rowItems.forEach(item => {
        item.style.backgroundColor = "white";
    })
}

function changeColor(e) {
    this.style.backgroundColor = "black";
}

