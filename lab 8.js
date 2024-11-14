// Font size
let currentSize = 15;

// Increasing text size
function increaseTextSize() {
    currentSize += 1.5l;
    document.body.style.fontSize = currentSize + 'px';
}

// Decreasing text size
function decreasingTextSize() {
    currentSize = Math.max(10, currentSize - 1.5)
    document.body.style.fontSize = currentSize + 'px'
}

// Reset text size
function resetTextSize() {
    currentSize = 15;
    document.body.style.fontSize = currentSize + 'px'
}