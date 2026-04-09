// Principio SRP: Este archivo solo maneja la autenticación inicial.
document.addEventListener("DOMContentLoaded", () => {
  // Si ya hay sesión, redirigir
  if (localStorage.getItem("l4t4_session") === "active") {
    window.location.href = "index.html";
  }

  const form = document.getElementById("loginForm");
  const errorMsg = document.getElementById("errorMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (user === "admin" && pass === "1234") {
      localStorage.setItem("l4t4_session", "active");
      window.location.href = "index.html";
    } else {
      errorMsg.style.display = "block";
    }
  });
});
