# Proxy Reverso com Nginx, Node.js e MySQL

Este projeto demonstra a configuração de um **proxy reverso** usando o **Nginx** para encaminhar requisições para uma aplicação **Node.js**. A aplicação Node.js se conecta a um banco de dados **MySQL**, onde ela registra um nome na tabela `people` e retorna uma lista de todos os nomes cadastrados. O objetivo é criar um ambiente de desenvolvimento utilizando **Docker** para orquestrar todos os serviços (Nginx, Node.js e MySQL).

## Arquitetura do Projeto

- **Nginx**: Configurado como um proxy reverso para redirecionar as requisições HTTP para a aplicação Node.js.
- **Node.js**: Uma aplicação simples que recebe requisições, insere um nome no banco de dados MySQL e retorna uma lista de todos os nomes cadastrados.
- **MySQL**: Banco de dados utilizado para armazenar os nomes na tabela `people`.

## Tecnologias Utilizadas

- **Node.js**: Backend da aplicação que manipula as requisições e interage com o banco de dados MySQL.
- **Nginx**: Servidor web que atua como proxy reverso, encaminhando as requisições para a aplicação Node.js.
- **MySQL**: Banco de dados relacional utilizado para armazenar dados persistentes.
- **Docker**: Containeriza os serviços, permitindo fácil orquestração com o Docker Compose.

## Requisitos

- **Docker**: Necessário para rodar os containers.
- **Docker Compose**: Utilizado para orquestrar múltiplos containers de forma simples.

## Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/joao-victor-dias/full_cycle_rocks_proxy_reverso.git
cd full_cycle_rocks_proxy_reverso
```

### 2. Inicie os containers com Docker Compose

```bash
docker-compose up -d
```

Este comando irá iniciar os três serviços (Nginx, Node.js e MySQL) em containers separados.

### 3. Acesse o projeto

Abra o navegador e vá até:

http://localhost:8080

Você verá uma mensagem:

```html
<h1>Full Cycle Rocks!</h1>
```

E a lista de nomes cadastrados no banco de dados MySQL.

## Estrutura de Pastas

- **nginx/**: Contém a configuração do Nginx (`default.conf`).
- **node-app/**: Contém a aplicação Node.js (`Dockerfile`, `index.js`, `package.json`).
- **mysql/**: Contém o script de inicialização do banco de dados (`init.sql`).