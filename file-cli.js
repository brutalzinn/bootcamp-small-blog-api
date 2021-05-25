const fs = require('fs');
const path = require('path');
const root_dir  = path.join(path.dirname(require.main.filename),'api','database')
var myArgs = process.argv.slice(2);


switch(myArgs[0]){

    case 'drop':
        fs.unlinkSync(path.join(root_dir,myArgs[1]+'.json'))
        console.log(`database ${myArgs[1]} are sucefull dropped`)
    break;
    case 'about':
      var messagem = 'Olá!!! bem-vindo à selva, bootcampers da noite. \n Essa é uma pequena api que armazena dados em um documento json. \n Parecido com o MongoDB!'+
      '\n Sinta-se livre para alterar, fazer pedidos de merge e construir seu projeto super maneiro com essa api'+
      '\n Github: @brutalzinn Gitlab: @roberto.paes Linkedin: roberto-paes'
      console.log('\x1b[36m%s\x1b[0m',messagem)
    break;
    case 'health':
     console.log(`checking health of ${myArgs[1]}`)
     let filePath = path.join(root_dir,myArgs[1]+'.json')
    if (fs.existsSync(filePath)) {
      console.log(`The health of ${myArgs[1]} has 100% OK`)
    }
    break;
    case 'create':

    break;

}