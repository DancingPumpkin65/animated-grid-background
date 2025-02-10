# Infinite Moving Grid with Fading Colors

This project creates an infinite scrolling grid animation with a dynamic color fading effect. The grid moves continuously from right to left, and random squares light up with different colors before fading back to white.

## Features
- **Smooth infinite scrolling**: The grid moves seamlessly without visible jumps.
- **Random color fading effect**: Selected squares change color and fade back every few seconds.
- **Optimized performance**: Uses GPU-accelerated transforms for smooth animation.

## Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**

## How It Works
1. The script dynamically generates a grid based on the viewport size.
2. Two identical copies of the grid are placed side by side to ensure seamless wrapping.
3. The grid scrolls continuously using `requestAnimationFrame`, with smooth transitions.
4. Every 4 seconds, 10 random squares change to a new color and fade back after 2 seconds.

## Setup & Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/infinite-grid-animation.git
   ```
2. Open `index.html` in a browser.
3. Enjoy the animation!

## Customization
You can modify the following parameters inside `script.js`:
- **Grid square size**: Adjust `squareSize`.
- **Animation speed**: Change `speed` in the `animate()` function.
- **Color palette**: Modify the `colorOptions` array.

## Demo
Include a GIF or link to a live demo if hosted.

## License
This project is open-source and available under the MIT License.
