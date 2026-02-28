const username = localStorage.getItem("username");

const welcome = document.getElementById("welcome");

if (username) {
    welcome.textContent = "Hello, " + username;
} else {
    window.location.href = "index.html";
}