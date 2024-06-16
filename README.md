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

