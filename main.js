const containerDiv = document.querySelector("#container");

function makeRows(rows, columns) {
    containerDiv.computedStyleMap.setProperty("--grid-rows", rows);
    containerDiv.computedStyleMap.setProperty("--grid-columns", columns);
    console.log(containerDiv);
    console.log(rows);
    console.log(columns);
    for ( i = 0; i < (rows * columns); i++) {
        let square = document.createElement("div");
        square.innerText = (i + 1); // labels the squares
        containerDiv.appendChild(square).className = "grid-item";
    }
}

makeRows(16, 16);