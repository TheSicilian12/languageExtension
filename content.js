// content.js

let isDragging = false;
let offsetX, offsetY;

// Create a div element for the static box
const staticBox = document.createElement("div");
staticBox.id = "static-box";
staticBox.style.width = "80px";
staticBox.style.height = "80px";
staticBox.style.borderRadius = "15px";
staticBox.style.border = "1px solid blue";
staticBox.style.backgroundColor = "transparent";
staticBox.style.position = "fixed";
staticBox.style.top = "10px";
staticBox.style.left = "10px";
staticBox.style.zIndex = "9999";
staticBox.style.cursor = "move";

// Create a div element for the info gather box
const infoBox = document.createElement("div");
infoBox.id = "info-box";
infoBox.style.width = "80px";
infoBox.style.height = "80px";
infoBox.style.borderRadius = "15px";
infoBox.style.border = "1px solid blue";
infoBox.style.backgroundColor = "blue";
infoBox.style.position = "fixed";
infoBox.style.top = "10px";
infoBox.style.left = "10px";
infoBox.style.zIndex = "9999";
infoBox.style.cursor = "move";
infoBox.style.display = "none";

// Function to handle mouse down event
const onMouseDown = (e) => {
    isDragging = true;
    offsetX = e.clientX - staticBox.getBoundingClientRect().left;
    offsetY = e.clientY - staticBox.getBoundingClientRect().top;
};

// Function to handle mouse move event
const onMouseMove = (e) => {
    if (isDragging) {
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;
        staticBox.style.left = x + "px";
        staticBox.style.top = y + "px";

        infoBox.style.left = x + "px";
        infoBox.style.top = y + "px";
    }
};

// Function to handle mouse up event
const onMouseUp = () => {
    isDragging = false;
};

const onStaticBoxClick = () => {
    infoBox.style.display = "block";
    staticBox.style.display = "none";
}

const onInfoBoxClick = () => {
    staticBox.style.display = "block";
    infoBox.style.display = "none";
}

// Attach event listeners
staticBox.addEventListener("mousedown", onMouseDown);
staticBox.addEventListener("click", onStaticBoxClick);

infoBox.addEventListener("mousedown", onMouseDown);
infoBox.addEventListener("click", onInfoBoxClick);

document.addEventListener("mousemove", onMouseMove);
document.addEventListener("mouseup", onMouseUp);

// Append the static box to the body
document.body.appendChild(staticBox);
document.body.appendChild(infoBox);
