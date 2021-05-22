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
      console.log('hello!!! welcome to the jungle, night bootcampers. This is a small api that store data into json document like MongoDB!')
      console.log('Feel free to change all this wild forest!')
      console.log('Github: @brutalzinn', 'Gitlab: @roberto.paes','Linkedin: roberto-paes')
    break;
    case 'create':

    break;

}