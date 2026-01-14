// Estado da aplicação
let entries = [];
let deferredPrompt;

// Elementos DOM
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

// Registrar Service Worker
function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("service-worker.js")
      .then((registration) => {
        console.log("Service Worker registrado com sucesso:", registration);
      })
      .catch((error) => {
        console.error("Erro ao registrar Service Worker:", error);
      });
  }
}

// Evento beforeinstallprompt para instalação PWA
window.addEventListener("beforeinstallprompt", (e) => {
  // Previne o prompt automático
  e.preventDefault();
  // Armazena o evento para usar depois
  deferredPrompt = e;
  // Mostra o botão de instalação
  installBtn.style.display = "block";
});

// Evento de clique no botão de instalação
installBtn.addEventListener("click", async () => {
  if (!deferredPrompt) {
    return;
  }
  // Mostra o prompt de instalação
  deferredPrompt.prompt();
  // Espera pela escolha do usuário
  const { outcome } = await deferredPrompt.userChoice;
  console.log(
    `Usuário ${outcome === "accepted" ? "aceitou" : "recusou"} a instalação`
  );
  // Limpa o prompt
  deferredPrompt = null;
  // Esconde o botão
  installBtn.style.display = "none";
});

// Evento após a instalação
window.addEventListener("appinstalled", () => {
  console.log("PWA foi instalado com sucesso!");
  installBtn.style.display = "none";
});

// Define a data de hoje como padrão
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
                    🗑️ Remover
                </button>
            </div>
        </div>
    `
    )
    .join("");
}

// Remover entrada
function deleteEntry(id) {
  if (confirm("Tem certeza que deseja remover esta entrada?")) {
    entries = entries.filter((entry) => entry.id !== id);
    saveEntries();
    displayEntries();
    showNotification("Entrada removida com sucesso!");
  }
}

// Formatar data
function formatDate(dateString) {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

// Escapar HTML para prevenir XSS
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

// Notificação simples
function showNotification(message) {
  // Cria elemento de notificação
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

  // Remove após 3 segundos
  setTimeout(() => {
    notification.style.animation = "slideIn 0.3s ease-out reverse";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}
