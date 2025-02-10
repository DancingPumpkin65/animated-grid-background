// --- Grid Setup ---
const container = document.querySelector('.grid-container');
const squareSize = 42; // 40px for the square + extra space for border/margin

// Calculate how many squares fit in one row to fully cover the viewport width
// This ensures that one copy’s width is a multiple of squareSize.
const oneCopyColumns = Math.ceil(window.innerWidth / squareSize);
const gridCopyWidth = oneCopyColumns * squareSize; // Exact width of one grid copy

// We'll build two copies of the grid side by side
const totalColumns = oneCopyColumns * 2;
const rows = Math.ceil(window.innerHeight / squareSize);

// Set the container width to be exactly two copies wide.
container.style.width = `${gridCopyWidth * 2}px`;

// Create the grid squares.
function createGrid() {
for (let i = 0; i < totalColumns * rows; i++) {
const square = document.createElement('div');
square.classList.add('grid-square');
container.appendChild(square);
}
}
createGrid();

// --- Continuous Movement Animation ---
let offset = 0;
const speed = 1; // Speed factor in pixels per frame baseline
let lastTime = performance.now();

function animate(currentTime) {
const deltaTime = currentTime - lastTime;
lastTime = currentTime;
// Update offset based on elapsed time for smoother animation.
offset -= speed * (deltaTime / 16.67); // 16.67ms ~ 60fps

// Use gridCopyWidth as the repeating unit.
const modOffset = ((offset % gridCopyWidth) + gridCopyWidth) % gridCopyWidth;

// Apply the transformation so that one complete copy scrolls before repeating.
container.style.transform = `translate3d(${-modOffset}px, 0, 0)`;
requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

// --- Random Light-Up Effect (Unchanged) ---
function randomizeLitSquares() {
const squares = document.querySelectorAll('.grid-square');
const total = squares.length;
const count = Math.min(10, total);
const indices = new Set();

// Select 10 unique random squares.
while (indices.size < count) {
indices.add(Math.floor(Math.random() * total));
}
const indicesArray = Array.from(indices);

// Predefined set of colors.
const colorOptions = [
"#c4867f", "#8d5f6a", "#9fb8bf", "#f5d1a7", "#3c3b54",
"#654d5c", "#6b6474", "#68727d", "#8491a5", "#544c54"
];
// Shuffle and select colors.
const shuffledColors = colorOptions.sort(() => 0.5 - Math.random()).slice(0, count);

// Fade in: Apply the colors.
indicesArray.forEach((idx, i) => {
squares[idx].style.backgroundColor = shuffledColors[i];
});

// Fade out after 2 seconds.
setTimeout(() => {
indicesArray.forEach(idx => {
    squares[idx].style.backgroundColor = '#ffffff';
});
}, 2000);
}

// Run the effect every 4 seconds.
setInterval(randomizeLitSquares, 4000);