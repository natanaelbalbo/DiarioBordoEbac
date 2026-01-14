# 📔 Diário de Bordo - PWA

> **Atividade Prática - EBAC**
> Desenvolvimento de Aplicativo Web Progressivo (PWA)

![PWA](https://img.shields.io/badge/PWA-Progressive%20Web%20App-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 Sobre o Projeto

**Diário de Bordo** é um Aplicativo Web Progressivo (PWA) desenvolvido como atividade prática do curso EBAC. A aplicação permite registrar atividades diárias de forma simples e eficiente, funcionando offline, podendo ser instalada na tela inicial do dispositivo e mantendo todos os dados salvos localmente.

### 🎯 Objetivo da Atividade

Desenvolver um PWA completo que atenda aos seguintes requisitos:
- ✅ Registro de atividades com título, descrição e data
- ✅ Listagem e remoção de entradas
- ✅ Transformação em PWA com manifest.json
- ✅ Service Worker funcional para modo offline
- ✅ Implementação do evento beforeinstallprompt
- ✅ Persistência de dados com localStorage
- ✅ Interface responsiva

## ✨ Funcionalidades

- ✅ **Criar entradas** com título, descrição e data
- 📋 **Listar** todas as entradas registradas
- 🗑️ **Remover** entradas indesejadas
- 💾 **Persistência de dados** com localStorage
- 📱 **Instalável** na tela inicial (PWA)
- 🌐 **Funciona offline** através de Service Worker
- 📱 **Responsivo** - funciona em mobile e desktop

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Service Worker API
- LocalStorage API
- PWA (Progressive Web App)

## 📦 Estrutura do Projeto

```
DiarioBordoEbac/
│
├── index.html              # Estrutura HTML da aplicação
├── style.css               # Estilos e responsividade
├── script.js               # Lógica da aplicação
├── manifest.json           # Configuração PWA
├── service-worker.js       # Service Worker para offline
├── README.md               # Documentação do projeto
│
└── icons/                  # Pasta de ícones
    ├── icon-192x192.png    # Ícone 192x192px
    ├── icon-512x512.png    # Ícone 512x512px
    └── README.md           # Instruções para ícones
```

## 🎯 Como Usar

### 1. Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/DiarioBordoEbac.git
cd DiarioBordoEbac
```

### 2. Servir a Aplicação
A aplicação precisa ser servida através de um servidor HTTP (não funciona abrindo diretamente o arquivo HTML).

**Opções:**

#### Opção A: Usando Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Opção B: Usando Node.js (http-server)
```bash
npx http-server -p 8000
```

#### Opção C: Usando VS Code Live Server
- Instale a extensão "Live Server" no VS Code
- Clique com botão direito no `index.html`
- Selecione "Open with Live Server"

### 3. Acessar a Aplicação
Abra seu navegador e acesse:
```
http://localhost:8000
```

## ✅ Requisitos da Atividade Atendidos

### Funcionalidades da Aplicação
- ✅ **Criar entradas** com título, descrição e data
- ✅ **Listar** todas as entradas registradas
- ✅ **Remover** entradas com confirmação

### Transformação em PWA
- ✅ **manifest.json** configurado com:
  - `name`: "Diário de Bordo"
  - `short_name`: "DiárioBordo"
  - `start_url`: "/"
  - `display`: "standalone"
  - `theme_color`: "#2196F3"
  - `background_color`: "#ffffff"
- ✅ **Ícones** nas resoluções 192x192 e 512x512
- ✅ **Service Worker** registrado e funcional
- ✅ **Funcionalidade offline** mantendo entradas salvas
- ✅ **beforeinstallprompt** implementado para instalação

### Persistência de Dados
- ✅ **localStorage** para salvar dados persistentemente

### Responsividade
- ✅ Interface adaptada para **mobile e desktop**
- ✅ Breakpoints em 768px e 480px

## 📱 Instalando como PWA

1. Abra a aplicação no navegador (Chrome, Edge, Safari)
2. Clique no botão **"📥 Instalar Aplicativo"** que aparece na página
3. Ou use o menu do navegador:
   - Chrome: Menu > Instalar Diário de Bordo
   - Edge: Menu > Aplicativos > Instalar este site como um aplicativo
   - Safari (iOS): Compartilhar > Adicionar à Tela de Início

## 🧪 Testando o PWA

### Usando o Lighthouse (Chrome DevTools)

1. Abra as DevTools (F12)
2. Vá para a aba "Lighthouse"
3. Selecione "Progressive Web App"
4. Clique em "Generate report"
5. Verifique se todos os critérios estão sendo atendidos

### Testando Offline

1. Abra as DevTools (F12)
2. Vá para a aba "Network"
3. Marque a opção "Offline"
4. Recarregue a página - ela deve continuar funcionando!

## � Entrega do Projeto

### Arquivos Incluídos
✅ `index.html` - Estrutura HTML da aplicação
✅ `style.css` - Estilos e responsividade
✅ `script.js` - Lógica completa com localStorage e PWA
✅ `manifest.json` - Configuração PWA
✅ `service-worker.js` - Service Worker para modo offline
✅ `icons/` - Pasta com ícones 192x192 e 512x512
✅ `README.md` - Esta documentação

### Repositório GitHub
O projeto está disponível em repositório público no GitHub com todos os arquivos necessários.

---

## �💡 Funcionalidades PWA Implementadas

- ✅ Manifest.json configurado
- ✅ Service Worker registrado
- ✅ Cache de arquivos estáticos
- ✅ Funcionalidade offline
- ✅ Instalável
- ✅ Ícones configurados
- ✅ Theme color definida
- ✅ beforeinstallprompt implementado

## 📝 Características Técnicas

### LocalStorage
- Dados persistem mesmo após fechar o navegador
- Limite de ~5-10MB (suficiente para milhares de entradas)
- Dados salvos apenas localmente (privacidade total)

### Service Worker
- Estratégia Cache First
- Arquivos estáticos em cache
- Funciona offline completamente
- Atualização automática de cache

### Responsividade
- Layout adaptável para mobile e desktop
- Breakpoints: 768px e 480px
- Touch-friendly para dispositivos móveis

## 🐛 Solução de Problemas

### PWA não está instalável
- Verifique se os ícones estão na pasta `icons/`
- Confirme que está acessando via HTTPS ou localhost
- Use o Lighthouse para identificar problemas

### Dados não estão sendo salvos
- Verifique se o navegador permite localStorage
- Limpe o cache e tente novamente
- Verifique o console para erros

### Service Worker não está funcionando
- Confirme que está usando um servidor HTTP (não file://)
- Verifique o console para erros de registro
- Limpe o cache e recarregue

## 📄 Informações do Projeto

**Instituição:** EBAC - Escola Britânica de Artes Criativas e Tecnologia
**Curso:** Desenvolvimento Web
**Atividade:** Desenvolvimento de PWA - Diário de Bordo
**Data:** Janeiro de 2026

---

**Desenvolvido com ❤️ e JavaScript**
