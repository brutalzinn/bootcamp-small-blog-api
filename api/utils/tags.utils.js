const {tagsGenerator} = require('./tags.generator')
const {openFile,createModel,Insert,Update,Delete,updateOverwrite} = require('../utils/database.utils')


const tagsUtil = (model) =>{
    const modelCopy = {...model}
    delete modelCopy['tags']
    const tags = model['tags']
    return {...modelCopy,...tags}
}
const tagsCreator = (model) =>{
    return tagsGenerator(model)
}
function isArray(obj){
    return !!obj && obj.constructor === Array;
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
const tagsSync = async (origin,destin,key) =>{
    const databaseOrigin = await openFile(origin) //categoria
    const databaseDestin = await openFile(destin) //post
    
    databaseDestin.map((origin,index)=>{
        let originTags = []
        if(isArray(origin[key])){
            origin[key].map((category,keyIndex)=>{
                let categoryFinder = databaseOrigin.find((v)=> v.id == category)
                if(!categoryFinder){
                    if(Object.keys(origin[key]).length == 1){
                        console.log('executou')
                        delete databaseDestin[index][key]
                        console.log('toremove',databaseDestin[index])
                    }else{
                        origin[key].splice(keyIndex,1)
                    }
                 //   return false
                }else{
                    tagsCreator(categoryFinder).map((catTag)=>{
                        originTags.push(catTag)
                    })
                }
          
            })
        }else{
            let categoryFinder = databaseOrigin.find((v)=> v.id == origin[key])
            console.log('FSDFFSDSDF',categoryFinder)
            if(!categoryFinder){
                console.log('sem indetificao',origin[key])
                console.log('categoria sem array não encontrada')
              delete databaseDestin[index][key]
            }else{
                tagsCreator(categoryFinder).map((catTag)=>{
                    originTags.push(catTag)
                })
            }
        }
        const update = async () =>{ 
            let newTags = tagsCreator(origin)
            // if(Object.values(origin[key]).length == 0){
            // }
            databaseDestin[index]['tags'] = [...newTags,...originTags]
            await updateOverwrite('post',databaseDestin[index])
        }
        update()
    }) 
    
    return databaseDestin
    //return destinTags.concat(originTags)
    //  return database[tagsFinder]['tags']
}



module.exports = {
    tagsUtil,
    
    tagsUpdate,
    tagsSync,
    tagsCreator
}