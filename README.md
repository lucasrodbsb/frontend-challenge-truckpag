# Studio Ghibli - Catálogo de Filmes

### Feito por Lucas Rodrigues

Uma aplicação para explorar, filtrar e gerenciar seu catálogo pessoal de filmes do Studio Ghibli.

## 📋 Índice

- [🚀 Instalação e Execução](#-instalação-e-execução)
- [🛠️ Ferramentas Utilizadas](#️-ferramentas-utilizadas)
- [✅ Requisitos Implementados](#-requisitos-implementados)

## 🚀 Instalação e Execução

### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositório>
   cd frontend-challenge-truckpag
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Execute a aplicação em modo de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Acesse a aplicação em:
   ```
   http://localhost:5173
   ```

## 🛠️ Ferramentas Utilizadas

- **React**: Biblioteca para construção de interfaces (v18)
- **TypeScript**: Superset tipado de JavaScript
- **Vite**: Ferramenta de build rápida e moderna
- **Styled Components**: Biblioteca para estilização com CSS-in-JS
- **React Query**: Biblioteca para gerenciamento de estado assíncrono
- **React Toastify**: Biblioteca para exibição de notificações toast
- **React Icons**: Biblioteca de ícones
- **Axios**: Cliente HTTP para requisições à API

## ✅ Requisitos Implementados

### Requisitos Obrigatórios ✓

- ✅ Listagem de filmes com:
  - Imagem do filme
  - Título
  - Ano de lançamento
  - Duração
  - Sinopse
  - Diretor e Produtor
  - Nota de avaliação (campo `rt_score`)
- ✅ Marcação de filme como assistido
- ✅ Marcação de filme como favorito
- ✅ Filtro de filmes por título através de campo de texto
- ✅ Busca de palavras do filtro na sinopse do filme com destaque
- ✅ Adição de anotações de texto a um filme
- ✅ Adição de avaliação pessoal de 1 a 5 estrelas
- ✅ Filtros de filmes por:
  - Assistido
  - Favorito
  - Com anotação
  - Número de estrelas
- ✅ Ordenação de filmes (crescente/decrescente) por:
  - Título
  - Duração
  - Avaliação pessoal
  - Nota de avaliação

### Requisitos Desejáveis ✓

- ✅ Utilização de TypeScript
- ✅ Implementação de responsividade básica
- ✅ Salvamento de dados no localStorage
- ✅ Mensagens toast para operações
- ✅ Separação clara de responsabilidades (componentes, serviços, etc.)
- ✅ Utilização de biblioteca de estilo (Styled-components)
- ✅ Utilização de Context API
- ✅ Utilização de solução para estado assíncrono (React Query)

---

Projeto desenvolvido como parte do desafio técnico para a vaga de Desenvolvedor Frontend na Truckpag.