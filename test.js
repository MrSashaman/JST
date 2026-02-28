

const minage = 13;

const inputElement = document.getElementById('username');
const inputElement2 = document.getElementById('password');
const inputElement3 = document.getElementById('age');
const button = document.getElementById("btn");

button.addEventListener("click", function () {

    const usernameValue = inputElement.value;
    const passwordValue = inputElement2.value;
    const ageValue = Number(inputElement3.value);

    if (ageValue < minage) {
        alert("Возраст должен быть 13+");
        return;
    }

    const savedUser = localStorage.getItem("username");
    const savedPass = localStorage.getItem("password");

    if (!savedUser) {
        localStorage.setItem("username", usernameValue);
        localStorage.setItem("password", passwordValue);

        alert("Регистрация успешна!");
        window.location.href = "main.html";
    } else {
        if (
            usernameValue === savedUser &&
            passwordValue === savedPass
        ) {
            alert("Успешный вход!");
            window.location.href = "main.html";
        } else {
            alert("Неверный логин или пароль!");
        }
    }

});