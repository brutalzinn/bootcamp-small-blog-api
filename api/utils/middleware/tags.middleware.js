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
    console.log('middleware chamado',body)
    var myCategory = await openFile('categoria')
    console.log(myCategory)
    if(isArray(body['categoria'])){
        body['categoria'].map((item)=>{
            let findedCategory  = myCategory.find((f)=>f.id == item)
            tagsGenerator(findedCategory).map((c)=>{
                categoriaTag.push(c)
            })
        })
    }else{
        
        let findedCategory = myCategory.find((f)=>f.id == body['categoria'])
        tagsGenerator(findedCategory).map((c)=>{
            categoriaTag.push(c)
        })
        
    }
    req.body = { ...body,tags:[...tagsGenerator(body),...categoriaTag] }
    
    
    next()
}

module.exports = {
    tagsHandler
}