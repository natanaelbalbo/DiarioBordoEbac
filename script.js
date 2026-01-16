let entries = [];
let deferredPrompt;
const entryForm = document.getElementById("entryForm");
const titleInput = document.getElementById("title");
const dateInput = document.getElementById("date");
const descriptionInput = document.getElementById("description");
const entriesList = document.getElementById("entriesList");
const installBtn = document.getElementById("installBtn");

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  loadEntries();
  displayEntries();
  setTodayDate();
  registerServiceWorker();
});

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("service-worker.js")
      .catch((error) => {
        console.error("Erro ao registrar Service Worker:", error);
      });
  }
}

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = "block";
});

installBtn.addEventListener("click", async () => {
  if (!deferredPrompt) {
    return;
  }
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installBtn.style.display = "none";
});

window.addEventListener("appinstalled", () => {
  installBtn.style.display = "none";
});
function setTodayDate() {
  const today = new Date().toISOString().split("T")[0];
  dateInput.value = today;
}

// Carregar entradas do localStorage
function loadEntries() {
  const stored = localStorage.getItem("diarioBordoEntries");
  if (stored) {
    try {
      entries = JSON.parse(stored);
    } catch (error) {
      console.error("Erro ao carregar entradas:", error);
      entries = [];
    }
  }
}

// Salvar entradas no localStorage
function saveEntries() {
  try {
    localStorage.setItem("diarioBordoEntries", JSON.stringify(entries));
  } catch (error) {
    console.error("Erro ao salvar entradas:", error);
    alert("Erro ao salvar dados. Verifique o espaço disponível no navegador.");
  }
}

// Adicionar nova entrada
entryForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newEntry = {
    id: Date.now(),
    title: titleInput.value.trim(),
    date: dateInput.value,
    description: descriptionInput.value.trim(),
    createdAt: new Date().toISOString(),
  };

  entries.unshift(newEntry); // Adiciona no início da lista
  saveEntries();
  displayEntries();

  // Limpa o formulário
  entryForm.reset();
  setTodayDate();

  // Feedback visual
  showNotification("Entrada adicionada com sucesso!");
});

// Exibir entradas
function displayEntries() {
  if (entries.length === 0) {
    entriesList.innerHTML =
      '<p class="no-entries">Nenhuma entrada registrada ainda.</p>';
    return;
  }

  entriesList.innerHTML = entries
    .map(
      (entry) => `
        <div class="entry-card">
            <div class="entry-header">
                <h3 class="entry-title">${escapeHtml(entry.title)}</h3>
                <span class="entry-date">${formatDate(entry.date)}</span>
            </div>
            <p class="entry-description">${escapeHtml(entry.description)}</p>
            <div class="entry-actions">
                <button class="btn btn-danger" onclick="deleteEntry(${
                  entry.id
                })">
                    Remover
                </button>
            </div>
        </div>
    `
    )
    .join("");
}

function deleteEntry(id) {
  if (confirm("Tem certeza que deseja remover esta entrada?")) {
    entries = entries.filter((entry) => entry.id !== id);
    saveEntries();
    displayEntries();
    showNotification("Entrada removida com sucesso!");
  }
}

function formatDate(dateString) {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function showNotification(message) {
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #4CAF50;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;

  // Adiciona animação
  const style = document.createElement("style");
  style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
  document.head.appendChild(style);

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideIn 0.3s ease-out reverse";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}
