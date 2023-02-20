# Techfinanças

Este projeto foi desenvolvido para auxiliar no controle de financeiro doméstico. Onde você registrará todos as suas desepesas e receitas e seu saldo ficará sempre visível para saber o quanto está disponível para você gastar.

## Rodar o projeto

Na pasta do projeto, crie um arquivo .env com o seguinte:
```
REACT_APP_API_URL=http://localhost:3080/api
```
Sendo a URL da API que fará a consulta dos dados, quando o repositório remoto for escolhido.

### Modo de desenvolvimento

Ainda na pasta do projeto, rode o comando:
```
npm start
```

Aguarde um momento e ele abrirá uma aba no seu navegador com o projeto, caso não abra acesse https://localhost:3000 no seu navegador.

### Modo de produção

Rode o comando abaixo na pasta do projeto:
```
npm run build

```

Será criado os arquivos do aplicativo na pasta `build`.

Configure o seu servidor web para exibir os arquivos desta pasta ou mova para uma pasta que seja aberta pelo seu servidor web.


Para mais informações acesse o link: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)