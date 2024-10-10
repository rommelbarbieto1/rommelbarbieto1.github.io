document.getElementById("nameButton").onclick = function() {
    let name = prompt("Enter name:");
    if (name) {
        document.getElementById("nameDisplay").innerText = name
    } else {
        document.getElementById("nameDisplay").innerText = "Invalid. Please enter name."

    }
};

document.getElementaryById("Image").onclick = function() {
    this.style.width = "50px";
    this.style.height = "50px";
};

function hover(element) {
    element.style.color = "04AA6D"
}

function unhover(element) {
    element.style.color = "";
}

document.getElementById("profilepic").onclick = function() {
    var overlay = document.getElementById("overlay");
    var overlayImg = document.getElementById("overlay-img");
    overlayImg.src = this.src; 
    overlay.style.display = "flex"; 
}

function closeImage() {
    document.getElementById("overlay").style.display = "none"; 
}