const tagEnabled = process.env.TAGS
const {tagsGenerator} = require('../../utils/tags.generator')
const {openFile,createModel,Insert,Update,Delete,updateOverwrite} = require('../../utils/database.utils')
function isArray(obj){
    return !!obj && obj.constructor === Array;
}


const tagsHandler = async (req, res, next) =>{
console.log(tagEnabled)
const { body } = req;
if(!tagEnabled){
    next()
}
let categoriaTag = []
if(isArray(body['categoria'])){
    body['categoria'].map((item)=>{
        let myCategory = openFile('categoria').find((f)=>{f.id == item})
        console.log('middleware',myCategory)
        categoriaTag.push(myCategory)
    })
}
let postTag = tagsGenerator(body)
req.body = { ...body,tags:tagsGenerator(body) }


next()
}

module.exports = {
    tagsHandler
}