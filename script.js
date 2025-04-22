// Change text content dynamically
document.getElementById("main-title").textContent = "🎉 Welcome to Logic's JavaScript!";

// Modify CSS styles via JavaScript
const desc = document.getElementById("description");
desc.style.color = "teal";
desc.style.fontSize = "18px";

// Add or remove an element when a button is clicked
document.getElementById("toggle-btn").addEventListener("click", function () {
  const container = document.getElementById("dynamic");
  const message = document.getElementById("message");

  if (message) {
    container.removeChild(message);
  } else {
    const newMessage = document.createElement("p");
    newMessage.id = "message";
    newMessage.textContent = "🚀 This content was added dynamically!";
    newMessage.style.padding = "10px";
    newMessage.style.backgroundColor = "#f0f8ff";
    container.appendChild(newMessage);
  }
});

  