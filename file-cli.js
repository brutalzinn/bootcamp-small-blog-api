const fs = require('fs');
const path = require('path');
const root_dir  = path.join(path.dirname(require.main.filename),'api','database')
var myArgs = process.argv.slice(2);

console.log(myArgs)

switch(myArgs[0]){

    case 'drop':
        fs.unlinkSync(path.join(root_dir,myArgs[1]+'.json'))
    break;
    case 'create':

    break;

}