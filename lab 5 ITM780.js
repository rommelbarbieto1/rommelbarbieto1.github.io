document.getElementById("nameButton").onclick = function() {
    let name = prompt("Enter name:");
    if (name) {
        document.getElementById("nameDisplay").innerText = name
    } else {
        document.getElementById("nameDisplay").innerText = "Invalid. Please enter name."

    }
};

document.getElementaryById("Image").onclick = function() {
    this.style.width = "200px";
    this.style.height = "200px";
};

function hover(element) {
    element.style.color = "04AA6D"
}

function unhover(element) {
    element.style.color = "";
}