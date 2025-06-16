# DVX Tecnologias e Soluções — Landing Page

Landing page institucional da **DVX Tecnologias e Soluções**, empresa especializada em tecnologia, marketing digital, branding, social media, UI/UX, desenvolvimento de software, análise e gerenciamento de redes.

## ✨ Visão Geral

Esta landing page apresenta os serviços, equipe, projetos e diferenciais da DVX, com foco em design moderno, interatividade e destaque visual. O projeto utiliza carrosséis de imagens, efeitos 3D e recursos visuais para proporcionar uma experiência envolvente ao visitante.

## 🚀 Funcionalidades

- **Seções institucionais**: Sobre, Serviços, Equipe, Projetos (Websites e Designers), Contato.
- **Carrosséis de imagens**: Implementados com [Swiper](https://swiperjs.com/).
- **Efeito visual 3D**: Partículas orbitais animadas com [Three.js](https://threejs.org/).
- **Design responsivo**: Utilização de [TailwindCSS](https://tailwindcss.com/) via CDN e CSS customizado.
- **Imagens e ícones**: Logos, projetos, ícones sociais e GIFs ilustrativos.
- **Backend opcional**: Servidor Express para servir arquivos estáticos (opcional).

## 📁 Estrutura do Projeto

```
/
├── public/
│   ├── css/
│   │   ├── globals.css
│   │   ├── style.css
│   │   └── swipe.css
│   ├── img/
│   │   └── ... (logos, projetos, ícones, GIFs)
│   ├── js/
│   │   ├── orbitEffect.js  # Efeito 3D com Three.js
│   │   └── ... (outros scripts)
│   └── index.html
├── app.js                  # Servidor Express (opcional)
├── package.json
└── README.md
```

## 🛠️ Tecnologias Utilizadas

- **HTML5, CSS3**
- **TailwindCSS** (via CDN)
- **Swiper** (carrosséis)
- **Three.js** (efeitos 3D)
- **JavaScript**
- **Express** (opcional, para backend)

## 📦 Instalação e Uso

### 1. Clonando o repositório

```bash
git clone https://github.com/seu-usuario/dvx-landing.git
cd dvx-landing
```

### 2. Executando localmente

#### Opção 1: Abrir diretamente

Abra o arquivo `public/index.html` no seu navegador.

#### Opção 2: Usando o servidor Express (Node.js)

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor:
   ```bash
   npm start
   ```
3. Acesse: [http://localhost:3000](http://localhost:3000)

> O backend é opcional e serve apenas para facilitar o desenvolvimento local ou deploy em ambientes Node.js.

## 🖼️ Imagens e Recursos

- Todas as imagens e ícones estão na pasta `public/img/`.
- Os GIFs ilustrativos e logos são de uso exclusivo da DVX.

## ✍️ Customização

- **CSS**: Personalize os estilos em `public/css/`.
- **Efeitos 3D**: O script `public/js/orbitEffect.js` pode ser ajustado para alterar o efeito visual.
- **Conteúdo**: Edite o `public/index.html` para atualizar textos, seções e projetos.

## 📚 Scripts Disponíveis

- `npm start` — Inicia o servidor Express para servir a landing page.
- `npm run build` — (Se aplicável) Script reservado para build, caso adicione ferramentas de build futuramente.

## 🤝 Contribuição

Sinta-se à vontade para abrir issues ou pull requests com sugestões, melhorias ou correções.

## 📄 Licença

Este projeto é de uso interno da DVX Tecnologias e Soluções. Para uso externo, consulte a equipe responsável.
