<details>
  <summary>[<i>EN</i>] Description</summary>

  # Welcome to the Pluga React Challenge repository!

  ## Context
  This project was a Technical Test received through an email invitation from the company [Pluga](https://pluga.co/).
  
  The challenge involves creating a <b>React application</b> with a paginated listing of cards representing the applications integrated into Pluga. Users should be able to search for tools within the list using a search bar, open a modal containing a few [application information](https://pluga.co/ferramentas_search.json), and also have visibility, through the modal, of the last 3 viewed applications.
  <br> You can view and interact with the available features of the project through the [Deployment Link](https://pluga-react-challenge.vercel.app/) deployed using Vercel.

  ![](https://github.com/ptSouthier/Pluga-React-Challenge/blob/main/public/ApplicationGIF.gif)
  <sub><br>GIF illustrating the developed application</sub>
  
  ---
  
  ## Project Choices and Libraries Used in Development:

  The project was developed in React using the Next.js framework in its version 14.0.3. The development also included libraries such as Tailwind for styling assistance, and Jest and RTL as development dependencies for unit testing of components. For project deployment, I used Vercel, as it is the company behind Next.js.
  
  * [React](https://react.dev/)<br>
  * [Next.js](https://nextjs.org/)<br>
  * [Tailwind CSS](https://tailwindcss.com/)<br>
  * [Jest](https://jestjs.io/pt-BR/)<br>
  * [React Testing Library - RTL](https://testing-library.com/docs/react-testing-library/intro/)<br>
  * [Vercel](https://vercel.com/)<br>
  
  ---

  ## Installing the Project Locally

  After each step, there will be an example command to be typed to execute what is being instructed. If you encounter any difficulty and the example is not sufficient, do not hesitate to contact me at _patrick.southier@outlook.com_!
  
  1. Open the terminal and create a directory in the location of your choice with the command **mkdir** *directory-name*:
  ```javascript
    mkdir ptSouthier-code-challenge
  ```
  
  <br><br>
  
  2. Enter the directory you just created and then clone the project:
  ```javascript
    cd ptSouthier-code-challenge
    git clone git@github.com:ptSouthier/Pluga-React-Challenge.git
  ```
  
  <br><br>
  
  3. Now enter the cloned project directory and run the command **npm install** to install the project dependencies *(don't worry, you can delete everything after using the app)*.
  ```javascript
    cd Pluga-React-Challenge
    npm install
  ```
  
  <br><br>
  
  4. Next, we just need to run the Next.js application so that we can access it and interact with its features! After running the described command, wait for Next to notify you through the terminal that the application is ready to be accessed in your browser at *localhost:3000* ;)
  ```javascript
    npm run dev
  ```
  
  <br><br>
  
  5. Finally, to **REVERT** the previous step and **terminate** the execution we started, let's stop the Next.js application.
  * In the terminal where Next.js is running, press the *CTRL + C* keys.
  <br><br>
  
  6. Since we have tests developed with Jest and RTL in the application, we can also run all the tests distributed throughout the project with a single command and view the results in our terminal!
  ```javascript
    npm run test
  ```
  
  <br><br>
  
  
  ---
  
  
  ## Future Improvements / Known Issues
  
  * Fix visual breaks that may occur in tools with long names.
  * Responsiveness - Layout may break on mobile devices.
  * Test coverage for the Pagination component.

  ---
</details>

<details open>
  <summary>[<i>PT-BR</i>] Descrição</summary>
  
  # Boas vindas ao repositório Pluga React Challenge!
  
  ## Contexto
  
  Este projeto foi um Teste Técnico recebido através de um convite por e-mail da empresa [Pluga](https://pluga.co/).
  
  O desafio consiste em escrever uma <b>aplicação React</b> contendo uma listagem paginada de cards representando os [aplicativos integrados na Pluga](https://pluga.co/ferramentas_search.json), onde o usuário possa buscar dentre as ferramentas listada através de uma barra de pesquisa, abrir um modal contendo algumas informações da aplicação e tenha visibilidade através também do modal aos últimos 3 aplicativos visualizados.
  <br> É possível visualizar e interagir com as features disponíveis do projeto através do [Link do Deploy](https://pluga-react-challenge.vercel.app/) feito através do Vercel.
  
  ![](https://github.com/ptSouthier/Pluga-React-Challenge/blob/main/public/ApplicationGIF.gif)
  <sub><br>_GIF ilustrando aplicação desenvolvida_</sub>
  
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
  
  * Correção de quebras visuais que podem ocorrer em ferramentas de nome extenso.
  * Responsividade - Layout pode quebrar em dispositivos mobile.
  * Cobertura de teste para o componente Pagination.
  
  ---
</details>
