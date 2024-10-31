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
