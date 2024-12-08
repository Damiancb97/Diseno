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


