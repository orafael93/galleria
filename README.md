# galleria.

Uma galeria de arte interativa e elegante, apresentando obras-primas famosas com um design moderno e responsivo.

## 🎬 Demonstração

![Demonstração do Password Generator](./project-in-action.gif)

## 🎨 Sobre o Projeto

**galleria.** é uma aplicação web que exibe uma coleção curada de pinturas icônicas da história da arte. O projeto apresenta uma galeria em grid masonry com funcionalidade de slideshow, permitindo aos usuários explorar cada obra de arte com informações detalhadas sobre o artista, ano de criação e contexto histórico.

## ✨ Características

- **Masonry Grid Layout**: Grid responsivo implementado com **JavaScript puro**, sem uso de bibliotecas externas
- **Slideshow Interativo**: Navegação fluida entre obras de arte com animações suaves
- **Design Responsivo**: Layout adaptável para diferentes tamanhos de tela
- **Informações Detalhadas**: Cada obra inclui descrição, artista, ano e link para fonte
- **Performance Otimizada**: Assets otimizados e bundle eficiente

## 🛠️ Tecnologias

Este projeto foi desenvolvido utilizando **apenas as tecnologias fundamentais do front-end**, sem frameworks ou bibliotecas de UI:

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**

### Module Bundler

O projeto utiliza **Webpack** como module bundler, configurado **manualmente** de acordo com as necessidades específicas do projeto:

- Configuração personalizada do Webpack
- Loaders para CSS e assets
- HtmlWebpackPlugin para geração do HTML
- CopyWebpackPlugin para assets estáticos
- Webpack Dev Server para desenvolvimento local com hot reload

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/orafael93/galleria.git
cd galleria
```

2. Instale as dependências:

```bash
npm install
```

### Desenvolvimento

Para rodar o projeto em modo de desenvolvimento com hot reload:

```bash
npm start
```

O projeto será aberto automaticamente no navegador em `http://localhost:8080`

### Build para Produção

Para gerar o bundle otimizado para produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

## 🎯 Destaques Técnicos

### Masonry Grid com JavaScript Puro

O layout em grid masonry foi implementado **do zero usando JavaScript puro**, sem bibliotecas como Masonry.js ou Isotope. A implementação:

- Calcula dinamicamente o posicionamento dos elementos
- Adapta-se automaticamente ao redimensionamento da janela
- Otimiza o espaçamento vertical entre os itens
- Mantém performance mesmo com muitos elementos

### Webpack Configurado Manualmente

A configuração do Webpack foi criada especificamente para este projeto, incluindo:

- Configuração de loaders para diferentes tipos de assets
- Otimização de bundle size
- Cópia seletiva de assets estáticos
- Configuração de dev server personalizada

## 📝 Obras Incluídas

A galeria apresenta 15 obras-primas, incluindo:

- **Starry Night** - Vincent Van Gogh (1889)
- **Girl with a Pearl Earring** - Johannes Vermeer (1665)
- **Guernica** - Pablo Picasso (1937)
- **Mona Lisa** - Leonardo da Vinci (1503)
- E muitas outras...

## 👨‍💻 Autor

**Rafael Pereira**

- Email: orafaeldev@gmail.com
- GitHub: [@orafael93](https://github.com/orafael93)

## 📄 Licença

Este projeto é privado e foi desenvolvido para fins educacionais.

## 🚀 Agradecimentos

- [Frontend Mentor](https://www.frontendmentor.io/) pelo desafio
