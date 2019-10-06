# App-Ranking-PGP-BackEnd

### Rodando a API localmente

**1. Clone o repositório em sua pasta de preferência**
```sh
$ git clone https://github.com/MaNegrao/App-Ranking-PGP-BackEnd.git && cd App-Ranking-PGP-BackEnd
```


**2. Instale as dependências**
 ```sh
$ npm install
```

**3. Abra o arquivo /config/database.js**
Certifique-se que usuário, senha, host e porta são configuradas de acordo com a configuração do postgres no seu pc (não precisa criar o banco neste passo)


**4. Criando o banco**
Na pasta raíz do projeto, e com o postgres rodando, execute os comandos:
 ```sh
$ npx sequelize db:create
```
 ```sh
$ npx sequelize db:migrate
```
Estes comandos devem criar o banco e migrar a estrutura dele, respectivamente

**5. Populando o banco**
Com os passos anteriores sido executados, execute o seguinte comando
 ```sh
$ npx sequelize-cli db:seed:all
```
Seeds são scripts de inserção executados para inserir alguns dados de exemplo no banco, você pode conferi-las em /database/seeders

**6. Executando a api (dev)**
Na pasta raíz do projeto, execute o comando:
 ```sh
$ npm run dev
```