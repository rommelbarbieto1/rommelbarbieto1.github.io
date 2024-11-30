// Create a button that will propmt a user to type in thie rname on my homepage.
document.getElementById("nameButton").onclick = function() {
    let name = prompt("Enter name:");
    if (name) {
        document.getElementById("nameDisplay").innerText = name
    } else {
        document.getElementById("nameDisplay").innerText = "Invalid. Please enter name."

    }
};
// Create an image and make sure it is enlarged when clicked.
document.getElementaryById("Image").onclick = function() {
    this.style.width = "50px";
    this.style.height = "50px";
};
//Create a navigation menu with at least three navigation items and two menu items. 
function hover(element) {
    element.style.color = "04AA6D"
}
//Include an onmouseover/onmouseout event for your nav items.//
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

function nameprompt() {
    var message;
    var your_name = prompt("Please enter your name:");
    if (your_name == null || your_name == "") {
        message = "Cancelled prompt. Please try again.";
    } else {
        message = "You are " + your_name + "!"
    }
    document.getElementById("ButtonPrompt").innerHTML = message;
  }