# Studio Ghibli - Coleção de Filmes

Uma aplicação web para explorar os filmes do Studio Ghibli, permitindo marcar filmes como assistidos, favoritos, adicionar anotações e avaliações pessoais.

## Tecnologias Utilizadas

- React 19
- TypeScript
- Styled Components
- React Query (TanStack Query)
- React Toastify
- Jest e Testing Library
- API pública do Studio Ghibli

## Requisitos Implementados

### Obrigatórios
- [x] Listagem de filmes com informações completas (imagem, título, ano, duração, sinopse, diretor, produtor, avaliação)
- [x] Marcação de filmes como assistidos
- [x] Marcação de filmes como favoritos
- [x] Filtragem de filmes por título
- [x] Busca de palavras na sinopse com destaque do texto buscado
- [x] Adição de anotações aos filmes
- [x] Avaliação pessoal de 1 a 5 estrelas
- [x] Filtros diversos (assistidos, favoritos, com anotações, por avaliação)
- [x] Ordenação de filmes por diversos critérios

### Desejáveis
- [x] Uso de TypeScript
- [x] Layout responsivo
- [x] Salvamento das informações no localStorage
- [x] Mensagens toast para operações
- [x] Testes unitários
- [x] Separação clara de responsabilidades (componentes, serviços, etc.)
- [x] Uso de biblioteca de estilo (Styled Components)
- [x] Uso de Context API para gerenciamento de estado
- [x] Uso do React Query para gerenciamento de estado assíncrono

## Como Instalar e Executar

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
cd studio-ghibli-front-test
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse a aplicação em [http://localhost:5173](http://localhost:5173)

## Como Executar os Testes

Para executar os testes unitários:

```bash
npm test
```

Para executar os testes em modo de observação (útil durante o desenvolvimento):

```bash
npm run test:watch
```

## Estrutura do Projeto

- `/src/components`: Componentes reutilizáveis da aplicação
- `/src/contexts`: Contextos para gerenciamento de estado
- `/src/hooks`: Hooks personalizados
- `/src/pages`: Páginas da aplicação
- `/src/services`: Serviços para comunicação com APIs
- `/src/styles`: Estilos globais
- `/src/types`: Definições de tipos TypeScript
- `/src/__tests__`: Testes unitários

## Créditos

Esta aplicação consome a API pública do Studio Ghibli:
- [https://ghibliapi.vercel.app](https://ghibliapi.vercel.app)

---

Desenvolvido como parte do desafio técnico TruckPag.
