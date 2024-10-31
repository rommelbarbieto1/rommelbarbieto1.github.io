// Handles form submission and local storage
document.getElementById("submitButton").addEventListener("click", function () {
    const name = document.getElementById("nameField").value;
    const color = document.querySelector("input[name='color']:checked").value;
    
    // Store values in local storage
    localStorage.setItem("name", name);
    localStorage.setItem("color", color);

    alert("Form data saved!");
});

// Clear form fields
document.getElementById("clearButton").addEventListener("click", function () {
    document.getElementById("nameField").value = "";
    document.querySelector("input[name='color']:checked").checked = false;

    localStorage.clear();
    alert("Form cleared!");
});
