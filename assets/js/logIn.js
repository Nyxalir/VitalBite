const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const toggleLink = document.getElementById("toggle-auth");
const title = document.getElementById("auth-title");

let isLogin = true;

toggleLink.addEventListener("click", (e) => {
  e.preventDefault();
  isLogin = !isLogin;

  if (isLogin) {
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
    title.textContent = "Iniciar Sesión";
    toggleLink.textContent = "Regístrate";
    toggleLink.previousSibling.textContent = "¿No tienes cuenta? ";
  } else {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
    title.textContent = "Crear Cuenta";
    toggleLink.textContent = "Inicia sesión";
    toggleLink.previousSibling.textContent = "¿Ya tienes cuenta? ";
  }
});
