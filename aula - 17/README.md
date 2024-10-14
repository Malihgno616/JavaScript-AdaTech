# Configuração do TypeScript

1. Inicializar um projeto Node.js (npm init ou npm init -y)
2. Instalar o TypeScript -
   2.1 Instalação global: `npm install -g typescript`
   2.2 Instalação local: `npm install typescript`
3. Utilizar o TypeScript instalado para transpilar o nosso código (converter nosso código TS para JS).
   3.1 `npx tsc index.ts` ou para mudar automaticamente todos os arquivos e transferir para JS `npx tsc --watch`

4. Configurar o arquivo tsconfig.json para que o TypeScript saiba como transpilar 