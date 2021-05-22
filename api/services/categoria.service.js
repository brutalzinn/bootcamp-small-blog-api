const {openFile,createModel,Insert,Update,Delete} = require('../utils/database.utils')
const { tagsUtil,tagsCreator,tagsUpdate,tagsSync } = require('../utils/tags.utils')
const create = async (body) => {

//const updateTags =  await tagsUpdate('post',{id:body.post,tags:tagsCreator(body)})
  //await Update('post',{id:body.post,tags:updateTags})
  await Insert('categoria',createModel(body))
}
const get = async (id) => {
  const json = await openFile('categoria')
  return json.find((item)=>item.id == id)
}
const edit = async (body) => {
  await Update('categoria',body)
  await tagsSync('categoria','post','categoria')
}
const del = async (body) => {
  
  await Delete('categoria',body)
}

const list = async (body) => {
  return await openFile('categoria')
}

module.exports = {
  create,
  list,
  get,
  del,
  edit
}
