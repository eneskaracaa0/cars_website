const eposta = document.getElementById('eposta');
const names = document.getElementById("name");
const form = document.getElementById("form");
const btn = document.getElementById('btn');
const errorElement = document.getElementById('error');


btn.addEventListener('click', (e) => {
    let messages = [];

    if (eposta.value === "" || eposta.value == null) {
        messages.push("E-posta is required!");
    }

    if (names.value.length <= 6) {
        messages.push('Name must be min length six characters')

    }


    if (names.value.length >= 20) {
        messages.push("Name must be max length twenty characters");
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
        errorElement.style.color = 'red';
    }





});