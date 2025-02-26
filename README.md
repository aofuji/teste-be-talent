# Teste BeTalent

Este é um projeto de teste técnico para a BeTalent, desenvolvido com Next.js.

## Requisitos

Certifique-se de ter os seguintes requisitos instalados em sua máquina:

- Node.js (versão 14 ou superior)
- npm (versão 6 ou superior) ou yarn (versão 1.22 ou superior)

## Instalação

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/seu-usuario/teste-be-talent.git
   ```
2. Navegue até o diretório do projeto:
    ```bash
    npm install
    ```
    ou
    ```bash
    yarn install
    ```

3. Executando o Projeto

    ```bash
    npm run dev
    ```
    ou
    ```bash
    yarn dev
    ```
4. Executando JSON-SERVER
    ```bash
    npm run json-server
    ```
O servidor de desenvolvimento será iniciado e você poderá acessar o projeto em http://localhost:3000 \
O Json-server sera iniciado pode ser acessado em http://localhost:3001/employees

5. estrutura do projeto
```
├── src
│   ├── app
│   │   └── layout.tsx
│   ├── components
│   │   ├── Header.tsx
│   │   ├── Main.tsx
│   │   ├── List.tsx
│   │   ├── MobileList.tsx
│   │   ├── Search.tsx
│   │   └── SkeletonTable.tsx
│   ├── core
│   │   └── query-provider.tsx
│   ├── interfaces
│   │   └── employees.ts
│   ├── utils
│   │   ├── fetch.ts
│   │   ├── formatDate.ts
│   │   └── formatPhone.ts
│   └── styles
│       └── globals.css
├── public
│   ├── img
│   │   ├── chevron-down.png
│   │   ├── chevron-up.png
│   │   └── search.png
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

6. Adicionado variaveis globais das cores no arquivo `tailwind.config.ts` e no arquivo `global.css`

### Scripts Disponiveis

- dev: Inicia o servidor de desenvolvimento. 
* json-server: Inicia o json-server.