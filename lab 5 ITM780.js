function showNamePrompt(){
    const name = promtpt("Enter name:")
    if (name) {
        document.getElementById("displayName").innerText = name;
    }
}

function enlargeImage(){
    const image = document.getElementById("Image");
    image.style.transform = "scale(1.5)";
}