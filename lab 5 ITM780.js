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

function enlargeImage(img) {
    var overlay = document.getElementById("overlay");
    var overlayImage = document.getElementById("overlayImage");

    overlay.style.display = "flex"; 
    overlayImage.src = img.src;    
}


function closeImage() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none"; // Hide the overlay
}

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
function zoom(element) {
    element.classList.toggle("imgZoom")
}

window.onload=function()
	{
		var user = document.getElementById("profile");
		console.log(user.value); 
		console.log(user.type); 
	}

var user = document.getElementById("profile"); 

localStorage.setItem("profile");
console.log(localStorage.getItem("profile"));
localStorage.removeItem("profile");