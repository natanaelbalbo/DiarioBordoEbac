# 📔 Diário de Bordo

Aplicativo Web Progressivo (PWA) para registro de atividades diárias desenvolvido como parte do curso de Engenheiro Front-end da EBAC. Uma aplicação moderna que demonstra a implementação completa das tecnologias PWA, incluindo instalabilidade, funcionamento offline e persistência de dados.

## 🎯 Sobre o Projeto

Este PWA foi criado para resolver o desafio de desenvolver uma aplicação de registro de atividades que funcione perfeitamente mesmo sem conexão com a internet. O projeto foca em oferecer uma experiência nativa, podendo ser instalado no dispositivo do usuário e mantendo total funcionalidade offline.

### Problema Resolvido

Aplicações web tradicionais dependem de conexão constante com a internet e não podem ser instaladas como apps nativos. Este projeto aborda essas limitações usando:

- **Service Worker**: Cache inteligente de recursos para funcionamento 100% offline
- **Manifest.json**: Permite instalação na tela inicial como aplicativo nativo
- **LocalStorage**: Persistência de dados local, garantindo que nenhuma entrada seja perdida
- **Instalabilidade**: Evento beforeinstallprompt implementado para controle total da experiência de instalação

## 📚 O Que Aprendi

Durante o desenvolvimento deste projeto, aprofundei conhecimentos em:

- **Service Workers**: Ciclo de vida, estratégias de cache e interceptação de requisições
- **PWA APIs**: Implementação completa de manifest.json e configurações necessárias
- **Cache API**: Gerenciamento de cache para assets estáticos e estratégia Cache First
- **LocalStorage**: Manipulação de dados persistentes no navegador
- **BeforeInstallPrompt**: Controle da experiência de instalação do PWA
- **Offline First**: Desenvolvimento de aplicações que funcionam independente da conexão
- **Responsive Design**: Interface adaptável para diferentes tamanhos de tela
- **Event Handling**: Gerenciamento de eventos de instalação e atualização do Service Worker


## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica da aplicação
- **CSS3** - Estilização e responsividade
- **JavaScript (Vanilla)** - Lógica da aplicação
- **Service Worker API** - Funcionalidade offline
- **LocalStorage API** - Persistência de dados
- **PWA (Progressive Web App)** - Instalabilidade e experiência nativa

## ⚙️ Instalação e Uso

### Pré-requisitos

- Navegador moderno (Chrome, Edge, Firefox ou Safari)
- Servidor HTTP local

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/DiarioBordoEbac.git

# Entre na pasta do projeto
cd DiarioBordoEbac
```

### Executar em Desenvolvimento

**Opção 1 - Python:**
```bash
python -m http.server 8000
```

**Opção 2 - Node.js:**
```bash
npx http-server -p 8000
```

**Opção 3 - VS Code Live Server:**
- Instale a extensão "Live Server"
- Clique com botão direito no `index.html`
- Selecione "Open with Live Server"

Acesse `http://localhost:8000` no navegador.

## 📁 Estrutura do Projeto

```
DiarioBordoEbac/
├── index.html              # Estrutura HTML da aplicação
├── style.css               # Estilos e responsividade
├── script.js               # Lógica da aplicação e PWA
├── manifest.json           # Configuração PWA
├── service-worker.js       # Service Worker para offline
└── icons/                  # Ícones do aplicativo
    ├── icon-192x192.png
    └── icon-512x512.png
```

## 📱 Como Instalar o PWA

1. Acesse a aplicação no navegador
2. Clique no botão **"📥 Instalar Aplicativo"** que aparece na página
3. Ou use o menu do navegador:
   - **Chrome/Edge**: Menu → Instalar Diário de Bordo
   - **Safari (iOS)**: Compartilhar → Adicionar à Tela de Início

## 🎨 Features

- 📝 Criação de entradas com título, descrição e data
- 📋 Listagem de todas as atividades registradas
- 🗑️ Remoção de entradas com confirmação
- 💾 Persistência local de dados (nenhuma perda de informações)
- 📱 Design responsivo para mobile, tablet e desktop
- 🔌 Funcionamento 100% offline
- ⚡ Instalação na tela inicial como app nativo
- 🎯 Interface limpa e intuitiva

## 🛠️ Características Técnicas

### Service Worker
- Estratégia **Cache First** para assets estáticos
- Cache de todos os arquivos necessários
- Atualização automática em novas versões
- Interceptação de requisições para modo offline

### LocalStorage
- Armazenamento persistente de dados
- Capacidade de ~5-10MB
- Dados salvos apenas localmente (privacidade garantida)
- Sincronização em tempo real

### Responsividade
- Breakpoints em 768px (tablet) e 480px (mobile)
- Layout fluido e adaptável
- Touch-friendly para dispositivos móveis

## 📝 Licença

Projeto desenvolvido para fins educacionais no curso EBAC.

---

**Desenvolvido com JavaScript Vanilla e PWA APIs**
