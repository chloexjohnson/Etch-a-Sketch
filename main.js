// selectining container div as our query
const containerDiv = document.querySelector("#container");

function makeGrid(rows, columns) {

    // check for existing button to remove if played already
    // check for exisiting button to remove if played already
    // while the button is not null then it is going to remove the button
    while (document.querySelector("button") !== null) {
        document.querySelector("button").remove();
    }
    
    // create the grid 
    containerDiv.style.setProperty("--grid-rows", rows);
    containerDiv.style.setProperty("--grid-columns", columns);
    containerDiv.style.width = "960px"; // sets the width of the div to 960px wide when you invoke the button
    containerDiv.style.overflow = "hidden"; // helps with bleeding
    for (i = 0; i < (rows * columns); i++) {
        let square = document.createElement("div");
        square.style.minHeight = "0";
        square.style.minWidth = "0";
        square.style.overflow = "hidden";
        containerDiv.appendChild(square).className = "grid-item"; // appending square to the containerDiv
        
        // add event listen to check for background color presence
        square.addEventListener("mouseover", () => {
            
            // run check to see if background color is present, if NOT apply random color; apply 10% opacity interval
            if (square.style.backgroundColor == "") {
                let color = getRandomColor();
                square.style.backgroundColor = color;
                square.style.opacity = ".10";
                return square.style.backgroundColor;
            }
            // apply additional opacity at 10% intervals, hard stop at 1.0 (100%) IF background color is present
            if ((square.style.backgroundColor !== "") && (square.style.opacity <= "0.90")) {
                square.style.opacity = parseFloat(square.style.opacity) + .10;
                return square.style.backgroundColor;
            }    
        }) 
    }
    
    createButton();
}

function createButton() {
    const buttonDiv = document.querySelector("#buttonDiv"); // calls buttonDiv in the html file 
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset Grid!";
    resetButton.style.margin = "20px";
    buttonDiv.appendChild(resetButton); // appending the resetButton to buttonDiv

    // add event listen to button and prompt user/reset grid/throw error > 100
    resetButton.addEventListener('click', () => {
        document.querySelectorAll(".grid-item").forEach(e => e.remove());
        let userGridInput = prompt("Please enter the number of grid squares per side (Max: 100): ");
        if (userGridInput > 100) {
            alert("ERROR!  You specified a grid size larger than the max of 100.");
            return;
        }
        rows = userGridInput;
        columns = userGridInput;
        makeGrid(rows, columns);
        })
}

function getRandomColor() {
    let o = Math.round;
    let r = Math.random;
    let s = 255;
    return "rgb(" + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

// make initial call on page load as per project requirements
makeGrid(16, 16);





