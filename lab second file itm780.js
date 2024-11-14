// Make a function to enlarge profile picture
document.getElementById("profile-pic").addEventListener("click", function () {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay-img").src = this.src;
});

document.getElementById("overlay").addEventListener("click", function () {
    this.style.display = "none";
});

// Navigation hover effects
function hover(element) {
    element.style.backgroundColor = "#ddd";
}
function unhover(element) {
    element.style.backgroundColor = "";
}

// Default background color and Text color
function resetColors () {
    document.body.style.backgroundColor = "#8B0000"; 
    document.body.style.color = "#000000"; 
}
function resetTextSize() {
    document.body.style.fontSize = "1em";
}
function showAltText(imgId) {
    const altText = document.getElementById(imgId).alt;
    document.getElementById("AltText" + imgId.slice(-1)).innerText = altText;
}

