// Protección de ruta
// 1. Bloque de seguridad (Ruta protegida)
if (localStorage.getItem("l4t4_session") !== "active") {
  window.location.assign("login.html");
  throw new Error("Acceso no autorizado");
}
const detailContainer = document.getElementById("detailContainer");
const backBtn = document.getElementById("backBtn");

document.addEventListener("DOMContentLoaded", () => {
  setupBackBtn();
  loadCharacterDetail();
});

function setupBackBtn() {
  backBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}

async function loadCharacterDetail() {
  // Extraer ID de la Query String
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    detailContainer.innerHTML =
      '<p class="error-msg" style="display:block;">ID de sujeto no válido.</p>';
    return;
  }

  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`,
    );
    if (!response.ok)
      throw new Error("Sujeto no encontrado en la base de datos.");
    const char = await response.json();
    renderDetail(char);
  } catch (error) {
    detailContainer.innerHTML = `<p class="error-msg" style="display:block;">Error: ${error.message}</p>`;
  }
}

function renderDetail(char) {
  detailContainer.innerHTML = `
    <div class="detail-card">
      <img src="${char.image}" alt="${char.name}">
      <div class="detail-info">
        <h2>${char.name}</h2>
        <p><strong>Estado:</strong> <span class="status-indicator status-${char.status}"></span> ${char.status}</p>
        <p><strong>Especie:</strong> ${char.species}</p>
        <p><strong>Género:</strong> ${char.gender}</p>
        <p><strong>Origen:</strong> ${char.origin.name}</p>
        <p><strong>Ubicación actual:</strong> ${char.location.name}</p>
      </div>
    </div>
  `;
}
