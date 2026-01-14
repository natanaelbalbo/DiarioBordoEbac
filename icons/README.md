# Ícones do PWA - Diário de Bordo

Este diretório deve conter os ícones da aplicação PWA.

## Ícones Necessários:

1. **icon-192x192.png** - Ícone de 192x192 pixels
2. **icon-512x512.png** - Ícone de 512x512 pixels

## Como Criar os Ícones:

### Opção 1: Usando Ferramentas Online (Recomendado)
- Acesse: https://www.favicon-generator.org/ ou https://realfavicongenerator.net/
- Faça upload de uma imagem (pode ser um logo ou design simples)
- Gere os ícones nos tamanhos necessários
- Baixe e coloque nesta pasta

### Opção 2: Usando Ferramentas de Design
- Use o Photoshop, GIMP, Figma ou Canva
- Crie duas imagens com fundo azul (#2196F3) e um emoji 📔 ou texto "DB"
- Exporte nos tamanhos:
  - 192x192 pixels (icon-192x192.png)
  - 512x512 pixels (icon-512x512.png)

### Opção 3: Temporário para Testes
Para desenvolvimento rápido, você pode criar ícones simples usando código SVG convertido para PNG:

**Recomendação de Design:**
- Cor de fundo: #2196F3 (azul do tema)
- Ícone/símbolo: 📔 (emoji de caderno) ou letras "DB"
- Formato: PNG com transparência ou fundo sólido

## Importante:
- Os arquivos devem ter exatamente esses nomes
- Devem estar no formato PNG
- São necessários para o PWA funcionar corretamente
- O manifest.json já está configurado para usar esses ícones

## Para Testar Sem Ícones:
Você pode comentar temporariamente as linhas de ícones no manifest.json, mas o PWA não será instalável até que os ícones sejam adicionados.
