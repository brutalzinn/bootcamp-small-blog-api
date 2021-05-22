const {tagsGenerator} = require('./tags.generator')
const {openFile,createModel,Insert,Update,Delete} = require('../utils/database.utils')


const tagsUtil = (model) =>{
    const modelCopy = {...model}
    delete modelCopy['tags']
    const tags = model['tags']
    return {...modelCopy,...tags}
}
const tagsCreator = (model) =>{
    return tagsGenerator(model)
}
const tagsUpdate = async (arquivo,model) =>{
    const database = await openFile(arquivo)
    let tagsFinder = database.findIndex((item)=>item.id == model.id)
    if(database[tagsFinder]['tags']){
        model.tags.map((item)=>{
            if(!database[tagsFinder]['tags'].includes(item)){
                database[tagsFinder]['tags'].push(item)
            }
        })
    }
    return database[tagsFinder]['tags']
}
const tagsSync = async (origin,destin,key,id) =>{
    const databaseOrigin = await openFile(origin)
    const databaseDestin = await openFile(destin)
   const teste = databaseDestin.map((origin)=>{
        let tagsFinder = databaseOrigin.find((item)=>item[key] == origin.id)
        return tagsFinder
    })
   console.log('###sync',teste)
  //  return database[tagsFinder]['tags']
}



module.exports = {
    tagsUtil,
    tagsUpdate,
    tagsSync,
    tagsCreator
}