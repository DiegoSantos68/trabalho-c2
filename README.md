# Trabalho C2

Este é um projeto de exemplo para demonstrar um sistema básico de gerenciamento de usuários, posts e comentários utilizando Node.js, TypeScript, Express e SQLite com Prisma ORM.

## Instalação

1. Clone o repositório:

git clone https://github.com/DiegoSantos68/trabalho-c2.git
cd trabalho-c2

2. Instale as dependências:

npm install

3. Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente:

DATABASE_URL="file:./dev.db"

4. Execute as migrações do banco de dados:

npx prisma migrate dev

## Executando o Projeto

5. Para iniciar o servidor localmente:

npm run dev

O servidor será iniciado em http://localhost:3000.

## Endpoints Disponíveis

### Usuários

- GET /users: Listar todos os usuários.
- GET /users/:id: Obter um usuário específico.
- POST /users: Criar um novo usuário.
- PUT /users/:id: Atualizar um usuário existente.
- DELETE /users/:id: Deletar um usuário.

### Posts

- GET /posts: Listar todos os posts.
- GET /posts/:id: Obter um post específico.
- POST /posts: Criar um novo post.
- PUT /posts/:id: Atualizar um post existente.
- DELETE /posts/:id: Deletar um post.

### Comentários

- GET /comments: Listar todos os comentários.
- GET /comments/:id: Obter um comentário específico.
- POST /comments: Criar um novo comentário.
- PUT /comments/:id: Atualizar um comentário existente.
- DELETE /comments/:id: Deletar um comentário.

## Estrutura do Projeto

/src
  /controllers
    - commentController.ts
    - postController.ts
    - userController.ts
  /routes
    - commentRoutes.ts
    - postRoutes.ts
    - userRoutes.ts
  /services
    - commentService.ts
    - postService.ts
    - userService.ts
  /prisma
    - schema.prisma
  - app.ts
  - server.ts

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- SQLite
- Prisma ORM

