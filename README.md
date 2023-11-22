# Boas vindas ao repositório Pluga React Challenge!

<details>
  <summary><i>📧 Querida Pessoa Avaliadora</i></summary>
  <sub>
    O conteúdo presente na atual branch possui diversas alterações e implementações realizadas após o prazo final estipulado no convite para o desafio! Por vontade própria decidi dar continuidade no desenvolvimento e agora, ao concluir uma versão mais coesa e satisfatória do projeto, decidi seguir o aprendizado e tentar fazer o deploy com uso do Vercel. Para tanto, aparenta se fazer necessário que o código final esteja presente na branch <b>main</b>!
    <br>O intuito não visa em nenhum momento manipular a avaliação do projeto e, sendo assim, é possível acessar o código contendo os arquivos alterados até o prazo final através 
<a href="https://github.com/ptSouthier/Pluga-React-Challenge/tree/backup/implemented-in-due-time" target="_blank">dessa branch</a>!
  </sub>
</details>

## Contexto

Este projeto foi um Teste Técnico recebido através de um convite por e-mail da empresa [Pluga](https://pluga.co/).

O desafio consiste em escrever uma <b>aplicação React</b> contendo uma listagem paginada de cards representando os [aplicativos integrados na Pluga](https://pluga.co/ferramentas_search.json), onde o usuário possa buscar dentre as ferramentas listada através de uma barra de pesquisa, abrir um modal contendo algumas informações da aplicação e tenha visibilidade através também do modal aos últimos 3 aplicativos visualizados.
<br> É possível visualizar e interagir com _quase_ todas as features disponíveis do projeto através do [Link do Deploy](https://pluga-react-challenge.vercel.app/) feito através do Vercel.

---

## Escolhas do projeto e bibliotecas utilizadas no desenvolvimento:

O projeto foi desenvolvido em React através do Framework Next.js em sua versão 14.0.3. Fizeram parte do desenvolvimento também bibliotecas como, Tailwind para auxílio na estilização e Jest e RTL como dependências de desenvolvimento para elaboração de testes unitários de componentes. Para efetuar o deploy do projeto fiz uso do Vercel, devido fato de ser a empresa criadora do Next.js.

* [React](https://react.dev/)<br>
* [Next.js](https://nextjs.org/)<br>
* [Tailwind CSS](https://tailwindcss.com/)<br>
* [Jest](https://jestjs.io/pt-BR/)<br>
* [React Testing Library - RTL](https://testing-library.com/docs/react-testing-library/intro/)<br>
* [Vercel](https://vercel.com/)<br>

---

## Instalação do projeto localmente

Após cada um dos passos, haverá um exemplo do comando a ser digitado para executar o que está sendo orientado, caso enfrente qualquer dificuldade e o exemplo não seja suficiente, não hesite em me contatar em _patrick.southier@outlook.com_!

1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir** _nome-do-diretório_:
```javascript
  mkdir ptSouthier-code-challenge
```

<br><br>

2. Entre no diretório que acabou de criar e depois clone o projeto:
```javascript
  cd ptSouthier-code-challenge
  git clone git@github.com:ptSouthier/Pluga-React-Challenge.git
```

<br><br>

3. Agora entre no diretório do projeto clonado e rode o comando **npm install** para instalar as dependências do projeto _(não se preocupe, você poderá excluir tudo depois que utilizar o app)_. 
```javascript
  cd Pluga-React-Challenge
  npm install
```

<br><br>

4. Em seguida, basta colocarmos a aplicação Next.js para rodar para que possamos acessá-la e interagirmos com suas funcionalidades! Após a execução do comando descrito, aguarde o Next te comunicar pelo terminal que a aplicação está pronta para ser acessada em seu navegador pela rota _localhost:3000_ ;)
```javascript
  npm run dev
```

<br><br>

5. Ao fim, para **REVERTER** o passo anterior e **encerrar** a execução que iniciamos, vamos interromper a execução da aplicação Next.
 * No terminal em que o Next.js está em execução, aperte as teclas _CTRL + C_.

<br><br>

6. Como possuímos na aplicação testes desenvolvidos com Jest e RTL, podemos também rodar todos os testes distribuídos pelo projeto através de um único comando, e visualizar em nosso terminal os retornos obtidos!
```javascript
  npm run test
```

<br><br>


---


## Futuras Melhorias / Problemas Conhecidos

* Input da Barra de Pesquisa e lógica de filtragem dos dados estão quebrados no link do deploy Vercel.
* Correção de quebras visuais que podem ocorrer em ferramentas de nome extenso.
* Melhorias na presente documentação do projeto, como a inclusão de imagens reais do projeto em execução.
* Cobertura de teste para o componente Pagination.

---
