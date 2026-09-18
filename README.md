# ⚡ Hydra One — Landing Page Institucional

> **Plataforma institucional de alta conversão e autoridade visual para a Hydra One — Software House e Consultoria Técnica Especializada.**

---

## 📌 Sobre o Projeto

A **Hydra One** é uma empresa de tecnologia focada no desenvolvimento de produtos digitais de alto impacto — desde plataformas **SaaS escaláveis** e **Landing Pages de altíssima conversão** até **sistemas corporativos sob medida** e **consultoria técnica especializada** para acelerar, auditar e blindar a engenharia de outras empresas.

Esta landing page foi construída do zero seguindo os mais elevados padrões de design moderno, performance e experiência do usuário (UX/UI), sem dependência de frameworks pesados.

---

## ✨ Principais Funcionalidades & Diferenciais

- **Botão Flutuante do WhatsApp (FAB):** Botão fixo no canto inferior direito com pulso de radar dinâmico, tooltip informativo e redirecionamento direto para a conversa no WhatsApp.
- **Integração Total de Contato via WhatsApp:** Todos os botões de ação e planos de contratação direcionam para o WhatsApp com mensagens de abertura personalizadas por serviço (SaaS, Landing Page, ERP Corporativo, Auditoria, Squad Sênior e Advisory).
- **Briefing Inteligente no WhatsApp:** Modal de contato que coleta dados básicos do projeto (nome, empresa, escopo e detalhes) e monta automaticamente um briefing completo pronto para envio no WhatsApp.
- **Design Obsidian Glassmorphism:** Estética visual futurista e sofisticada com paleta dark obsidian, reflexos em vidro, iluminação sutil de bordas e gradientes dinâmicos.
- **Showcase Interativo de Código:** Alternador dinâmico de linguagens e stacks corporativas (Go, Python FastAPI, Rust, C# .NET 8 e Java Spring Boot 3) com syntax highlighting estilizado e cópia para área de transferência.
- **Toggle Dinâmico de Ofertas (Projetos vs Consultoria):** Alternância instantânea de modelos de investimento (Preço Fixo por Escopo vs Alocação Sênior / Retainer Mensal).
- **FAQ Interativo (Accordion):** Perguntas frequentes com animação suave de expansão e colapso via JavaScript.
- **Navegação Inteligente & Efeitos Visuais:** Header com efeito blur ao rolar a página, menu responsivo mobile e efeito glow radial que segue o cursor nos cards.
- **100% Responsivo:** Layout fluído adaptado para smartphones, tablets e monitores ultrawide.
- **Performance & SEO:** Código semântico leve, meta tags Open Graph completas e carregamento ultrarrápido sem dependência de bibliotecas externas pesadas.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
| :--- | :--- |
| **HTML5 Semântico** | Estrutura acessível, SEO otimizado e tags Open Graph para compartilhamento social |
| **Vanilla CSS3** | Design system modular com CSS Custom Properties (variáveis), Grid, Flexbox e animações |
| **Vanilla JavaScript (ES6+)** | Lógica interativa, modais, acordeões, showcase de código e manipulação do DOM |
| **Google Fonts** | Tipografia refinada com *Plus Jakarta Sans* (interface) e *JetBrains Mono* (código) |

---

## 📁 Estrutura de Diretórios

```text
hydra/
├── assets/
│   └── images/                     # Recursos visuais e renders 3D
│       ├── avatar-1.jpg            # Foto de depoimento de cliente
│       ├── hero-cubes.png          # Render 3D de obsidiana e cromo da dobra principal
│       ├── step-1-cube.jpg         # Visual da Fase 01 (Imersão & Escopo)
│       ├── step-2-polyhedron.jpg   # Visual da Fase 02 (Desenvolvimento Ágil)
│       └── step-3-hollow-cube.jpg  # Visual da Fase 03 (Homologação & Suporte)
├── css/
│   ├── variables.css               # Design tokens: paleta de cores, tipografia, bordas e sombras
│   └── styles.css                  # Estilos globais, componentes e responsividade
├── js/
│   └── main.js                     # Controladores de UI, modal de lead, acordeão e showcase
├── .gitignore                      # Regras de exclusão para Git
├── index.html                      # Ponto de entrada principal da aplicação
└── README.md                       # Documentação completa do projeto
```

---

## 🚀 Como Executar Localmente

Como o projeto é construído em tecnologias web nativas (HTML, CSS e JavaScript), você não precisa instalar nenhuma ferramenta externa para testá-lo.

### Opção 1: Abrir diretamente no navegador
Basta dar dois cliques no arquivo `index.html` ou arrastá-lo para qualquer navegador web moderno (Chrome, Edge, Firefox, Safari).

### Opção 2: Extensão Live Server (VS Code)
1. Abra a pasta do projeto no **Visual Studio Code**.
2. Instale a extensão **Live Server** (caso não a tenha).
3. Clique com o botão direito sobre `index.html` e selecione **"Open with Live Server"**.

### Opção 3: Servidor HTTP Local (Terminal)

**Via Python:**
```bash
# Python 3
python -m http.server 3000
```
Em seguida, acesse `http://localhost:3000` no seu navegador.

**Via Node.js (npx serve):**
```bash
npx serve .
```

---

## 🎨 Customização & Identidade Visual

As cores, fontes e variáveis globais do projeto estão centralizadas no arquivo [`css/variables.css`](css/variables.css):

- `--bg-primary`: Cor de fundo base (#070709).
- `--accent-purple` e `--accent-indigo`: Gradientes e destaques de ação.
- `--font-sans`: Fonte principal aplicada na interface.
- `--font-mono`: Fonte monoespaçada para blocos de código.

---

## 📱 Configuração do WhatsApp

Para definir o número oficial de atendimento da **Hydra One**, abra o arquivo [`js/main.js`](js/main.js) e altere a constante no topo do arquivo:

```javascript
const WHATSAPP_CONFIG = {
  // Informe o número com DDI e DDD (somente números)
  phone: '5547999127653', 
  defaultMessage: 'Olá! Gostaria de conversar com a equipe da Hydra One sobre um projeto.'
};
```

Ao alterar o número nesta constante, **todos os botões da página, o botão flutuante e o modal de briefing passam a utilizar o novo número automaticamente**.

---

## 📄 Licença & Direitos

© 2026 **Hydra One**. Todos os direitos reservados.  
Desenvolvimento de Software de Alto Padrão & Consultoria Técnica Especializada.
