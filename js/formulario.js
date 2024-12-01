//Constantes con selección de ellas en html
const loginTab = document.getElementById('login');
const registerTab = document.getElementById('register');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

//Evento para activar el Log IN
loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
});

//Evento para activar Crear Cuenta
registerTab.addEventListener('click', () => {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
});

//Create Account
function CreateAccount() {
    let nombre;
    //expresion para pedir letras minúsculas y números
    const regeNombre = /^[a-z0-9]+$/;

    do {
        nombre = prompt("Por favor, ingresa tu nombre (solo letras minúsculas y números):");

        if (nombre.length < 3) {
            alert("El nombre debe tener al menos 3 caracteres. ");
        } else if (!regeNombre.test(nombre)) {
            alert("El nombre solo puede contener letras minúsculas y números.");
        } else {
            break;
        }
    } while (true);

    //password
    let password;

    do {
        password = prompt("Por favor, ingresa tu contraseña: \nDebe tener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.");

        const requisitos = new Map([
            ["mayuscula", false],
            ["minuscula", false],
            ["numero", false],
            ["especial", false]
        ]);

        for (let i = 0; i < password.length; i++) {
            let char = password[i];
            if (char >= 'A' && char <= 'Z') {
                requisitos.set("mayuscula", true);
            } else if (char >= 'a' && char <= 'z') {
                requisitos.set("minuscula", true);
            } else if (char >= '0' && char <= '9') {
                requisitos.set("numero", true);
            } else {
                requisitos.set("especial", true);
            }
        }

        //valida si todos los valores del Map son true
        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
        } else if (![...requisitos.values()].every(Boolean)) {
            alert("La contraseña debe incluir al menos: \n- Una letra mayúscula\n- Una letra minúscula\n- Un número\n- Un carácter especial.");
        } else {
            alert("La información se ha almacenado correctamente.");
            break;
        }
    } while (true);
}

