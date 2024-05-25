# Lumi Energy Bill handle Panel

Dashboard criado para gerenciar contas de energia, aplicação desenvolvida para teste técnico da Lumi.

## Stack utilizada

**Front-end:** React, Next, Ant Design, React Query, Axios

**Back-end:** Node, Express

**Banco de Dados** Postgres, PrismaORM

**Deploy** Vercel, Render, Google Firebase Cloud Bucket Storage

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/nittts/energy-bill-handle-panel.git
```

Entre no diretório do projeto

```bash
  cd energy-bill-handle-panel
```

para cada ambiente, acesse a pasta correspondente:

### Back-end:

Entre no diretório

```bash
  cd backend
```

Instale as dependências

```bash
  yarn install
```

Inicie o servidor

```bash
  yarn dev
```

### Front-end:

Entre no diretório

```bash
  cd frontend
```

Instale as dependências

```bash
  yarn install
```

Inicie o servidor

```bash
  yarn dev
```

## Deploy

Para fazer o deploy desse projeto rode na pasta raiz:

```bash
  docker-compose build
```

Para realizar a criação das imagens, após isso rode:

```bash
  docker-compose up
```

Para iniciar o servidor

## Autores

- [@Nitts](https://www.github.com/nittts)

## Referência

- [Como Instalar Docker (Windows)](https://gist.github.com/sidneyroberto/5f0b837c2d27f791fc494c164d2a7d74)
- [Como Instalar Docker (Linux)](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04-pt)
