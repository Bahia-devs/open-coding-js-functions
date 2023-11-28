# Open-Coding JS Functions

Neste open-coding nós exploramos sobre `arrow functions`, `named functions` e `anonymous functions` no javascript. Este repositório contém vários exemplos que mostram quando utilizar cada um destes tipos de funções.

## Dependência

Para rodar a maioria dos exemplos, você vai precisar do [Node.js](https://nodejs.org/en). A versão que eu utilizei foi a `v18.15.0`, utilize uma versão igual ou maior. Recomendo baixar o Node utilizando o [Node Virtual Manager](https://github.com/nvm-sh/nvm).

## Como executar os códigos

Pelo terminal acesse a pasta do exemplo que você quer executar. Por exemplo, quero acessar o exemplo `1-hoisting`, eu vou então rodar o comando:

```bash
cd src/1-hoisting
```

Perceba que dentro de cada exemplo, temos um script para cada tipo de função `arrow`, `anonymous` e `named`. Além disso, temos um arquivo `package.json` que contém alguns scripts pré definidos para facilitar rodar os códigos com o Node.js. Para cada tipo de função existe um script:

**Para quem usa yarn**

- `yarn named`: roda o script que utiliza a função named.
- `yarn arrow`: roda o script que utiliza a função arrow.
- `yarn anonymous`: roda o script que utiliza a função anonymous.

**Para quem usa npm**

- `npm run named`: roda o script que utiliza a função named.
- `npm run arrow`: roda o script que utiliza a função arrow.
- `npm run anonymous`: roda o script que utiliza a função anonymous.

Quando quiser rodar outro item de exemplo, só voltar uma pasta e entrar no exemplo que quer acessar:

```bash
cd ../2-methods-in-object
```

## Exemplos em HTML

Você pode encontrar alguns exemplos que não usam o Node.js, pois usam arquivos `.html`, como o exemplo `4-dynamic-contexts`. Para estes exemplos, basta você abrir o arquivo `html` no navegador para executar o exemplo.

# Referências

Aqui estão vários artigos importantes para você entender mais sobre as diferenças entre estas funções e quando utilizá-las. Além disso, você consegue encontrar vários outros assuntos relacionados. Acessem esses links, leiam, coloquem em prática para entender como que essas coisas funcionam.

- [Anonymous Functions vs Named Functions vs Arrow Functions](https://dev.to/mathlete/anonymous-functions-vs-named-functions-vs-arrow-functions-57pm)
- [When 'Not' to Use Arrow Functions](https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/)
- [5 Differences Between Arrow and Regular Functions](https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/)
- [Gentle Explanation of "this" in JavaScript](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/#32-pitfall-separating-method-from-its-object)
- [About globalThis](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis)
- ['this' different between REPL and script](https://stackoverflow.com/questions/20861049/this-different-between-repl-and-script)
- [What is tne global object in Node.js](https://stackoverflow.com/questions/43627622/what-is-the-global-object-in-nodejs)