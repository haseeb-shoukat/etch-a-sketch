container = document.querySelector(".container")

for (let i = 0; i < 16; i++) {
    row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < 16; j++) {
        rowItem = document.createElement("div");
        rowItem.classList.add("row-item");
        row.appendChild(rowItem)
    }
    container.appendChild(row)
}

rowItems = document.querySelectorAll(".row-item");
rowItems.forEach(item => {
    item.addEventListener("mousedown", changeColor);
})

function changeColor(e) {
    this.style.backgroundColor = "black";
}