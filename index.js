const { version, name } = require('./package.json');

const node_environment = process.env.NODE_ENV || 'development'

if (node_environment === 'development') {
  require('dotenv').config();
}

require('./api/server');

console.log(
  `<<< ${name} v${version} BOOTCAMP-NIGHT-API. Uma api para simular conexão com banco de dados e facilitar o desenvolvimento da camada de interface. >>>`
);
var messagem = 'Olá!!! bem-vindo à selva, bootcampers da noite. \n Essa é uma pequena api que armazena dados em um documento json. \n Parecido com o MongoDB!'+
'\n Sinta-se livre para alterar, fazer pedidos de merge e construir seu projeto super maneiro com essa api'+
'\n Github: @brutalzinn Gitlab: @roberto.paes Linkedin: roberto-paes'
console.log('\x1b[36m%s\x1b[0m',messagem)

var comandos = '\n Você pode usar comandos para facilitar o desenvolvimento. \n'+
'npm run about - mostrar mensagem e boas vindas \n'+
'npm run drop-categoria - excluir o banco de dados de categoria \n'+
'npm run drop-post - excluir o banco de dados de post'

console.log('\x1b[36m%s\x1b[0m',comandos)
