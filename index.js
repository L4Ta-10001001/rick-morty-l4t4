// 1. Bloque de seguridad (Ruta protegida)
if (localStorage.getItem("l4t4_session") !== "active") {
  window.location.assign("login.html");
  throw new Error("Acceso no autorizado");
}

// Variables de estado
let allCharacters = [];

// Elementos del DOM
const grid = document.getElementById("characterGrid");
const searchInput = document.getElementById("searchInput");
const logoutBtn = document.getElementById("logoutBtn");

// Inicialización
document.addEventListener("DOMContentLoaded", initApp);

async function initApp() {
  setupLogout();
  await fetchCharacters();
  setupSearch();
}

// Fetch único (Obtiene los primeros 20 personajes)
async function fetchCharacters() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (!response.ok) throw new Error("Error en la red interdimensional");
    const data = await response.json();
    allCharacters = data.results;
    renderCharacters(allCharacters);
  } catch (error) {
    grid.innerHTML = `<p class="error-msg" style="display:block;">Error: ${error.message}</p>`;
  }
}

// Renderizado usando Template Strings
function renderCharacters(characters) {
  if (characters.length === 0) {
    grid.innerHTML =
      "<p>No se encontraron coincidencias en esta dimensión.</p>";
    return;
  }

  grid.innerHTML = characters
    .map(
      (char) => `
    <a href="detail.html?id=${char.id}" class="card">
      <img src="${char.image}" alt="${char.name}" loading="lazy">
      <div class="card-content">
        <h3>${char.name}</h3>
        <p><span class="status-indicator status-${char.status}"></span>${char.status} - ${char.species}</p>
      </div>
    </a>
  `,
    )
    .join("");
}

// Búsqueda en memoria (Array Filter)
function setupSearch() {
  searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = allCharacters.filter((char) =>
      char.name.toLowerCase().includes(term),
    );
    renderCharacters(filtered);
  });
}

// Cerrar sesión
function setupLogout() {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("l4t4_session");
    window.location.href = "login.html";
  });
}
